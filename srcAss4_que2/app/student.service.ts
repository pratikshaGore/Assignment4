import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istudent } from './studInfo';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient)
   { }
   private _url:string = "/assets/Data/stud.json";

   // Write method in service class which returns array 
   // of batch details
   
  GetStudDetails():Observable<Istudent[]>
  {
    return this.http.get<Istudent[]>(this._url);
  }
  
}
