import { Routes } from '@angular/router';
import { RentasComponent } from './rentas/rentas.component';
import { CodisecComponent } from './codisec/codisec.component';
import { RegistroCivilComponent } from './registro-civil/registro-civil.component';
import { DemunaComponent } from './demuna/demuna.component';
import { SeguridadCiudadanaComponent } from './seguridad-ciudadana/seguridad-ciudadana.component';
export const servicios_routes: Routes = [
    { path: 'rentas', component: RentasComponent},
    { path: 'codisec', component: CodisecComponent},
    { path: 'registro-civil', component: RegistroCivilComponent},
    { path: 'demuna', component: DemunaComponent},
    { path: 'seguridad-ciudadana', component:SeguridadCiudadanaComponent}
];