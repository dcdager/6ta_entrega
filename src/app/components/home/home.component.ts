import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrusuarios : Usuario[] = []
  p: number = 1;

  
  
  constructor(private usuariosService: UsuariosService) {
    
  }

  async ngOnInit(): Promise<void> {
    let response = await this.usuariosService.getAll();
    this.arrusuarios = response.results;
    

    }

  async onPageChange(pageNumber: number)  {
    this.p = pageNumber;
    let response = await this.usuariosService.getAll(pageNumber);
    this.arrusuarios = response.results;
  }

}
