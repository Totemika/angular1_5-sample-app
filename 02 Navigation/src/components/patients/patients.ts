import * as angular from 'angular';

class PatientsController {
  sampleBinding : string;

  constructor() {
    this.sampleBinding = "Hello from Patients";
  }
}

export const patients = {
  template: `
      <span>Bindings test: {{$ctrl.sampleBinding}}</h1>
      <a ui-sref="patient">Navigate to patient</a>
  `,
  controller: PatientsController
}
