import { Component } from '@angular/core';
import { RegidoresComponent } from "../regidores/regidores.component";
import { MenusComponent } from "../menus/menus.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink,RegidoresComponent, MenusComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
   currentTime: string = '';
  currentDate: string = '';
  private intervalId: any;

  ngOnInit(): void {
    this.updateDateTime();
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateDateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    this.currentDate = now.toLocaleDateString('es-PE', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }
}
