import Local from './locales.model';
import Conocimiento from './conocimientos.model';
import ProyectoEmpleado from './proyectosempleados.model';

export default class Empleado{
    id?: number;
    nombre: string;
    codigo: string;
    fechaIngreso: Date;
    local: Local = new Local();
    salario: number;
    edad: number;
    telefono?: string;
    email?: string;

    conocimientos?: Conocimiento[] = [];

    proyectosEmpleados?: ProyectoEmpleado[] = [];

    isDeleted: number;

    constructor(){
    }
}