import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { form } from './Iform';

function ageRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value)) || control.value < min || control.value > max) {
      return { 'ageRange': true };
    }
    return null;
  };
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  max: number = 45;
  min: number = 18;

  loginForm: FormGroup;
  user: form = {
    email: 'sachin@taaza.com',
    password: '123$56'
  }

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(5)]),
      age: new FormControl(null, [ageRangeValidator(this.min, this.max)]),
      phonenumber: new FormControl(null, []),
      notification: new FormControl('email', [])
    })
    this.formControlValueChanged();
  }
  login() {
    console.log(this.loginForm.value);
    console.log(this.user);
  }

  cancel() {
    this.loginForm.reset();
  }

  formControlValueChanged() {
    const phoneControl = this.loginForm?.get('phonenumber');
    this.loginForm.get('notification')?.valueChanges.subscribe((data: string) => {
      console.log(data);
      if (data == 'phone') {
        phoneControl?.setValidators([Validators.required])
      }
      else if (data == 'email') {
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    })
  }

}
