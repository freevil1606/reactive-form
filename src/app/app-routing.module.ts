import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NameEditorComponent} from "./name-editor/name-editor.component";
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";
import {ValidateFormComponent} from "./validate-form/validate-form.component";

const routes: Routes = [
  {path: 'name-editor', component: NameEditorComponent},
  {path: 'profile-editor', component: ProfileEditorComponent},
  {path: 'validate-form', component: ValidateFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
