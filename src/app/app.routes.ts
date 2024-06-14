import { Routes } from '@angular/router';
import {ChatawsComponent} from "./chataws/chataws.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'chat', component: ChatawsComponent }
];
