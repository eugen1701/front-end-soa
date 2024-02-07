import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store.component';
import {RouterModule, Routes} from "@angular/router";
import {StoreDetailComponent} from './detail/detail.component';
import { MfeOrderComponentComponent } from './mfe-order-component/mfe-order-component.component';
import { StoreService } from './store.service';
import { DetailService } from './detail/details.service'
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import {AngularFireModule} from "@angular/fire/compat";

const routes: Routes = [
  {
    path: '',
    component: StoreComponent
  },
  {
    path: ':id',
    component: StoreDetailComponent,
  },
  {
    path: ':id/order',
    component: MfeOrderComponentComponent
  }

];

const firebaseConfig1 = {
  apiKey: "-----------",
  authDomain: "soaproject-22ec7.firebaseapp.com",
  projectId: "soaproject-22ec7",
  storageBucket: "soaproject-22ec7.appspot.com",
  messagingSenderId: "855454059531",
  appId: "---------",
  measurementId: "G-QGLXXJ1D30"
};

const firebaseConfig = {
  apiKey: "AIzaSyAzMiI_QlssVhhP3jagBEegavksfweePjw",
  authDomain: "chainsaw-9d983.firebaseapp.com",
  projectId: "chainsaw-9d983",
  storageBucket: "chainsaw-9d983.appspot.com",
  messagingSenderId: "419178475206",
  appId: "1:419178475206:web:dd13fe451361a7eaa0b1c7",
  measurementId: "G-EN6W0MC140"
};

@NgModule({
  declarations: [
    StoreComponent,
    StoreDetailComponent,
    MfeOrderComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),

    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    StoreService,
    DetailService,
    HttpClient
  ]
})
export class StoreModule {
}
