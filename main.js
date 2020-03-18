import Nombre from './nombre.js';
import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Doctor from './doctor.js';
import Paciente from './paciente.js';
import Cita from './cita.js';
import Hospital from './hospital.js';
import PacienteAsegurado from "./pacienteAsegurado.js"

class Main {
  constructor() {
    this.tiempo1 = new Tiempo({ hora: 10, minuto: 25, periodo: 'am' });
    this.tiempo2 = new Tiempo({ hora: 10, minuto: 25, periodo: 'pm' });

    this.fecha = new Fecha(15, 6, 2005);

    this.nombre = new Nombre('Juan', 'Pérez', 'Díaz');
    this.nombre2 = new Nombre('María', 'Ramos', 'Ramírez');

    this.paciente = new Paciente(this.nombre, this.fecha, 3123454367);

    this.doctor = new Doctor(this.nombre2, 'Cardiólogo', 3125677896, 445566);

    this.cita = new Cita(this.fecha, this.tiempo1, this.doctor, this.paciente);

    this.hospital = new Hospital('Puerta de Hierro', 'Av. Constitución 100');
  }

  probarTiempo() {
    console.log(this.tiempo1.getFormato12());
    console.log(this.tiempo2.getFormato12());
    console.log(this.tiempo1.getFormato24());
    console.log(this.tiempo2.getFormato24());
  }

  probarFecha() {
    
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getDias());
    console.log(this.echa.getFecha());
    console.log(this.fecha.getDiaFecha());
  }

  probarNombre() {
    console.log(this.nombre.getNombreCompleto());
    console.log(this.nombre.getApellidoNombre());
    console.log(this.nombre.getIniciales());
  }

  probarPaciente() {
    let paciente = new Paciente({
      nombre: new Nombre("Mario Axel", "Carvantes", "Gutierrez"),
      fecha: new Fecha(7,12,200),
      telefono:3121440879
    })
    console.log(`${paciente.getPerfil()}`)
  }

  probarDoctor() {
    let doctor = new Doctor ({
      nombre: new Nombre ("Bedivere"),
      especialidad: new Especialidad("medico de gurrra"),
      telefono: 3121608890,
      celula: new Celula ("agr155fn50fx5")
    })
    console.log(doctor.getPerfil());
  }

  probarCita() {
    let cita = new Cita({
      fecha: new Fecha (14,5,2020),
      hora: new hora(12),
      doctor: new Doctor("gabriel luna"),
      paciente: new Paciente ("Alex")
    })
    console.log(cita.getCita());
  }

  probarHospital(){
    let hospital = new Hospital ({
      nombre: "Hospital Paso al infierno",
      direccion: "AV. Nueva calle chida #145"
    })
    hospital.registrarDoctor(this.doctor);
    hospital.registrarCita(this.cita);
    hospital.listarDoctores();
    hospital.listarCitas();
    hospital.buscarCita(this.cita)
    hospital.encontrarIndiceCita(this.cita)
    hospital.eliminarCita(this.cita)
  }
}

probarPacienteAsegurado(){
  let sujeto0 = new PacienteAsegurado({
    nombre = new Nombre ("Ansel", "MCtrevis", "Aslt"),
    fechaNacimiento: new fechaNacimiento(10,2,2000),
    telefono:3125518970,
    numeroPoliza: 30877450629,
    finVigencia: new finVigencia(11,11,2020),
    compañia: "Archam",
  })

  console.log(sujeto0.getPerfil)
}
let app = new Main();

app.probarTiempo();
app.probarFecha();
app.probarNombre();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
app.probarHospital();
app.probarPacienteAsegurado()
