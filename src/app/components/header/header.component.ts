import { Component } from '@angular/core';
import { faGlobe, faSearch, faUser, faPhone, faLocationDot, faEarthAfrica} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
  
  faEarthAfrica = faEarthAfrica;
  faGlobe = faGlobe;
  faSearch = faSearch;
  faUser = faUser;
  faPhone = faPhone;
  faLocationDot = faLocationDot;



  // ...

  btnMobile: HTMLElement | null = null;
  nav: HTMLElement | null = null; 

  constructor() {}


  ngOnInit(): void {
    this.btnMobile = document.getElementById('btn-mobile');
    this.nav = document.getElementById('nav');

    if (this.btnMobile) {
      this.btnMobile.addEventListener('click', this.toggleMenu.bind(this));
      this.btnMobile.addEventListener('touchstart', this.toggleMenu.bind(this));
    }
  }
  toggleMenu(event: Event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }

    if (this.nav) {
      this.nav.classList.toggle('active');
      const active = this.nav.classList.contains('active');

      if (this.btnMobile) {
        this.btnMobile.setAttribute('aria-expanded', active ? 'true' : 'false');

        if (active) {
          this.btnMobile.setAttribute('aria-label', 'Fechar Menu');
        } else {
          this.btnMobile.setAttribute('aria-label', 'Abrir Menu');
        }
      }
    }
  }
}
