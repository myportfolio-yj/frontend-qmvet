import { Component , Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';

  responseFromMicroservice: string = '';
  constructor(private http: HttpClient) {}


  getHello(): Observable<string> {
  return this.http.get<string>(`${this.apiUrl}/hello`).pipe(
    tap((response: string) => {
      this.responseFromMicroservice = response;
    })
  );
}
}

