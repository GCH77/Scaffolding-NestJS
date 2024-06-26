import { Module } from '@nestjs/common';
import { UserRepository } from '../../domain/model/gateways/user.repository';
import { UserService } from '../../infrastructure/adapters/postgresql-db/services/user/user.service';
import { PostgresqlDbModule } from '../../infrastructure/adapters/postgresql-db/postgresql-db.module';

@Module({
  imports: [PostgresqlDbModule],
  providers: [
    {
      provide: UserRepository,
      useClass: UserService,
    },
  ],
  exports: [UserRepository],
})
export class UseCaseConfigModule {}
