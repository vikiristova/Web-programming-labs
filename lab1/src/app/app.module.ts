import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentManagementService} from './student-management.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AlertModule } from 'ngx-bootstrap';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {StudentNamePipe} from './pipes/student-name.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentNamePipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
