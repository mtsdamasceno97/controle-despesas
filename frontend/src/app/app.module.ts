import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ListaMesesComponent } from './views/lista-meses/lista-meses.component'
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { DespesaFormDialogComponent } from './views/despesa-form-dialog/despesa-form-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent } from './views/header/header.component';
import { EditDespesasComponent } from './views/edit-despesas/edit-despesas.component';
import { SituacaoComponent } from './views/situacao/situacao.component';
import { RendaComponent } from './views/renda/renda.component';
import { TotalDespesasComponent } from './views/total-despesas/total-despesas.component';
import { PainelReceitasDespesasComponent } from './views/painel-receitas-despesas/painel-receitas-despesas.component';
import { InserirDespesaComponent } from './views/inserir-despesa/inserir-despesa.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { GraficoDespesasComponent } from './views/grafico-despesas/grafico-despesas.component';
import { NgChartsModule } from 'ng2-charts';
import { InserirRendaComponent } from './views/inserir-renda/inserir-renda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaMesesComponent,
    DespesaFormDialogComponent,
    HeaderComponent,
    EditDespesasComponent,
    SituacaoComponent,
    RendaComponent,
    TotalDespesasComponent,
    PainelReceitasDespesasComponent,
    InserirDespesaComponent,
    GraficoDespesasComponent,
    InserirRendaComponent,
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    NgChartsModule
  

  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
