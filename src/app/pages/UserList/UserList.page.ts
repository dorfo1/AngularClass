import { Component } from "@angular/core";
import { UsersService } from "../../services/Users.service";


@Component({
  selector: "user-list",
  templateUrl: "./UserList.page.html",
  styleUrls: ["./UserList.page.css"]
})
export class UserListPage {
  
  public users = [];
  private filterBy: string = "";
  private orderBy: number;

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

  setFilterBy(event : any){
    this.filterBy = event.target.value
  }

  onSelectChange(valor: number){
      this.orderBy = valor;
  }

}
