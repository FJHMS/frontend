import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { HomeComponent } from './components/home/home.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
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
  },
  {
    path: 'accounts/post',
    component: CreateAccountComponent
  },
  {
    path: 'transactions',
    component: TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
