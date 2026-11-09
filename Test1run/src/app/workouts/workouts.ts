import { Component } from '@angular/core';

@Component({
  selector: 'app-workouts',
  standalone: false,
  styleUrl: './workouts.css',
  templateUrl: './workouts.html',
})
export class Workouts {

  // TOPIC 4: a list of objects. The type after the colon lets it go empty later.
  reps: { name: string; sets: number;  done: boolean }[] = [
    { name: 'Latte', sets: 5, done: true },
    { name: 'Mocha', sets: 6, done: false },
    { name: 'Tea', sets: 3, done: true },
  ];
}
