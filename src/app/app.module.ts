import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { FormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AddClientComponent } from './add-client/add-client.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { HomeComponent } from './home/home.component';
import { FatturaTableComponent } from './fattura-table/fattura-table.component';
import { FatturaDetailsComponent } from './fattura-details/fattura-details.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { EditFattureComponent } from './edit-fatture/edit-fatture.component';
import { AddFatturaComponent } from './add-fattura/add-fattura.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsTableComponent,
    ClientDetailsComponent,
    AddClientComponent,
    HomeComponent,
    FatturaTableComponent,
    FatturaDetailsComponent,
    EditClientsComponent,
    EditFattureComponent,
    AddFatturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
