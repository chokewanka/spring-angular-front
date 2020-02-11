import NivelExperiencia from './nivelesExperiencia.model';

export default class Conocimiento{
    id?: number;
    idEmpleado: number;
    nombre: string;
    nivelExperiencia: NivelExperiencia = new NivelExperiencia();
    isDeleted:number=0;

    constructor(){
    }
}