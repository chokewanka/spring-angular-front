import Local from './locales.model';
import ProyectoEmpleado from './proyectosempleados.model';

export default class Proyecto{
    id?: number;
    nombre: string;
    descripcion: string;
    local: Local;
    fechaInicio: Date;
    fechaFin: Date;

    proyectosEmpleados?: ProyectoEmpleado[];

    isDeleted: number;

    constructor(){
    }
}