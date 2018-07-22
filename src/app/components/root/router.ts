import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    { path: '', redirectTo: 'page', pathMatch: 'full' },
    // { path: 'page', component: SampleComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);