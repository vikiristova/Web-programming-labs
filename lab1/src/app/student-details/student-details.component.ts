import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentManagementService} from '../student-management.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StudentEditComponent} from '../student-edit/student-edit.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input('inputStudent')
  public student: Student;
  constructor(private route: ActivatedRoute,
              private service: StudentManagementService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const studentIme = params.get('ime');
        const studentPromise = this.service.findByName(studentIme);
        studentPromise.catch(
          error => {
            console.error(error.errorMessage);
          }
        );
        return studentPromise;
      })
      .subscribe(student => {
        this.student = student;
      });
  }


}
