import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '../../../../config/database.config';
import { UserService } from './services/user/user.service';
import { ModelModule } from '../../../domain/model/model.module';
import { UserEntity } from './model/user.entity';
import { ConfigType } from '@nestjs/config';
import * as path from 'node:path';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ModelModule],
      inject: [databaseConfig.KEY],
      useFactory: (
        databaseServiceConfig: ConfigType<typeof databaseConfig>,
      ) => ({
        type: 'postgres',
        host: databaseServiceConfig.host,
        port: databaseServiceConfig.port,
        username: databaseServiceConfig.username,
        password: databaseServiceConfig.password,
        database: databaseServiceConfig.database,
        entities: [path.join(__dirname, 'model/**/*.entity{.ts,.js}')],
        migrations: [path.join(__dirname, 'migrations/*{.ts,.js}')],
        migrationsTableName: 'migrations',
        logging: process.env.NODE_ENV === 'dev',
      }),
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserService],
  exports: [UserService, TypeOrmModule],
})
export class PostgresqlDbModule {}
