import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;
  @IsString()
  readonly model: string;
}

/*
  DTO, Data transfer object, es un objeto que me permite transferir esa 
  data en diferentes piezas de mi aplicación
*/
