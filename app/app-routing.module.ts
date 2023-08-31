import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { TestComponent } from './test/test.component';
import { Crud2Component } from './crud2/crud2.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
 { path:'crud', component: CrudComponent},
 { path:'test', component: TestComponent},
 { path:'crud2', component: Crud2Component},
 { path:'home', component: HomeComponent},
 { path:'navbar', component: NavbarComponent},
 { path:'adduser', component: AdduserComponent},
 { path:'userlist', component: UserlistComponent},
 { path: 'update-user/:id', component: AdduserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
