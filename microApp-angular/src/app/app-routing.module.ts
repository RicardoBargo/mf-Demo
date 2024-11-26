import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { CardAngularComponent } from './components/card-angular/card-angular.component';  // Si quieres mantenerlo o cambiarlo
import { AppComponent } from './app.component';  // Este se usa en el bootstrap de la app

const routes: Routes = [
  {
    path: '',  // Ruta raíz '/'
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (m) => m.ProductsModule  // Carga el ProductsModule en '/'
      ),
  },
  {
    path: 'angular',  // Ruta '/angular'
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (m) => m.ProductsModule  // Carga el ProductsModule en '/angular'
      ),
  },
  {
    path: '**',  // Ruta comodín para páginas no encontradas
    component: EmptyRouteComponent,  // Carga el componente de error 404
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Usamos RouterModule.forRoot para configurar las rutas principales
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],  // Configuramos la base href
})
export class AppRoutingModule {}
