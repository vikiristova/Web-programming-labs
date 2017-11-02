import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StudentManagementService} from '../student-management.service';
import {FilterPipe} from '../pipes/filter.pipe';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  public CREATE_ACTION= 'Create';
  public EDIT_ACTION= 'Edit';
  private _editingStudent: Student;
  private action= this.CREATE_ACTION;
  private isEdit = false;
  protected student: Student;
  @Input('editingStudent')
  set setEditingStudent(editingStudent: Student) {
    console.log('Set editing student');
    this.setStudent(editingStudent);
  }
  private setStudent(editingStudent: Student) {
    console.log('Setting student');
    if (editingStudent) {
      this.action = this.EDIT_ACTION;
      this.isEdit = true;
      this._editingStudent = editingStudent;
      this.student.ime = editingStudent.ime;
      this.student.prezime = editingStudent.prezime;
      this.student.indeks = editingStudent.indeks;
      this.student.nasoka = editingStudent.nasoka;
    }
  }
  constructor(private route: ActivatedRoute, private studentManagementService: StudentManagementService) {this.student = new Student();
  }
  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const studentIme = params.get('ime');
        const studentPromise = this.studentManagementService
          .findByName(studentIme);
        studentPromise.catch(
          error => {
            console.error(error.errorMessage);
          }
        );
        return studentPromise;
      })
      .subscribe(student => {
        this.setStudent(student);
      });
  }
  public save(): void {
    console.log('saving...');
    this.studentManagementService.save(this.student)
      .then(studentFromDatabase => this.setStudent(studentFromDatabase));
    // we should reset the video instance after saving it
    this.student = new Student();
  }

  public edit() {
    this.studentManagementService.edit(this._editingStudent, this.student)
      .then(studentFromDatabase => this.setStudent(studentFromDatabase));
  }

}
