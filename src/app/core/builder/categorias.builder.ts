import { GetCategoriasDto } from './../dto/get-categorias.dto';
import { CategoriasDomain } from "../domain/categorias.domain";

export class CategoriasBuilder {

    static fromDtoToDomain(categoriasDto: GetCategoriasDto): CategoriasDomain {
        return {
            id: categoriasDto.id,
            correlativo: categoriasDto.correlativo,
            nombre: categoriasDto.nombre,
            descripcion: categoriasDto.descripcion,
        }
    }

    static fromDomainToDto(categoriasDomain: CategoriasDomain): GetCategoriasDto{
        return {
            id: categoriasDomain.id ? categoriasDomain.id : 0,
            correlativo: categoriasDomain.correlativo ? categoriasDomain.correlativo : '',
            nombre: categoriasDomain.nombre ? categoriasDomain.nombre : '',
            descripcion: categoriasDomain.descripcion ? categoriasDomain.descripcion : '',
        }
    }
}