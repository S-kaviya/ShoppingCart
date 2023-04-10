import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:[''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit():any{
    this.crudService.ExistingUser(this.loginForm.value).subscribe(
      ()=>{
        console.log('Data added successfully!');
        // this.ngZone.run(()=> this.router.navigateByUrl('/books-list'));

      },
      (err) => {
        console.log(err);
      }
    );
  }

}
