import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/modules/material';
import { CoreModule } from '@app/modules/core';
import { ForumComponent } from './components/forum/forum.component';
import { ThreadComponent } from './components/thread/thread.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule
  ],
  declarations: [ForumComponent, ThreadComponent],
  exports: [ForumComponent, ThreadComponent]
})
export class ForumModule { }
