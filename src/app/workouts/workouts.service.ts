import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Workout} from './workouts.model';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutsService  {

    private fbSubscription: Subscription[] = [];
    workoutChanged = new Subject<Workout[]>();
    private availableWorkouts: Workout[] = [];

    constructor(private db: AngularFirestore) {}

    fetchAvailableWorkouts() {
        this.fbSubscription.push(this.db
            .collection('workouts')
            .snapshotChanges()
            .map((documentArr) => {
              return documentArr.map((doc) => {
                return {
                  id: doc.payload.doc.id,
                  title: doc.payload.doc.data()['title'],
                  description: doc.payload.doc.data()['description'],
                  workout: doc.payload.doc.data()['workout'],
                };
              });
            })
            .subscribe((workouts: Workout[]) => {
              this.availableWorkouts = workouts;
              this.workoutChanged.next([...this.availableWorkouts]);
            }, err => {
              console.log('workout service error', err);
            }));
        }
}