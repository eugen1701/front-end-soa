import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChainsawStore } from '../../assets/model/ChainsawStore';
import { Observable } from 'rxjs';

@Injectable()
export class StoreService {
  baseUrl:string = "http://localhost:8765/api";

  constructor(private httpClient : HttpClient) {

  }

  get_stores(): Observable<ChainsawStore[]> {
    return this.httpClient.get<ChainsawStore[]>(this.baseUrl + '/store');
  }
}
