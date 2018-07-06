import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent
 {
  public stud_details=[];
  d="hello";
  constructor(private stud_details1:StudentService)
   {

   }
public dis()
{
 
  this.stud_details1.GetStudDetails().subscribe(data=>this.stud_details=data);
 
}

 
}
