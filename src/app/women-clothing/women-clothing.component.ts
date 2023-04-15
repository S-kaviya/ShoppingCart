import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.css']
})
export class WomenClothingComponent implements OnInit {

 

  allProducts:any[]=[];
  category:any[]=[];
  title:string="";
 price:number=0;
//  description:string="";
  image: string="";
  cart:string="";
  like:string="";
  searchText:string="";
getMensProduct: any;
  
    //  private _customerService: any;
  constructor(private ProductservicesService:ProductservicesService){}
   
    ngOnInit():void{
  
    
    this.allProducts=this. ProductservicesService.getWomenProduct();
    }

}
