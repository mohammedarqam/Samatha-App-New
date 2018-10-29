import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentEntryPage } from './student-entry';

@NgModule({
  declarations: [
    StudentEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentEntryPage),
  ],
})
export class StudentEntryPageModule {}
