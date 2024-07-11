import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { PrismaService } from '../prisma.service';
import { Client } from '@prisma/client';
import Status from "../utils/status"
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

describe('ClientsService', () => {
  let service: ClientsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsService, PrismaService],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a client', async () => {
      const dto = {
        name: 'John Doe',
        cpfCnpj: '12345678901',
        phone: '123456789',
        contractNumber: '1234',
        contractDate: new Date(),
        contractValue: 1000,
      };

      jest.spyOn(prisma.client, 'create').mockResolvedValue({
        ...dto,
        id: 1,
        status: Status.ON_TIME,
      } as Client);

      expect(await service.create(dto)).toEqual({
        ...dto,
        id: 1,
        status: Status.ON_TIME,
      });
    });
  });
});
