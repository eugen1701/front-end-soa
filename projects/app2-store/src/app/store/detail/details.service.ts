import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChainsawStore } from '../../../assets/model/ChainsawStore';
import { Observable } from 'rxjs';

@Injectable()
export class DetailService {
  baseUrl:string = "http://localhost:8765/api";

  constructor(private httpClient : HttpClient) {

  }

  get_store_by_id(id): Observable<ChainsawStore> {
    return this.httpClient.get<ChainsawStore>(this.baseUrl + `/store/${id}`);
  }
}
