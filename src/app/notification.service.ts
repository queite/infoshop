import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  notify(msg: string) {
    this.snackBar.open(msg, 'OK', {duration: 2000, verticalPosition: 'top', horizontalPosition: 'center'})
  }
}
