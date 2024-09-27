import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Contact } from '@features/contacts/contact.interface';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private readonly dialog = inject(MatDialog);

  openModal<CT, T = Contact>(
    componentRef: ComponentType<CT>,
    data?: T,
    isEditing = false
  ): void {
    // ComponentType<CT>: Es un tipo genérico que se utiliza para definir el tipo de componente que se va a abrir en el modal.
    const config = { data, isEditing };
    this.dialog.open(componentRef, { width: '400px', data: config });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  constructor() {}
}
