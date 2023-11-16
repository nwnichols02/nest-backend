import { Test, TestingModule } from '@nestjs/testing';
import { HttpControllerController } from './http-controller.controller';

describe('HttpControllerController', () => {
  let controller: HttpControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpControllerController],
    }).compile();

    controller = module.get<HttpControllerController>(HttpControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
