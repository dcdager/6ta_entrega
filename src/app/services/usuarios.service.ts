import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private arrUsuarios : Usuario[] = [];
  private url : string = "https://peticiones.online/api/users";

  constructor(private httpClient: HttpClient) { }

  getAll(pPage: Number = 1): Promise<any> {
    return lastValueFrom( this.httpClient.get<any>(`${this.url}?page=${pPage}`) )
  }
  getById(pId: string) : Promise<any> {
    return lastValueFrom( this.httpClient.get<any>(`${this.url}/${pId}`) )
  }

  create(pUser: Usuario) : Promise<any> {
    return lastValueFrom( this.httpClient.post<Usuario>(this.url,pUser))

  }

  upadate(pUser: Usuario) : Promise<any> {
    return lastValueFrom( this.httpClient.put<Usuario>(`${this.url}/${pUser._id}`,pUser ))    
  }

  delete(pId: string) : Promise<Usuario> {
    
    return lastValueFrom( this.httpClient.get<any>(`${this.url}/${pId}`) );
  }

}
