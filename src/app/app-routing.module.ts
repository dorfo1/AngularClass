import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserListPage } from "./pages/UserList/UserList.page";
import { UserComponent } from "./pages/User/User.page";
import { AuthComponent } from "./pages/Auth/Auth.page";
import { SignUpComponent } from './pages/SignUp/SignUp.page';
import { NotFoundComponent } from './pages/404/404.page';
import { AdminGuard } from './guards/Admin.guard';

const routes: Routes = [
  { path: "", component: UserListPage, canActivate: [AdminGuard] },
  { path: "user", component: UserComponent, canActivate: [AdminGuard] },
  { path: "user/:id", component: UserComponent, canActivate: [AdminGuard] },
  { path: "auth", component: AuthComponent },
  { path: "signup", component: SignUpComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
