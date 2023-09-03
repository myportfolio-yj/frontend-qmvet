import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'qmvet';

   constructor(private http: HttpClient) {
    // Aquí puedes utilizar el servicio HttpClient para realizar solicitudes HTTP
    this.http.get('http://localhost:8080/api/data').subscribe((data) => {
      // Manejando los datos recibidos en la respuesta
      console.log(data); // Imprimiendo los datos en la consola
      // Aquí puedes realizar cualquier otra operación con los datos recibidosthis.http.get('http://localhost:8080/hello').subscribe((data) => {
  // Aquí puedes manejar los datos recibidos en la respuesta
    });
  }
}
