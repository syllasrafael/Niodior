import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServicoComponent } from './components/pages/servico/servico.component';
import { PosVendaComponent } from './components/pages/pos-venda/pos-venda.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'servico', component: ServicoComponent},
  {path:'posvenda', component: PosVendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
