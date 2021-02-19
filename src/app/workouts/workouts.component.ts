import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {Subscription} from "rxjs";
import {Workout} from "./workouts.model";
import {WorkoutsService} from "./workouts.service";
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  constructor(private workoutsService: WorkoutsService) { }

  displayedColumns = ["title", "description", "workout"];
  dataSource = new MatTableDataSource<Workout>();
  private workoutChangedSubscription: Subscription;

  ngOnInit(): void {
    this.workoutChangedSubscription = this.workoutsService.workoutChanged.subscribe((workouts: Workout[]) => {
      this.dataSource.data = workouts
    });
    this.workoutsService.fetchAvailableWorkouts();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnDestroy(): void {
    this.workoutChangedSubscription.unsubscribe();
    
  }

}
