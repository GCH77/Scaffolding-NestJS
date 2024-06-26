import { Module } from '@nestjs/common';
import { UserUseCaseService } from './user-use-case/user-use-case.service';
import { ModelModule } from '../model/model.module';
import { UseCaseConfigModule } from '../../application/use-case-config/use-case-config.module';

@Module({
  imports: [ModelModule, UseCaseConfigModule],
  providers: [UserUseCaseService],
  exports: [UserUseCaseService],
})
export class UsecaseModule {}
