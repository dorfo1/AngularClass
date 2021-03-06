import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from '../environments/environment';

import { FilterPipe } from './pipes/filter.pipe';
import { OrderPipe } from './pipes/order.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/Header.component';
import { UserListPage } from './pages/UserList/UserList.page';
import { UserComponent } from './pages/User/User.page';
import { AuthComponent } from './pages/Auth/Auth.page';
import { SignUpComponent } from './pages/SignUp/SignUp.page';
import { LoadingComponent } from './components/Loading/Loading.component';
import { NotFoundComponent } from './pages/404/404.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    OrderPipe,
    FilterPipe,
    AppComponent,
    HeaderComponent,
    UserListPage,
    UserComponent,
    LoadingComponent,
    AuthComponent,
    SignUpComponent,
    NotFoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    MatCheckboxModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
