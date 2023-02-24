import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';

/* 
    Los controladores o controllers son los que controlan rutas, los 
    encargados de escuchar la solicitud y emitir una respuesta
*/

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  /* 
    Ese :id es como un comodín para que nest pueda buscar mejor el 
    endpoint, algo muy parecido a esto /id
  */

  /* 
    El @Param es un decorador que me ayuda a obtener los parámetros  
  */

  /* 
    Los pipe's, se encargan de transformar la data recibida en requests, para
    asegurar un tipo, valor o una instancia de un objeto, como transformar 
    números, validaciones, etc...
  */

  /*
    El pipe de uuid sirve para comprar si el id es de uuid
  */

  @Get('/:id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch('/:id')
  updateCar(
    @Param('id', ParseIntPipe)
    id: number,
    @Body() body: any,
  ) {
    return body;
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
