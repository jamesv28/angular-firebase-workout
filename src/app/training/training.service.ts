import { Subject } from 'rxjs/Subject';
import { Training } from './training.model';

export class TrainingService {
    exerciseChanged = new Subject<Training>();
    availableTraining: Training[] = [
        {
            id: 'crunches',
            name: 'Crunches',
            duration: 30,
            caloriesBurned: 8
        },
        {
            id: 'lunges',
            name: 'Lunges',
            duration: 180,
            caloriesBurned: 15
        },
        {
            id: 'burpees',
            name: 'Burpees',
            duration: 120,
            caloriesBurned: 20
        },
        {
            id: 'bear-crawl',
            name: 'Bear Crawl',
            duration: 180,
            caloriesBurned: 26
        },
        {
            id: 'sit-through',
            name: 'Sit through',
            duration: 120,
            caloriesBurned: 20
        },
        {
            id: 'hostage-squats',
            name: 'Hostage Squats',
            duration: 90,
            caloriesBurned: 30
        }
    ];

    getAvailableTraining() {
        return [...this.availableTraining];
    }

    private runningExercise: Training;

    startExercise(selectedId: string) {
        this.runningExercise = this.availableTraining.find(ex => {
            ex.id == selectedId
        });
        this.exerciseChanged.next({
            ...this.runningExercise
        });
        
    }

    getRunningExercise() {
        return {...this.runningExercise};
    }
}