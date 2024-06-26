import { Test, TestingModule } from '@nestjs/testing';
import { UserUseCaseService } from './user-use-case.service';

describe('UserUseCaseService', () => {
  let service: UserUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserUseCaseService],
    }).compile();

    service = module.get<UserUseCaseService>(UserUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
