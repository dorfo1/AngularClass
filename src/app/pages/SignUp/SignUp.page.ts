import { Component } from "@angular/core";
import { AuthService } from "../../services/Auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms'



@Component({
    selector: "signup-component",
    templateUrl: "./SignUp.page.html",
    styleUrls: ["./SignUp.page.css"]
})
export class SignUpComponent {

    signUpForm = new FormGroup({
        nome: new FormControl('', Validators.required),
        email: new FormControl('', Validators.email),
        senha: new FormControl('', Validators.required),
    })

    constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

    }

    onSubmit() {
        console.log(this.signUpForm.value)
        this.authService.signUp(this.signUpForm.value.email, this.signUpForm.value.senha)
    }
}

