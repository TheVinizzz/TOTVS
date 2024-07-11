import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import Status from "../utils/status"
import { Client } from '@prisma/client';

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        {
          provide: ClientsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
            cancelContract: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a client', async () => {
      const dto: CreateClientDto = {
        name: 'John Doe',
        cpfCnpj: '12345678901',
        phone: '123456789',
        contractNumber: '1234',
        contractDate: new Date(),
        contractValue: 1000,
      };

      const result: Client = {
        id: 1,
        ...dto,
        status: Status.ON_TIME,
      };

      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(dto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of clients', async () => {
      const result: Client[] = [
        {
          id: 1,
          name: 'John Doe',
          cpfCnpj: '12345678901',
          phone: '123456789',
          contractNumber: '1234',
          contractDate: new Date(),
          contractValue: 1000,
          status: Status.ON_TIME,
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single client', async () => {
      const result: Client = {
        id: 1,
        name: 'John Doe',
        cpfCnpj: '12345678901',
        phone: '123456789',
        contractNumber: '1234',
        contractDate: new Date(),
        contractValue: 1000,
        status: Status.ON_TIME,
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toEqual(result);
    });
  });

  describe('update', () => {
    it('should update a client', async () => {
      const dto: UpdateClientDto = {
        name: 'John Doe Updated',
        cpfCnpj: '12345678901',
        phone: '123456789',
        contractNumber: '1234',
        contractDate: new Date(),
        contractValue: 1500,
        status: Status.PAID,
      };

      const result: any = {
        id: 1,
        ...dto,
      };

      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update('1', dto)).toEqual(result);
    });
  });

  describe('remove', () => {
    it('should remove a client', async () => {
      const result: Client = {
        id: 1,
        name: 'John Doe',
        cpfCnpj: '12345678901',
        phone: '123456789',
        contractNumber: '1234',
        contractDate: new Date(),
        contractValue: 1000,
        status: Status.ON_TIME,
      };

      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await controller.remove('1')).toEqual(result);
    });
  });

  describe('cancel', () => {
    it('should cancel a client contract', async () => {
      const result: Client = {
        id: 1,
        name: 'John Doe',
        cpfCnpj: '12345678901',
        phone: '123456789',
        contractNumber: '1234',
        contractDate: new Date(),
        contractValue: 1000,
        status: Status.CANCELLED,
      };

      jest.spyOn(service, 'cancelContract').mockResolvedValue(result);

      expect(await controller.cancel('1')).toEqual(result);
    });
  });
});
