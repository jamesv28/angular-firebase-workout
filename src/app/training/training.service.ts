import { AngularFirestore } from '@angular/fire/firestore';
import { Training } from './training.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainingService {

  exerciseChanged = new Subject<Training>();
  private runningExercise: Training;
  exercisesChanged = new Subject<Training[]>();
  finishedExerciseChanged = new Subject<Training[]>();
  private exercises: Training[] = [];
  private availableExercises: Training[] = [];

  constructor(private db: AngularFirestore) {}

  fetchAvailableExercieses() {
    this.db.collection('available-exercises')
                      .snapshotChanges()
                      .map(docArray => {
                        return docArray.map(doc => {
                          return {
                            id: doc.payload.doc.id,
                            name: doc.payload.doc.data()['name'],
                            duration: doc.payload.doc.data()['duration'],
                            calories: doc.payload.doc.data()['calories']
                          };
                        });
                      })
                      .subscribe((exercises : Training[]) => {
                        this.availableExercises = exercises;
                        this.exercisesChanged.next([...this.availableExercises]);
                      })
  }

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.addExerciseToDB({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addExerciseToDB({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  getCompletedOrCancelledExercises() {
    this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Training[]) => {
        this.finishedExerciseChanged.next(exercises);
      });
   }

  private addExerciseToDB(exercise: Training) {
    this.db.collection('finishedExercises').add(exercise)
  }
}
