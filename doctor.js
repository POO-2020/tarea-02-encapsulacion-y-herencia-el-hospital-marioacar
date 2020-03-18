import Nombre from './Nombre.js';
export default class Doctor {
  /**
   *
   * @param {Nombre} nombre
   * @param {string} especialidad
   * @param {number} telefono
   * @param {number} cedula
   */
  constructor(nombre, especialidad, telefono, cedula) {
    this._nombre = nombre;
    this._especialidad = especialidad;
    this._telefono = telefono;
    this._cedula = cedula;
  }

  getPerfil() {
    return `${this.cedula}, ${
      this._especialidad
    }, ${this._nombre.getNombre()}, ${this._telefono}`;
  }
}
