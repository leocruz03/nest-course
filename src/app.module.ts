import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

/* 
  ¿Qué son los módulos?

  Son los encargados de agrupar y desacoplar un conjunto de funcionalidad
  específica por dominio, un ejemplo sería que tuviesemos un módulo de 
  autenticación "auth.module.ts", es el encargado de toda la parte de la 
  autenticación
*/

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
