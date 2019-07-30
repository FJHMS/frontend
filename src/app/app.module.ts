import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ViewAccountsComponent } from './components/view-accounts/view-accounts.component';
import { HomeComponent } from './components/home/home.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import { TableComponent } from './components/table/table.component';
import { MatSidenavModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component'



@NgModule({

  declarations: [
    AppComponent,
    CreateUserComponent,
    ViewUserComponent,
    ViewUsersComponent,
    DeleteUserComponent,
    CreateAccountComponent,
    ViewAccountsComponent,
    HomeComponent,
    TransactionComponent,
    LogInComponent,
    NavigationComponent,
    HeaderComponent,
    TableComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
