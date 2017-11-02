import { Injectable } from '@angular/core';
import {Student} from 'C:\\Users\\user\\Desktop\\lab1TestingWP\\lab1\\src\\app\\model\\student';

@Injectable()
export class StudentManagementService {

  constructor() { }
  private idSequence = 0;
 private students = [{
    ime: 'Viktorija',
    prezime: 'Ristova',
    indeks: 151068,
    nasoka: 'Computer Science and Engineering'
  }, {
    ime: 'Marko',
    prezime: 'Markovski',
    indeks: 151008,
    nasoka: 'Informatics and Computer Engineering '
  }, {
    ime: 'Meri',
    prezime: 'Aleksandrova',
    indeks: 152042,
    nasoka: 'Academic Informatics Studies'
  }, {
    ime: 'Darko',
    prezime: 'Jovanov',
    indeks: 152063,
    nasoka: 'Computer Science and Engineering'
  }
  ];
  public filterStudents(): Promise<Student[]> {
    return Promise.resolve(this.students);
  }

  save(student: Student): Promise<Student> {
    const studentsFromDatabase = [];
    Object.assign(studentsFromDatabase, this.students);
    this.students = studentsFromDatabase;
    this.idSequence++;
    student.id = this.idSequence;
    this.students.push(student);
    return Promise.resolve(student);
  }

  edit(originalStudent: Student, updateStudent: Student): Promise<Student> {
    const studentsFromDatabase = [];
    Object.assign(studentsFromDatabase, this.students);
    this.students = studentsFromDatabase;
    return Promise.resolve(updateStudent);
  }
  findByName(studentName: string): Promise<Student> {
    const result = this.students.filter(student => student.ime === studentName);
    if (result && result.length > 0) {
      return Promise.resolve(result[0]);

    } else {
      return Promise.reject({
        errorMessage: 'The student with the given name does not exist. ',
        errorCode: 404
      });
    }
  }
}
