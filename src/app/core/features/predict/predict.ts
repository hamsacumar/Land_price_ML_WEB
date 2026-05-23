import { Component } from '@angular/core';
import { PredictionService } from '../../service/prediction';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.html',
  styleUrls: ['./predict.css'],
  imports: [
    FormsModule,
  ]
})
export class PredictComponent {

  form = {
    size: null,
    district: '',
    city: '',
    road_access: 0
  };

  loading = false;
  actualPriceInput = '';
  comments: { text: string; date: string }[] = [];


  result: any = null;

  constructor(private predictionService: PredictionService) {}

  predict() {
    this.predictionService.predict(this.form).subscribe({
      next: (res) => {
        this.result = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addComment() {
    if (!this.actualPriceInput.trim()) return;
    const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    this.comments.unshift({ text: this.actualPriceInput, date });
    this.actualPriceInput = '';
  }
}

