import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { ValidateFormComponent } from './validate-form/validate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ValidateFormComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
