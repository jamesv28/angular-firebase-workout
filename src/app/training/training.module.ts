import { SharedModule } from './../utility/shared.module';
import { StopTrainingComponent } from './current-training/stop-training.component';

import { PastTrainingComponent } from './past-training/past-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { TrainingComponent } from './training.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from "@angular/fire/firestore";
@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent
  ],
  imports: [
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
