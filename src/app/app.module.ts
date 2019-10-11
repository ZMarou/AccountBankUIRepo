import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { AccountComponent } from './account/account.component';
import { OperationComponent } from './operation/operation.component';
import { HistoryComponent } from './history/history.component';
import { MessagesComponent } from './messages/messages.component';
import { NonZeroValidator } from './shared/non-zero.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    AccountComponent,
    OperationComponent,
    HistoryComponent,
    MessagesComponent,
    NonZeroValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
