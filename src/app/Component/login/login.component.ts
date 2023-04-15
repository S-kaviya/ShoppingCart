import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

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
    private crudService: CrudService
  ) { 
    this.loginForm = this.formBuilder.group({
    username:['',[Validators.required], Validators.minLength(4), Validators.maxLength(10)],
    password:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  
  get UsernameValidate() {
    return this.myForm.get('username');
  }

  get password() {
    return this.myForm.get('password');
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

    if (this.myForm.invalid) {
        return;
    }
    else{
      console.log(this.myForm.value)
    }
  }

}
