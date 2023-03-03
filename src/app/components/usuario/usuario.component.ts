import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
    @Input() miUsuario: Usuario | any; 

    constructor(private usuarioService : UsuariosService,
      private router: Router) {}

    async deleteUser(pId :string | undefined) : Promise<void> {
      try {
      if (pId !== undefined) {
        const resultado = confirm("¿Está seguro que desea borrar usuario?");
        if (resultado) {
        let res = await this.usuarioService.delete(pId);
        alert(`Usuario ${res._id} borrado correctamente`)
        this.router.navigate(['/home'])}
        }
      }
    
    catch(err: any) {
      console.log(err)
    }
    
  }
}
