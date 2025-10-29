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

}
