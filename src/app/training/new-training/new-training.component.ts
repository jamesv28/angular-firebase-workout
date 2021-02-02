import { Training } from './../training.model';
import { TrainingService } from './../training.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();
  training: Training[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.training = this.trainingService.getAvailableTraining();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
