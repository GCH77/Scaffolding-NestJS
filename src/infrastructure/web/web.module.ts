import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { ModelModule } from '../../domain/model/model.module';
import { UsecaseModule } from '../../domain/usecase/usecase.module';

@Module({
  imports: [ModelModule, UsecaseModule],
  controllers: [UserController],
})
export class WebModule {}
