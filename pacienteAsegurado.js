import Paciente from "./paciente.js"
export default class PacienteAsegurado extends Paciente {

    constructor(nombre, fechaNacimiento, telefono, numeroPoliza, finVigencia, compañia){
        super({nombre, fechaNacimiento, telefono})
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.telefono = telefono
        this.numeroPoliza = numeroPoliza
        this.finVigencia = finVigencia
        this.compañia = compañia

    }



    getPerfil(){
        return `${this.nombre.getNombreCompleto()}, fecha de nacimineto: ${this. fechaNacimiento.getFecha()}, telefono ${this.telefono}, numero de poliza: ${this.numeroPoliza}, vigencia de la poliza: ${this.finVigencia}, compañia: ${this.compañia}`
    }
}