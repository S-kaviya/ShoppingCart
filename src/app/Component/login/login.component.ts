import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup,FormBuilder, Validators,AbstractControl,FormsModule,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  
  loginForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
  ) { 
    this.loginForm = this.formBuilder.group({
    username:['',[Validators.required], Validators.minLength(4), Validators.maxLength(10)],
    password:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  get f():{[key:string]:AbstractControl}
  {
    return this.loginForm.controls;
  }

  
  get UsernameValidate() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  preview: string='';

  
  onSubmit():any{
    // this.crudService.ExistingUser(this.loginForm.value).subscribe(
    //   ()=>{
    //     console.log('Data added successfully!');
    //     // this.ngZone.run(()=> this.router.navigateByUrl('/books-list'));

    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }
    else{
      console.log(this.loginForm.value)
    }
  }

}
