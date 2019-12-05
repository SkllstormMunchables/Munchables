import { StepsService } from "./../steps.service";
import { Component, OnInit } from "@angular/core";
import { Steps } from "../models/steps";

@Component({
  selector: "app-add-steps",
  templateUrl: "./add-steps.component.html",
  styleUrls: ["./add-steps.component.css"]
})
export class AddStepsComponent implements OnInit {
  dummy: Steps = new Steps();
  addSteps(): void {
    this.stepsService.add(this.dummy);
    this.dummy = new Steps();
  }

  constructor(private stepsService: StepsService) {}

  ngOnInit() {}
}
