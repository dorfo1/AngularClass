import { Component } from "@angular/core";

import { UsersService } from "../../services/Users.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: "user-component",
  templateUrl: "./User.page.html",
  styleUrls: ["./User.page.css"]
})
export class UserComponent {
  userForm = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    age:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required)
  })

  private userId : string = '';
  private loading : boolean = false;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("id");
    if(this.userId) this.getUser(this.userId);
  }

  private getUser(id: string) {
    if(id !== null){
      this.usersService.getById(id).subscribe((data:any) =>{
       // this.data = data[0].payload.doc.data();
        //  console.log(this.data)
        })
    }
    
  }

  createUser() {
    console.log("click")
    this.usersService
      .create(this.userForm.value)
      .then(() => {
        this.loading = false;
      })
      .catch(err => (this.loading = false));
    return;
    this.loading = true;
    console.log("criado");
    
  }
}