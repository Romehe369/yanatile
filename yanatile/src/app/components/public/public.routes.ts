
import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LandingComponent } from './landing/landing.component';
import { RegidoresComponent } from './regidores/regidores.component';
import { MvisionComponent } from './mvision/mvision.component';
import { HistoriaComponent } from './historia/historia.component';
import { HimnodistritalComponent } from './himnodistrital/himnodistrital.component';
import { AgriculturaLocalComponent } from './agricultura-local/agricultura-local.component';
import { CentrosPobladosComponent } from './centros-poblados/centros-poblados.component';
import { FestividadesComponent } from './festividades/festividades.component';
export const public_routes: Routes = [
    {
        path: '',
        component: PublicComponent,
            children: [
            { path: '', component: LandingComponent },
            { path: 'alcalde',
                loadChildren: () =>
                import('./alcalde/alcalde.routes').then(m => m.alcalde_routes)
            },
            {   path:'regidores', component: RegidoresComponent},
            {   path:'mvision', component: MvisionComponent},
            {   path:'historia', component: HistoriaComponent},
            {   path:'himno', component: HimnodistritalComponent},
            {   path:'agricultura-local', component:AgriculturaLocalComponent},
            {   path:'centros-poblados', component:CentrosPobladosComponent},
            {   path:'festividades', component:FestividadesComponent}
        ]
    }
];
