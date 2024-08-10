import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddDetailsComponent } from './contact-home/add-details/add-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormListComponent } from './form-list/form-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactHomeComponent,
    AddContactComponent,
    AddDetailsComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
