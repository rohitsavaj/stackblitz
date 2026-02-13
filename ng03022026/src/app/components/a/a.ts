import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { catchError, map, Observable, tap, timer } from 'rxjs';
import { Common } from '../../../core/services/common';

@Component({
  selector: 'app-a',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class A implements OnInit{
  tName = '';
  tEmail = '';
  fb = inject(FormBuilder);
  common = inject(Common)
  myForm:any = '';

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email],[this.onAsyncValidatEmail()]],
      businessAddress: this.fb.array([]) // how validate?   
    })
  }
  onAsyncValidatEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.common.emailExist().pipe(        
        map(exist => (exist.email == control.value ? { emailExist: true } : null))
        //map(exist => console.log('c',control.value))
      );
    }
        
  }

  onSubmit() {
    console.log(this.myForm.value);
    console.log(this.myForm);
  }

  onAdd() {
    const bus = this.myForm.controls.businessAddress as FormArray;
    console.log(bus);
    bus.push(this.fb.group({
      addressLine1: ['', [Validators.required]]
    }));
    console.log(bus);
  }
  onDelete(index: number) {
    this.myForm.controls.businessAddress.removeAt(index);
  }
}
