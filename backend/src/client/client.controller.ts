import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { Prisma } from '@prisma/client';

@Controller('Clients')
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

  @Post()
  create(@Body() createClientDto: Prisma.ClientCreateInput) {
    return this.ClientService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.ClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: Prisma.ClientUpdateInput) {
    return this.ClientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ClientService.remove(+id);
  }
}