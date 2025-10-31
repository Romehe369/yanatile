import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";


@Component({
  selector: 'app-transparencia',
  imports: [RouterOutlet,HeaderComponent, FooterComponent],
  templateUrl: './transparencia.component.html',
  styleUrl: './transparencia.component.css',
})
export class TransparenciaComponent {

}
