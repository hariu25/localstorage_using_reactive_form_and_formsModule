import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './contact-home/add-details/add-details.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { FormListComponent } from './form-list/form-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'home', component: ContactHomeComponent },
  { path: 'contact', component: AddDetailsComponent },
  { path: 'form-list', component: FormListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
