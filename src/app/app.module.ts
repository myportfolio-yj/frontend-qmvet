import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
/*import { AppComponent } from './app.component';*/
import { /*AppComponent,*/ LoginComponent } from './auth/components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    /*AppComponent*/
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [/*AppComponent*/ LoginComponent]
})
export class AppModule { }
