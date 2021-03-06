import { Component } from "@angular/core";

import { AuthService } from "../../services/Auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms'


@Component({
    selector: "auth-component",
    templateUrl: "./Auth.page.html",
    styleUrls: ["./Auth.page.css"]
})
export class AuthComponent {
    authForm = new FormGroup({
        email: new FormControl('', Validators.email),
        senha: new FormControl('', Validators.required),
    })

    constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

    }


    onSubmit() {
        this.authService.login(this.authForm.value.email, this.authForm.value.senha)
    }
}

