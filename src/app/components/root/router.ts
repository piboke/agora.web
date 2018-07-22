import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ForumComponent } from '@app/modules/forum';


export const routes: Routes = [
    // { path: '', redirectTo: 'page', pathMatch: 'full' },
    { path: '', component: ForumComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);