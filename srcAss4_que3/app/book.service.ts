import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor()
   { 

   }
   getBookDetails()
   {
     return [
              {"name":"AGNIPANKH","price":200,"author":"A.P.J.Abdul Kalam","pages":400},
              {"name":"XYZ","price":100,"author":"Y.P","pages":500},
              {"name":"ABC","price":50,"author":"PPP","pages":1000},
              {"name":"PQR","price":1000,"author":"GGGG","pages":500}
            ]
   }
}
