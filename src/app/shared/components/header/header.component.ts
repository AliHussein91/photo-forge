import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('mobileMenu') menu!: ElementRef;

  open() {
    this.menu.nativeElement.classList.add('open');
  }
  close() {
    this.menu.nativeElement.classList.remove('open');
  }

}
