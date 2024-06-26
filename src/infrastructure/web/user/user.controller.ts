import { Controller, Get, Param } from '@nestjs/common';
import { UserUseCaseService } from '../../../domain/usecase/user-use-case/user-use-case.service';
import UserDto from '../dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userUseCase: UserUseCaseService) {}

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserDto> {
    const user = await this.userUseCase.getById(id);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phone,
    };
  }
}
