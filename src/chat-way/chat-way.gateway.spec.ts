import { Test, TestingModule } from '@nestjs/testing';
import { ChatWayGateway } from './chat-way.gateway';

describe('ChatWayGateway', () => {
  let gateway: ChatWayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatWayGateway],
    }).compile();

    gateway = module.get<ChatWayGateway>(ChatWayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
