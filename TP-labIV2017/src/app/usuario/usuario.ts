import{TipoUsuario} from './tipo-usuario.enum';

export class Usuario {
    nombre :string;
    apellido:string;
    telefono:number;
    password:string;
    fecha:string;
    foto:string;
    tipo : typeof TipoUsuario;
}
