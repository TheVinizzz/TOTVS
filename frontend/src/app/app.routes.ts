import { Routes } from '@angular/router';
import { ClientListComponent } from "./components/client-list/client-list.component"
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

export const routes: Routes = [
  {
    path: "",
    component: ClientListComponent
  },
  {
    path: "/client/form",
    component: ClientFormComponent
  },
  {
    path: "/client/details/:id",
    component: ClientDetailComponent
  },
];
