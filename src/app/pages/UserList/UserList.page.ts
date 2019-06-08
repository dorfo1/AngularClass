import { Component } from "@angular/core";
import { UsersService } from "../../services/Users.service";


@Component({
  selector: "user-list",
  templateUrl: "./UserList.page.html",
  styleUrls: ["./UserList.page.css"]
})
export class UserListPage {
  
  private users = []

  constructor(private usersService :UsersService){
  }

  ngOnInit(){
    this.getUsers();
  }


  private getUsers(){
    this.usersService.getAllUsers().subscribe((data:any) =>{
      data.forEach(item => {
        this.users.push(item.payload.doc.data())
      });
      console.log(this.users)
    })
  
  }

  

}
