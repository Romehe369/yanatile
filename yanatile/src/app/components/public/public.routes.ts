
import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LandingComponent } from './landing/landing.component';
import { RegidoresComponent } from './regidores/regidores.component';
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
            {   path:'regidores', component: RegidoresComponent}
            //{ path: 'detallesVista/:producto', component: DetailsViewComponent }
        ]
    }
];
