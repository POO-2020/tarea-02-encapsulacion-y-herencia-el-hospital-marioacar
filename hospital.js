import Fecha from './fecha.js';
import Tiempo from './Tiempo.js';
import Nombre from './Nombre.js';
import Paciente from './paciente.js';
import Doctor from './doctor.js';
import Cita from './cita.js';
export default class Hospital {
  /**
   *
   * @param {string} nombre
   * @param {string} direccion
   */
  constructor(nombre, direccion) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._doctores = new Array();
    this._citas = new Array();
  }

  registrarDoctor(doctor) {
    this._doctores.push(doctor);
  }

  listarDoctores() {
    this._doctores.forEach((doctor, i) => {
      console.log(`${i + 1} ${doctor.getPerfil()}`);
    });
  }

  registrarCita(cita) {
    this._citas.push(cita);
  }

  listarCitas() {
    this._citas.forEach((cita, i) => {
      console.log(`${i + 1} ${cita.getCita()}`);
    });
  }
}
