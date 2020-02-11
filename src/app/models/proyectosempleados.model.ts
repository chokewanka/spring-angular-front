import Empleado from './empleados.model';
import Proyecto from './proyectos.model';
import Cargo from './cargos.model';

export default class ProyectoEmpleado{
    id?: number;
    empleado: Empleado;
    proyecto: Proyecto;
    cargo: Cargo;
    responsabilidad: String;

    constructor(){
    }
}