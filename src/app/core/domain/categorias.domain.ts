export class CategoriasDomain{
    id?: number;
    correlativo?: string;
    nombre?: string;
    descripcion?: string;

    constructor(){
        this.id = 0;
        this.correlativo = '';
        this.nombre = '';
        this.descripcion = '';
    }
}