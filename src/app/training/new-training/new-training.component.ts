import { UIService } from './../../utility/ui.service';
import { NgForm } from '@angular/forms';
import { Training } from './../training.model';
import { TrainingService } from './../training.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();
  training: Training[];
  exercises: Training[];
  excerciseSubscription: Subscription;
  isLoadingSubscription: Subscription;
  isLoading = false;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIService
    ) { }

  ngOnInit(): void {
    this.isLoadingSubscription = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    })
    this.excerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => {
      this.exercises = exercises;
    });
    this.trainingService.fetchAvailableExercieses();
  }

  onStartTraining(form: NgForm) {
    console.log('start training',form);
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    if (this.excerciseSubscription) this.excerciseSubscription.unsubscribe();
    if (this.isLoadingSubscription) this.isLoadingSubscription.unsubscribe();
  }

}
