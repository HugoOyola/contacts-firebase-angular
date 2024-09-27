import { inject, Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  DocumentReference,
  orderBy,
  query,
  collectionData,
} from '@angular/fire/firestore';
import { Contact } from './contact.interface';
import { Observable } from 'rxjs'; // Son objetos que emiten valores en el tiempo y se utilizan para manejar eventos asíncronos.
import { APP_CONSTANTS } from '@shared/service/constants';

@Injectable({ providedIn: 'root' }) // Permite inyectar el servicio en cualquier componente de la aplicación. Singleton (una única instancia de la clase en toda la aplicación).
export class ContactService {
  private readonly _firestore = inject(Firestore); // DB Firestore, inyectamos el servicio Firestore con la base de datos de Firebase.
  private readonly _contactsCollection = collection(
    this._firestore,
    APP_CONSTANTS.COLLECTION_NAME
  ); // collection(db, 'cities') -> Referencia a la colección 'cities' de la base de datos 'db'.

  // Método para crear un nuevo contacto
  newContact(
    contact: Partial<Contact>
  ): Promise<DocumentReference<DocumentData>> {
    return addDoc(this._contactsCollection, {
      ...contact,
      created: Date.now(),
      updated: Date.now(),
    });
  }
  // Método para obtener un contacto por id
  async getContactById(id: string): Promise<Contact> {
    const docRef = this._getDocRef(id); // Referencia al documento con el id 'id'.
    const documentData = await getDoc(docRef); // Obtiene el documento con la referencia 'docRef'.
    return documentData.data() as Contact; // Devuelve los datos del documento como un objeto de tipo Contact.
  }

  // Método para actualizar un contacto
  updateContact(id: string, contact: Contact): void {
    const docRef = this._getDocRef(id); // Referencia al documento con el id 'id'.
    updateDoc(docRef, { ...contact }); // ...contact: se va utilizar para desestructurar el objeto 'contact' y enviarlo como un objeto plano.
  }

  // Método para eliminar un contacto
  deleteContact(id: string): void {
    const docRef = this._getDocRef(id); // Referencia al documento con el id 'id'.
    deleteDoc(docRef); // Elimina el documento con la referencia 'docRef'.
  }

  // Método para obtener todos los contactos
  getAllContacts(): Observable<Contact[]> {
    const queryFn = query(this._contactsCollection, orderBy('name', 'desc')); // query(collection, orderBy('name', 'asc')) -> Consulta a la colección 'collection' ordenada por el campo 'name' de forma ascendente.
    return collectionData(queryFn, { idField: 'id' }) as Observable<Contact[]>; // collectionData(queryFn, { idField: 'id' }) -> Devuelve un Observable con los datos de la colección 'queryFn' y el campo 'id' como identificador.
  }

  // Método privado para obtener la referencia a un documento
  private _getDocRef(id: string) {
    return doc(this._firestore, APP_CONSTANTS.COLLECTION_NAME, id); // doc(db, 'cities', 'SF') -> Referencia al documento con el id 'SF' de la colección 'cities' de la base de datos 'db'.
  }

  constructor() {}
}
