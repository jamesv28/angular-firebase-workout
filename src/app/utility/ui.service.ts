import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UIService {
    loadingStateChanged = new Subject<boolean>();

    constructor(private snackbar: MatSnackBar) {}

    showSnackBar(message, action, duration) {

        this.snackbar.open(message, action, {
            duration: duration
        })
    }
}