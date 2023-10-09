import { Component , Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { tap, catchError, map} from 'rxjs/operators';
import * as cors from 'cors';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class SharedComponent implements OnInit{
  ngOnInit(): void {
    // Código de inicialización aquí
  }
  
}
