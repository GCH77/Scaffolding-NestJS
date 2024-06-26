import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { environments } from '../env/environments';
import databaseConfig from '../config/database.config';
import validationSchema from '../config/validationSchema';
import { PostgresqlDbModule } from './infrastructure/adapters/postgresql-db/postgresql-db.module';
import { ModelModule } from './domain/model/model.module';
import { UsecaseModule } from './domain/usecase/usecase.module';
import { WebModule } from './infrastructure/web/web.module';
import { UseCaseConfigModule } from './application/use-case-config/use-case-config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || './env/.dev.env',
      load: [databaseConfig],
      validationSchema: validationSchema,
      isGlobal: true,
    }),
    PostgresqlDbModule,
    ModelModule,
    UsecaseModule,
    WebModule,
    UseCaseConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
