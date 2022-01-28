import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { HomeComponent } from './home/home.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { FatturaTableComponent } from './fattura-table/fattura-table.component';
import { FatturaDetailsComponent } from './fattura-details/fattura-details.component';
import { EditFattureComponent } from './edit-fatture/edit-fatture.component';
import { AddFatturaComponent } from './add-fattura/add-fattura.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'Clients', 
    component: ClientsTableComponent
  },
  {
    path: 'Clients/:id/detail', 
    component: ClientDetailsComponent
  },
  {path: 'Clients/:id/edit', 
  component : EditClientsComponent
  },
  {
    path: 'AddClient', 
    component: AddClientComponent
  },
  {path: 'Fatture',
   component: FatturaTableComponent
  },
  {path: 'Fatture/:id/detail',
   component: FatturaDetailsComponent
  },
  {path: 'Fatture/:id/edit',
  component: EditFattureComponent},
  {path: 'AddFatture', 
  component: AddFatturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
