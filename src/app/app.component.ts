import { Component , Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { tap, catchError, map} from 'rxjs/operators';
import * as cors from 'cors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent implements OnInit{
  title: string = 'qmvet';
    responseFromMicroservice: string = '';
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.http.get<string>('http://localhost:8080/api/hello').pipe(
        map((data: any) => data.message), // Extrae el valor de la propiedad 'message'v  
        tap((message: string) => {
          this.responseFromMicroservice = message;
          }),
          catchError((error: any) => {
            console.error('Error en la solicitud HTTP:', error);
            return [];
          })
      ).subscribe();
    }
  
}
