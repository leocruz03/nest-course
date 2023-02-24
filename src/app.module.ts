import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

/* 
  ¿Qué son los módulos?

  Son los encargados de agrupar y desacoplar un conjunto de funcionalidad
  específica por dominio, un ejemplo sería que tuviesemos un módulo de 
  autenticación "auth.module.ts", es el encargado de toda la parte de la 
  autenticación
*/

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
