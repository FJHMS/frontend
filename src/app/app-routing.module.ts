import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

const routes: Routes = [
  {
    path: 'users/post',
    component: CreateUserComponent
  },
  {
    path: 'users',
    component: ViewUsersComponent
  },
  {
    path: 'users/:id',
    component: ViewUserComponent
  },
  {
    path: 'users/delete/:id',
    component: DeleteUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
