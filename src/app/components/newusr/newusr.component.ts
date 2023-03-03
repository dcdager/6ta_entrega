import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-newusr',
  templateUrl: './newusr.component.html',
  styleUrls: ['./newusr.component.css']
})
export class NewusrComponent implements OnInit {
  userForm : FormGroup;
  title : string = 'Registrar'

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
    this.userForm = new FormGroup({
      first_name : new FormControl("", [
        Validators.required
      ]),
      last_name : new FormControl("", [
        Validators.required
      ]),
      username : new FormControl("", [
        Validators.required
      ]),
      email : new FormControl("", [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      image  : new FormControl("", [
        Validators.required,
        Validators.pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
      ]),
    } , []);
  }

  async getDataForm() {
    let user: Usuario = this.userForm.value;
    if (user._id) {
      let response = await this.usuariosService.upadate(user);
      if (response._id) {
        alert(`Usuraio ${response.first_name} con id ${response._id} actualizado correctamente`);
      this.router.navigate(['/home'])
      
      }
    } else {
    try {
    let response = await this.usuariosService.create(user);
    if (response.id) {
      alert(`Usuraio ${response.first_name} con id ${response.id} creado correctamente`);
      this.router.navigate(['/home'])
    }
    }
    catch(err) {
      console.log(err)
    }
  }
  }
  checkControl(pControlName: string, pError: string): boolean {
    if (this.userForm.get(pControlName)?.hasError(pError) && this.userForm.get(pControlName)?.touched) {
      return true
    }
    return false
}

 ngOnInit(): void {
  this.activatedRoute.params.subscribe(async ( params:any) => {
    let id = params.iduser;
    if (id) {
      this.title ='Actualizar'
      
      const  user: Usuario = await this.usuariosService.getById(id)
      this.userForm = new FormGroup({
        _id : new FormControl(id, []),
        first_name : new FormControl(user.first_name, [
          Validators.required
        ]),
        last_name : new FormControl(user.last_name, [
          Validators.required
        ]),
        username : new FormControl(user.username, [
          Validators.required
        ]),
        email : new FormControl(user.email, [
          Validators.required,
        
        ]),
        image  : new FormControl(user.image, [
          Validators.required,
         
        ]),
      } , []);
    }

  })
  
 }
}