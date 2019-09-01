import { Component } from "@angular/core";

import { UsersService } from "../../services/Users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms'


@Component({
  selector: "user-component",
  templateUrl: "./User.page.html",
  styleUrls: ["./User.page.css"]
})
export class UserComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    age: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    rua: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    complemento: new FormControl('', Validators.required)
  })

  public userId: string = '';
  private userKey: string = "";
  public loading: boolean = false;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id");
    if (this.userId) this.getUser(this.userId);
  }

  private getUser(id: string) {
    if (id !== null) {
      this.usersService.getById(id).subscribe((data: any) => {
        console.log(data);
        this.userKey = data[0].payload.doc.id
        const result = data[0].payload.doc.data();
        console.log(result.age)
        Object.keys(result)
          .filter(item => item !== 'id')
          .forEach(item => {
            this.userForm.controls[item].setValue(result[item])
            this.loading = false
          });
      })
    }

  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log("click")
    if (this.userId) {
      const data = { ...this.userForm.value, id: this.userId }
      this.usersService.update(this.userKey, data)
        .then(() => this.router.navigate(['/']))
        .catch(error => console.log(error))
    } else {
      this.usersService
        .create(this.userForm.value)
        .then(() => this.router.navigate(['/']))
        .catch(err => (this.loading = false));
    }
  }
}