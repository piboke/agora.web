import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/modules/material';
import { CoreModule } from '@app/modules/core/core.module';



import { AppComponent } from './components/root/app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { routing } from '@app/components/root/router';
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
