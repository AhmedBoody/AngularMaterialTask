import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../userform/userform.component';

@Component({
  selector: 'app-userformDetail',
  templateUrl: './userformDetail.component.html',
  styleUrls: ['./userformDetail.component.css']
})
export class UserformDetailComponent implements OnInit {

  @Input() data: MatTableDataSource<Employee>[];
  @Output() delete= new EventEmitter<number>();
  @Output() submit= new EventEmitter<Employee>();
  employee = {
    id: 0,
    firstname :"",
    lastname:"",
    phonenumber:""
    };
  displayedColumns: string[] = ['ID','firstname', 'lastname', 'phonenumber','actions'];
  constructor() {  
  }
  
reset(): void {
 this.employee = {
  id: 0,
  firstname :"",
  lastname:"",
  phonenumber:""
  };
}

ngOnInit() {
}

deleteClicked(id): void {
  debugger;
  this.delete.emit(id);
}

submitClicked(form): void {
  debugger;
  
  var transferedObj = this.employee;
  this.reset();
  form.reset();
  this.submit.emit(transferedObj);
}
editItem(employee) :void{
this.employee = employee;
}
}
