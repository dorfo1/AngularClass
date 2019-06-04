import { Component } from "@angular/core";

import { UsersService } from "../../services/Users.service";

@Component({
  selector: "user-component",
  templateUrl: "./User.page.html",
  styleUrls: ["./User.page.css"]
})
export class UserComponent {
  private loading: boolean = false;

  constructor(private usersService: UsersService) {}

  createUser() {
    this.loading = true;
    console.log("criado");
    this.usersService
      .create({
        name: "Martin",
        email: "martin@gmail.com",
        age: 30,
        phone: "123456"
      })
      .then(() => {

        this.loading = false;
      }).catch((err)=> this.loading = false);
  }
}
