import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent  {
    public navs =  [
        { path: '/home', name: 'Accueil' },
        { path: '/groups', name: 'Groupe' },
        { path: '/employees', name: 'Employé' },
        { path: '/clients', name: 'Clients' },
        { path: '/comptes', name: 'Comptes' },
        { path: '/operations', name: 'Opérations' }
    ]
 }