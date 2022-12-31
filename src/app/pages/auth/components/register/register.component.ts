import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../../../../core/services";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService) { }



  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched();
    if(this.form.invalid) return

    this.authService.register(this.form.value).subscribe(res => {
      /*this.router.navigate(['/auth/login'])*/
      console.log(res)
    })
  }

}
