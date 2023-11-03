import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contacto } from 'src/models/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private url =`${environment.api}/contactos`;

  constructor(private httpclient:HttpClient) { 
    this.url = `${environment.api}/contactos`;
    console.log('API URL Syllas:', this.url); // Log the API URL to the console
  }

  obterContactos(){
    return this.httpclient.get<Contacto[]>(this.url)
  }

  cadastarCantactos(contacto:Contacto){
    return this.httpclient.post<Contacto>(this.url, contacto)
  }
}
