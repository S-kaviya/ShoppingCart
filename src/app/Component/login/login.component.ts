import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { CrudService } from "src/app/service/crud.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  constructor(
    private Lf: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private LoginService: CrudService
  ) {
    this.loginForm = this.Lf.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  ngOnInit(): void {}

  get UsernameValidate() {
    return this.loginForm.get("username");
  }
  get password() {
    return this.loginForm.get("password");
  }
  submit: boolean = false;

  onSubmit(): any {
    this.submit = true;
    console.log("Login ");
    console.log(this.loginForm.valid);
    console.log(this.UsernameValidate && this.password);
    console.log(this.UsernameValidate);
    console.log(this.password);

    if (
      this.UsernameValidate?.status === "VALID" &&
      this.password?.status === "VALID"
    ) {
      this.LoginService.ExistingUser(this.loginForm.value).subscribe(
        () => {
          console.log("Loggged in!");
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log("error from login ts");
    }
  }
}
