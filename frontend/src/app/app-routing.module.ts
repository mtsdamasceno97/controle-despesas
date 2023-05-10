import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListaMesesComponent } from './views/home/lista-meses/lista-meses.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'controle',
    component: ListaMesesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
