import { Timestamp } from '@angular/fire/firestore';

export type ColumnKey<T> = Array<keyof T>;
// ColummnKey<T> es un tipo genérico que recibe un tipo T y devuelve un array de las claves de T, keyof es un operador que devuelve los tipos de un objeto T(genérico)

export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone: number;
  country: string;
  actions: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
