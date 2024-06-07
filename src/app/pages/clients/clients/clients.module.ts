import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { MainComponent } from './main/main.component';
import { PageHeaderModule, PageFooterModule } from '../../../shared';
import { AddComponent } from './main/add/add.component';
import { ListComponent } from './main/list/list.component';
import { ClientService } from 'src/app/core/services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCompteComponent } from './main/add/create-compte/create-compte.component';
import { CompteService } from 'src/app/core/services/compte.service';


@NgModule({
  declarations: [
    ClientsComponent,
    MainComponent,
    AddComponent,
    ListComponent,
    CreateCompteComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    PageHeaderModule, 
    PageFooterModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [ClientService, CompteService]
})
export class ClientsModule { }
