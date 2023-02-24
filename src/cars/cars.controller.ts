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
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

/* 
    Los controladores o controllers son los que controlan rutas, los 
    encargados de escuchar la solicitud y emitir una respuesta
*/

@Controller('cars')
// @UsePipes(ValidationPipe)
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
    El pipe de uuid sirve para comprar si el id es de uuid, o sea que si ni siquiera es
    un uuid, no va a llegar al servicio y menos a la base de datos
  */

  @Get('/:id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch('/:id')
  updateCar(
    @Param('id', ParseUUIDPipe)
    id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
