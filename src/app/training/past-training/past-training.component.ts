import { Subscription } from 'rxjs';
import { TrainingService } from './../training.service';
import { Training } from './../training.model';
import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, OnDestroy {

  displayedColumns = ["date", "name", "calories", "duration", "state"];
  dataSource = new MatTableDataSource<Training>();
  private exChangedSubscription: Subscription;
  
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exChangedSubscription = this.trainingService.finishedExerciseChanged.subscribe((exercises: Training[]) => {
      this.dataSource.data = exercises
    });
    this.trainingService.getCompletedOrCancelledExercises();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.exChangedSubscription.unsubscribe();
    
  }

}
