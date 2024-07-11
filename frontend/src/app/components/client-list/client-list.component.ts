import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientes: Client[] = [];
  statusOptions = ['Em Atraso', 'Dentro do Prazo', 'Pago', 'Cancelado'];

  constructor(private clienteService: ClientService) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getClients().subscribe((data) => {
      this.clientes = data;
    });
  }

  deleteCliente(id: number): void {
    this.clienteService.deleteClient(id).subscribe(() => {
      this.loadClientes();
    });
  }

  filterClientes(status: string): void {
    this.clienteService.getClients().subscribe((data) => {
      this.clientes = data.filter(cliente => cliente.status === status);
    });
  }
}
