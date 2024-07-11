export interface Client {
  id: number;
  name: string;
  cpfCnpj: string;
  phone: string;
  contractNumber: string;
  contractDate: Date;
  contractValue: number;
  status: 'Em Atraso' | 'Dentro do Prazo' | 'Pago' | 'Cancelado';
}
