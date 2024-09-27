import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { ModalService } from '@components/modal/modal.service';
import { ModalComponent } from '@components/modal/modal.component';

const MATERIAL_MODULES = [MatCardModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MATERIAL_MODULES, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'contacts-firebase-angular';

  private readonly _modalSvc = inject(ModalService);

  onClickNewContact(): void {
    this._modalSvc.openModal(ModalComponent);
  }
}
