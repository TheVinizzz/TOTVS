import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto, CreateUserDtoSchema } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateUserDtoSchema) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }

  @Post(':id/cancel')
  cancel(@Param('id') id: string) {
    return this.clientsService.cancelContract(+id);
  }
}