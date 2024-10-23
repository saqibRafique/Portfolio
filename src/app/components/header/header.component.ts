import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isMenuOpen = false;

  private router = inject(Router);

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToMain() {
    this.router.navigate(['/']);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
