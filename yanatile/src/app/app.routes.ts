import { Routes } from '@angular/router';

export const routes: Routes = [
     // se activa cuando la URL esta vacia  y llama al path:''
    {   path: '', redirectTo: '', pathMatch: 'full' },
    // path:'' o public
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
  /*{ path: 'noticias', loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasModule) },
  { path: 'transparencia', loadChildren: () => import('./pages/transparencia/transparencia.module').then(m => m.TransparenciaModule) },
  { path: 'tramites', loadChildren: () => import('./pages/tramites/tramites.module').then(m => m.TramitesModule) },
  { path: 'contacto', loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoModule) },
  { path: '**', redirectTo: '' }
    */
    // se activa cuando ninguna otra ruta coincide y llama al path:''
    {   path: '**', redirectTo: '' }
];
