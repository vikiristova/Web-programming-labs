import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {StudentEditComponent} from './student-edit/student-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'list/', pathMatch: 'full'},
  {path: 'view/:/detais/:indeks', component: StudentDetailsComponent},
  {path: 'edit/:indeks', component: StudentEditComponent},
  {path: 'edit/', component: StudentEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
