import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { HomeComponent } from './components/home/home.component';
import { NewusrComponent } from './components/newusr/newusr.component';
import { VistaUserComponent } from './components/vista-user/vista-user.component';

const routes: Routes = [
  {path: "", pathMatch:'full', redirectTo: '/home'},
  {path:"home", component: HomeComponent},
  {path: "newuser" , component: NewusrComponent},
  {path: "update/:iduser", component: NewusrComponent},
  {path: "user/:iduser", component: VistaUserComponent},
  {path: "**", component: C404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
