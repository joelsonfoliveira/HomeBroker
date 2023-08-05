import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, retry } from 'rxjs';
import { PatrimonioInterface } from '../interfaces/Patrimonio';

@Injectable({
  providedIn: 'root',
})
export class PatrimonioService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}Position/userPosition`;

  constructor(private http: HttpClient) {}

  getPatrimonio(): Observable<PatrimonioInterface> {
    return this.http.get<PatrimonioInterface>(this.apiUrl);
  }
}
