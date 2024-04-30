export class CategoriasDomain{
    id: number;
    correlativo: string;
    nombre: string;
    descripcion: string;

    constructor(id: number, correlativo: string, nombre: string, descripcion: string){
        this.id = id;
        this.correlativo = correlativo;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}