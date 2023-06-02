import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListaMesesComponent } from './views/lista-meses/lista-meses.component';
import { EditDespesasComponent } from './views/edit-despesas/edit-despesas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gerenciador',
    component: ListaMesesComponent
  },
  {
    path: 'despesas/edit/:id',
    component: EditDespesasComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
