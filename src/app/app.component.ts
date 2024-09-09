import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'product';
  productList: any [] =[];
  product: any [] =[];
  constructor(private http : HttpClient) { }

   getProducts()
  {
    this.http.get("https://dummyjson.com/products").subscribe((result:any)=>{
      // debugger;
        this.productList = result.products;
    }); 
  }

  getProduct(productId: number)
  {
    this.http.get("https://dummyjson.com/products/1").subscribe((result:any)=>{
        this.product = result;
        debugger;
    }); 
  }
}

