import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDtoSchema {
  @ApiProperty({ description: 'O nome do usuário', example: 'Carlos' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'CPF/CNPJ do cliente', example: "999.999.999-99" })
  @IsInt()
  @IsNotEmpty()
  cpfCnpj: string;

  @ApiProperty({ description: 'Telefone do cliente', example: '9999999-9999' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Numero do contrato', example: 3303 })
  @IsString()
  @IsNotEmpty()
  contractNumber: string;

  @ApiProperty({ description: 'Validade do contrato', example: '10/10/2026' })
  @IsString()
  @IsNotEmpty()
  contractDate: Date;

  @ApiProperty({ description: 'Telefone do cliente', example: '9999999-9999' })
  @IsString()
  @IsNotEmpty()
  contractValue: number;
}

export class CreateClientDto {
    name: string;
    cpfCnpj: string;
    phone: string;
    contractNumber: string;
    contractDate: Date;
    contractValue: number;
}