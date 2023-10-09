import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component , Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { tap, catchError, map} from 'rxjs/operators';
//import { SharedComponent } from '../../shared/shared.component';
import * as cors from 'cors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


@Injectable({
  providedIn: 'root'
})

export class HomeComponent implements OnInit{
  
  ngOnInit() {
    // Código que deseas ejecutar al inicializar el componente
  }
  
}
