import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

/* 
  Son los que alojan la lógica de negocio de tal manera que sea reutilizable 
  mediante inyección de dependencias.

  Digamos que tenemos un PeliculasService para todo lo relacionado a obtener, 
  grabar, actualizar y eliminar información de pélículas
*/

// ! todos los servicios son providers pero no todos los providers son servicios

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: '${id}' don't found`);
    return car;
  }
}
