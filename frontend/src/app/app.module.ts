import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ListaMesesComponent } from './views/home/lista-meses/lista-meses.component'
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { DespesaFormDialogComponent } from './views/home/despesa-form-dialog/despesa-form-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaMesesComponent,
    DespesaFormDialogComponent,
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
    ReactiveFormsModule

  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
