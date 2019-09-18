import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { validateCity, validateCityWithParams } from '../../shared/validators/city-validator';
import { ActivatedRoute } from '@angular/router';

const angularFormValidation = () => {
  const from = new FormControl();
  const validationResultObject1 = validateCity(from);

  const whiteListCities = [
    'Wien',
    'Berlin'
  ];
  const validationFunction = validateCityWithParams(whiteListCities);
  const validationResultObject2 = validationFunction(from);

  const validationResultObject3 = (
      validateCityWithParams(whiteListCities)
    )(from);
};

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  showDetails: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        params => {
          this.id = params['id'];
          this.showDetails = params['showDetails'];
        }
      );
    this.form = this.fb.group({
      id: [1],
      from: ['Graz', [ 
        Validators.required,
        validateCity,
        validateCityWithParams([
          'Wien',
          'Berlin'
        ])
      ]],
      to: [''],
      date: [''],
      delayed: [false]
    }, { updateOn: 'blur' });

    this.form.valueChanges
      .subscribe(
        formData => console.log('Current form state', formData)
      );
  }

  save(): void {
    console.log('Flight data', this.form.value);
    console.log('Form valid', this.form.valid);
    console.log('Form touched', this.form.touched);
    console.log('Form dirty', this.form.dirty);
  }
}
