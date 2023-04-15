import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-kids-clothing',
  templateUrl: './kids-clothing.component.html',
  styleUrls: ['./kids-clothing.component.css']
})
export class KidsClothingComponent implements OnInit {
  allProducts:any[]=[];
  category:any[]=[];
  title:string="";
 price:number=0;
//  description:string="";
  image: string="";
  searchText:string="";
getKidsProduct: any;
  
    //  private _customerService: any;
  constructor(private ProductservicesService:ProductservicesService){}
   
    ngOnInit():void{
  
    
    this.allProducts=this. ProductservicesService.getKidsProduct();
    }

}
