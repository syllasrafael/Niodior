import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { Contacto } from 'src/models/contactos';
import { Observable } from 'rxjs';
import { ContactoService } from 'src/app/services/contacto.service';
import { HttpClient } from '@angular/common/http';
import { Form, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;


  contactos$ = new Observable<Contacto[]>();

  //Form
   nome= '';
   sobreNome= '';
   email= '';
   tel= '';
   conteudo='';




 constructor(private contactoService:ContactoService){
   this.obterContactosCadastrado()
 }


 obterContactosCadastrado(){
     this.contactos$ =this.contactoService.obterContactos()
  }

 buttonClick() {
   const phone = parseInt(this.tel, 10);
     // Parse the 'tel' string to a number
   this.contactoService.cadastarCantactos({
       name: this.nome, nickname: this.sobreNome, email: this.email, content: this.conteudo, phone,
       id: 0
     }).subscribe(
       _ => {
         this.obterContactosCadastrado();
       },
       error => {
         console.error('Erro ao cadastrar contato:', error);
       }
     );
     console.log("Formulario enviado com sucesso")
   }

}
