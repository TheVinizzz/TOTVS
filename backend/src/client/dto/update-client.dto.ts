import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { Status } from '@prisma/client';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  status?: Status;
}
