import { Component } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
    <section>
      <p>Listado de Contactos</p>
      <app-grid></app-grid>
    </section>
  `,
  styles: ``,
})
export class ListComponent {}
