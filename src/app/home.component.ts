import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  computed,
  inject,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { forkJoin } from 'rxjs';
import { GalleryPhoto, Profile, Project } from './models';

const FALLBACK_PROFILE: Profile = {
  name: 'Alexis', initials: 'A', role: 'Estudiante de Ingeniería de Sistemas',
  secondaryRole: 'Desarrollo web, diseño e IoT', city: 'Cochabamba, Bolivia',
  email: 'tu-correo@ejemplo.com', education: 'UNIFRANZ',
  introduction: 'Ideas, tecnología y aprendizaje en un mismo lugar.',
  biography: 'Este es un portafolio multimedia personal creado con Angular 22.',
  skills: [], highlights: [], gallery: []
};

/** Portafolio de una sola página inspirado visualmente en iPortfolio. */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('heroVideo') private heroVideo?: ElementRef<HTMLVideoElement>;

  readonly profile = signal<Profile>(FALLBACK_PROFILE);
  readonly projects = signal<Project[]>([]);
  readonly filters = ['Todos', 'Web', 'IoT', 'Redes'] as const;
  readonly filter = signal<'Todos' | Project['category']>('Todos');
  readonly visibleProjects = computed(() => {
    const current = this.filter();
    return current === 'Todos' ? this.projects() : this.projects().filter(p => p.category === current);
  });
  readonly navOpen = signal(false);
  readonly activeSection = signal('inicio');
  readonly videoPaused = signal(false);
  readonly selectedPhoto = signal<GalleryPhoto | null>(null);
  readonly selectedProject = signal<Project | null>(null);
  readonly formMessage = signal('');
  readonly loadError = signal(false);

  readonly links = [
    {id: 'inicio', label: 'Inicio', icon: '⌂'},
    {id: 'sobre-mi', label: 'Sobre mí', icon: '◉'},
    {id: 'habilidades', label: 'Habilidades', icon: '▤'},
    {id: 'trayectoria', label: 'Formación', icon: '◇'},
    {id: 'portafolio', label: 'Proyectos', icon: '▦'},
    {id: 'galeria', label: 'Galería', icon: '▣'},
    {id: 'contacto', label: 'Contacto', icon: '✉'}
  ];

  readonly contactForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] })
  });

  ngOnInit(): void {
    forkJoin({
      profile: this.http.get<Profile>('assets/data/profile.json'),
      projects: this.http.get<Project[]>('assets/data/projects.json')
    }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: ({profile, projects}) => { this.profile.set(profile); this.projects.set(projects); },
      error: (err: unknown) => { console.warn('No se pudieron leer los datos JSON.', err); this.loadError.set(true); }
    });
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) this.activeSection.set(visible.target.id);
    }, { rootMargin: '-20% 0px -48% 0px', threshold: [0, 0.15, 0.3, 0.5] });
    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  navigate(id: string): void {
    this.navOpen.set(false);
    this.activeSection.set(id);
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  toggleVideo(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => this.videoPaused.set(false)).catch(() => this.videoPaused.set(true));
    } else {
      video.pause(); this.videoPaused.set(true);
    }
  }

  saveDemoMessage(): void {
    this.formMessage.set('');
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    try {
      const messages = JSON.parse(localStorage.getItem('mi-portafolio-mensajes') ?? '[]') as unknown[];
      messages.push({...this.contactForm.getRawValue(), date: new Date().toISOString()});
      localStorage.setItem('mi-portafolio-mensajes', JSON.stringify(messages));
      this.formMessage.set('¡Mensaje guardado en este navegador! Es una demostración, no se envió por internet.');
      this.contactForm.reset();
    } catch {
      this.formMessage.set('Tu mensaje es válido. El navegador no permitió guardarlo; no se envió por internet.');
    }
  }

  closeOverlays(): void { this.selectedPhoto.set(null); this.selectedProject.set(null); }
}
