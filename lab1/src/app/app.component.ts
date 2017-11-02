import {Component, OnInit} from '@angular/core';
import {Student} from 'C:\\Users\\user\\Desktop\\lab1TestingWP\\lab1\\src\\app\\model\\student';
import {StudentManagementService} from './student-management.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Student Management System';
  public students: Student[];
  public currentStudent: Student;
  constructor(private studentManagementService: StudentManagementService) {

  }
  ngOnInit(): void {
    this.studentManagementService.filterStudents()
      .then(students => this.students = students)
      .catch(error => console.error(error.errorMessage));
  }

  showStudent(student: Student) {
    this.currentStudent = student;
  }
}
