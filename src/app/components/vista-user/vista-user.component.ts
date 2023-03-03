import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-vista-user',
  templateUrl: './vista-user.component.html',
  styleUrls: ['./vista-user.component.css']
})
export class VistaUserComponent {
  usuario: Usuario;

  constructor (
    
    private usuariosService : UsuariosService,
    private activateRoute : ActivatedRoute,
    private router : Router
  ) {
    this.usuario = {
      "_id": "",
    "id": 0,
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": "",
    "image": "",
    }
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( async (params:any) => {
      let usr = await this.usuariosService.getById(params.iduser)
      this.usuario = usr
    }


    )
  }

  async deleteUser(pId :string | undefined) : Promise<void> {
    try {
    if (pId !== undefined) {
      const resultado = confirm("¿Está seguro que desea borrar usuario?");
        if (resultado) {
          let res : Usuario = await this.usuariosService.delete(pId);
          console.log(res)
          alert(`Usuario ${res._id} borrado correctamente`)
          this.router.navigate(['/home'])
        }
      }
    }
  
  catch(err: any) {
    console.log(err)
  }
  }
}
