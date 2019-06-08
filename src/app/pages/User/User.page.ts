import { Component } from "@angular/core";

import { UsersService } from "../../services/Users.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "user-component",
  templateUrl: "./User.page.html",
  styleUrls: ["./User.page.css"]
})
export class UserComponent {
  private userId: string = "";
  private data: object = {};
  private loading: boolean = false;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id");
    console.log(this.userId)
    this.getUser(this.userId);
  }

  private getUser(id: string) {
    this.usersService.getById(id).subscribe((data:any) =>{
      this.data = data[0].payload.doc.data();
        console.log(this.data)
      })
  }

  setValue(event){
    const {target} = event
    this.data ={
      ...this.data,
      [target.name]:target.value
    }
  }

  createUser() {
    this.loading = true;
    console.log("criado");
    this.usersService
      .create(this.data)
      .then(() => {
        this.loading = false;
      })
      .catch(err => (this.loading = false));
  }
}