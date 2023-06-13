import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(@Inject(DOCUMENT) private document: Document) { }

  scrollToFuncionalidades() {
    const funcionalidadesSection = this.document.getElementById('funcionalidades');
    if (funcionalidadesSection) {
      funcionalidadesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToInicio(){
    const inicioSection = this.document.getElementById('inicio');
    if (inicioSection) {
      inicioSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  scrollToSobre(){
    const sobreSection = this.document.getElementById('sobre');
    if (sobreSection) {
      sobreSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
