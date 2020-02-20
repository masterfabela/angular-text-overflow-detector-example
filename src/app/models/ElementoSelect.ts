export class ElementoSelect {
  id: string;
  nombre: string;

  constructor(id: string, nombre: string) {
    (this.nombre = nombre), (this.id = id);
  }
}
