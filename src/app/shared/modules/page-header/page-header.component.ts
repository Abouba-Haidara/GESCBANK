import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent  {
    public navs =  [
        { path: '/home', name: 'Accueil' },
        { path: '/clients', name: 'Clients' },
        { path: '/comptes', name: 'Comptes' },
        { path: '/operations', name: 'Opérations' }
    ]
 }