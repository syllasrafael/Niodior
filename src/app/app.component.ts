import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactoService } from './services/contacto.service';
import { Contacto } from 'src/models/contactos';
import { Observable } from 'rxjs';
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  btntext='Submit'
  title = 'kewesekiNiodior';
  ngOnInit() {
    AOS.init()
    window.addEventListener('load',AOS.refresh)
  }
//
  

}
