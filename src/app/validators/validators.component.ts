import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from './pattern.validator';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent implements OnInit {
  public submitted : boolean = false;
  loginForm : FormGroup;

  get password() {
    return this.loginForm.get('password');
  }
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }
  constructor(private _formBuiler : FormBuilder) {

  }

  ngOnInit(): void {
    this.loginForm = this._formBuiler.group({
      password : ['', [Validators.required, PasswordPatternValidator]],
      confirmPassword : ['' , Validators.required]
    });
  }
  login(){
     this.submitted = true; 
  }
  
}
