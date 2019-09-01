import { Component } from "@angular/core";
import { UsersService } from "../../services/Users.service";
import { AuthService } from "../../services/Auth.service";


@Component({
  selector: "user-list",
  templateUrl: "./UserList.page.html",
  styleUrls: ["./UserList.page.css"]
})
export class UserListPage {

  public users = [];
  public filterBy: string = "";
  public orderBy: number;

  constructor(private usersService: UsersService, private authService: AuthService) {
  }

  ngOnInit() {
    this.getUsers();

  }


  private getUsers() {
    this.usersService.getAllUsers().subscribe((data: any) => {
      data.forEach(item => {
        console.log(item.payload.doc.data());
        let cliente = item.payload.doc.data();
        cliente.firebaseId = item.payload.doc.id;
        this.users.push(cliente)
      });
    })

  }

  onLogout() {
    this.authService.logout();
  }

  onRemover(uuid: string) {
    this.usersService.remove(uuid)
    this.users = [];
  }

  setFilterBy(event: any) {
    this.filterBy = event.target.value
  }

  onSelectChange(valor: number) {
    this.orderBy = valor;
  }

}
