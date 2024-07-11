import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from '@prisma/client';
import Status from "../utils/status"

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return this.prisma.client.create({ data: createClientDto });
  }

  async findAll(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }

  async findOne(id: number): Promise<Client> {
    return this.prisma.client.findUnique({ where: { id } });
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    return this.prisma.client.update({
      where: { id },
      data: updateClientDto,
    });
  }

  async remove(id: number): Promise<Client> {
    return this.prisma.client.delete({ where: { id } });
  }

  async cancelContract(id: number): Promise<Client> {
    return this.prisma.client.update({
      where: { id },
      data: { status: Status.CANCELLED },
    });
  }
}