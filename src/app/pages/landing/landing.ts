import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing',
  imports: [FontAwesomeModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  menuOpen = false;
  isScrolled = false;

   @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80;
  }

  scrollTo(id: string) {
  this.menuOpen = false;

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

}
