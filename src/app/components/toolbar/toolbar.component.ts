import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatIconModule, MatButtonModule, MatToolbarModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MATERIAL_MODULES],
  template: `<mat-toolbar color="primary">
    <a mat-button router-link="/">
      <mat-icon>home</mat-icon>
      <span>Home</span>
    </a>
    <a mat-button router-link="/contacts">
      <mat-icon>list_all</mat-icon>
      <span>Contactos</span>
    </a>
    <span class="spacer"></span>
    <a mat-button (click)="emitClick()">
      <mat-icon color="primary">add_box</mat-icon>
      <span>Nuevo</span>
    </a>
  </mat-toolbar>`,
  styles: ``,
})
export class ToolbarComponent {
  public emitClick(): void {
    console.log('Click');
  }
}
