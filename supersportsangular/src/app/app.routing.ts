import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactpageComponent } from './contactpage/contactpage.component';
import { MainComponent } from './mainpage/mainpage.component';
import { DetailpageComponent }  from './detailpage/detailpage.component';

const appRoutes: Routes = [   
{
    path: 'contactpage',
    component: ContactpageComponent
},
{
    path: 'mainpage',
    component: MainComponent
},
{
    path: 'detailpage',
    component: DetailpageComponent
},
{
    path: '', redirectTo: 'mainpage', pathMatch: 'full'},
{
    path: '**', redirectTo: 'mainpage', pathMatch: 'full'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
