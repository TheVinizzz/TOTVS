import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  client: Client = {
    id: 0,
    name: '',
    cpfCnpj: '',
    phone: '',
    contractNumber: '',
    contractDate: new Date(),
    contractValue: 0,
    status: 'Dentro do Prazo'
  };

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.client.id) {
      this.clientService.updateClient(this.client).subscribe(() => {
        this.router.navigate(['/clients']);
      });
    } else {
      this.clientService.addClient(this.client).subscribe(() => {
        this.router.navigate(['/clients']);
      });
    }
  }
}
