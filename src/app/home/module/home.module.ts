import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponent } from '../../shared/shared.component';
import { HomeComponent } from '../components/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a /login
  { path: 'shared', component: SharedComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [HomeComponent] //El componente raíz es el componente principal que se carga cuando se inicia la aplicación. 
})
export class HomeModule { }
