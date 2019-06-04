import { Component } from "@angular/core";

@Component({
  selector: "user-list",
  templateUrl: "./UserList.page.html",
  styleUrls: ["./UserList.page.css"]
})
export class UserListPage {
  private results = [
    { id: 1, name: "Leandre", email: "leandre@gmail.com" },
    { id: 2, name: "Joao", email: "joao@gmail.com" }
  ];
}
