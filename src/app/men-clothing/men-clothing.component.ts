import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['./men-clothing.component.css']
})
export class MenClothingComponent implements OnInit {
  allProducts:any[]=[];
  category:any[]=[];
  title:string="";
 price:number=0;
//  description:string="";
  image: string="";
  searchText:string="";
getMensProduct: any;
  
    //  private _customerService: any;
  constructor(private ProductservicesService:ProductservicesService){}
   
    ngOnInit():void{
  
    
    this.allProducts=this. ProductservicesService.getMensProduct();
    }

}
