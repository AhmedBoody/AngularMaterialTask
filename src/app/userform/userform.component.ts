import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource<Employee>(this.data);
  
  constructor() {  
  }

  ngOnInit() {
  }

  onSubmit(employee){
    debugger;
    if(employee.id > 0)
    {
      debugger;
      for(let i = 0;i< this.data.length;i++)
      {
        if(this.data[i].id == employee.id){

          this.data.splice(i,1);
        }
      }
      this.data.push(employee);
    }
    else{
      employee.id = this.data.length + 1;
      this.data.unshift(employee);
    }
    this.dataSource = new MatTableDataSource<Employee>(this.data);
  }
 
  deleteItem(id){
    for(let i = 0;i< this.data.length;i++)
    {
      if(this.data[i].id == id){

        this.data.splice(i,1);
      }
    }
    this.dataSource = new MatTableDataSource<Employee>(this.data);
  }
}


export interface Employee {
  id:number;
  firstname: string;
  phonenumber: string;
  lastname: string;
}

const ELEMENT_DATA: Employee[] = [
  {id:1,firstname: 'Ahmed', lastname: 'Mohamed', phonenumber: '0128 316927'},
  {id :2, firstname: 'Moahmed', lastname: 'Farouk', phonenumber: '0111 365927'},
  {id :3,firstname: 'Mai', lastname: 'Mohamed', phonenumber: '0100 316347'},
  {id :4,firstname: 'Saad', lastname: 'Rafaat', phonenumber: '0111 316557'},
  {id:5,firstname: 'Hany', lastname: 'Mohamed', phonenumber: '0128 316447'},
  {id:6,firstname: 'Mahmoud', lastname: 'Saeed', phonenumber: '0100 006927'},
];