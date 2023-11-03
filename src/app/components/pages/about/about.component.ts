import { Component } from '@angular/core';
import { faEnvelope, faPhone, faLocationDot, faMobileScreenButton, faEnvelopeSquare, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
  faMobileScreenButton =faMobileScreenButton;
  faEnvelopeSquare =faEnvelopeSquare;
  faEnvelopeOpenText=faEnvelopeOpenText;
}
