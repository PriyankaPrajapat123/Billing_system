import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-login-page',
  imports: [MaterialModule,ReactiveFormsModule ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

ngOnInit(): void {
    this.loginForm = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
}
onSubmit() :void{
  throw new Error('Method not implemented.');
  }
}
