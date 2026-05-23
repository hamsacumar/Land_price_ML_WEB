import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PredictComponent } from './core/features/predict/predict';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PredictComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('y');
}
