import { Routes } from '@angular/router';

export const routes: Routes = [
     // se activa cuando la URL esta vacia  y llama al path:''
    {   path: '', redirectTo: '', pathMatch: 'full' },
    {
      path: '',
      loadChildren: () =>
      import('./components/public/public.routes').then(m => m.public_routes)
    },
    {   
      path: 'servicios', 
      loadChildren: () => 
      import('./components/public/servicios/servicios.routes').then(m => m.servicios_routes)
    },
    {   
      path: 'transparencia', 
      loadChildren: () => 
      import('./components/public/transparencia/transparencia.routes').then(m => m.transparencia_routes)
    },
    // se activa cuando ninguna otra ruta coincide y llama al path:''
    {   path: '**', redirectTo: '' }
];
