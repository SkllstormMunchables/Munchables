import { StepsService } from './../steps.service';
import { Component, OnInit } from '@angular/core';
import { Steps } from '../models/steps';

@Component({
  selector: 'app-add-steps',
  templateUrl: './add-steps.component.html',
  styleUrls: ['./add-steps.component.css']
})
export class AddStepsComponent implements OnInit {
  step: Steps[];

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    this.getSteps();
  }

  getSteps(): void {
    this.stepsService.getSteps().subscribe(steps => (this.step = steps));
  }

  addSteps(step: Steps): void {
    this.stepsService.addSteps(step).subscribe(steps => {
      this.step.push(steps);
    });
  }
}
