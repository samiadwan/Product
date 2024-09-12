import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule ,provideHttpClient,withFetch } from '@angular/common/http';
import { Router} from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe, ProductComponent, MatPaginatorModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit{
    totalProducts: number = 0; 
    pageSize: number = 10;
    pageIndex: number = 0;
    
    productList: any [] =[];
  
    constructor(private http : HttpClient, private router: Router) { }
    productOBJ: any ={
      "id":0,
      "brand":"",
      "title":""
    }
   
    ngOnInit(): void{
      this.fetchProducts(this.pageIndex, this.pageSize);
    }
    fetchProducts(pageIndex: number, pageSize: number): void {
      const skip = pageIndex * pageSize;
      const apiUrl = `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}&select=brand,title`;
      // const x = this.http.get(apiUrl); //holds observal returns .do not mak http request yet
      this.http.get(apiUrl).subscribe((response: any) => {
        this.productList = response.products;
        this.totalProducts = response.total; 
      });
    }
    onPageChange(event: PageEvent): void {
      debugger;
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.fetchProducts(this.pageIndex, this.pageSize);
      debugger;
    }
    //  getProducts()
    // {
    //   this.http.get("https://dummyjson.com/products").subscribe((result:any)=>{
    //       this.productList = result.products;
    //       // const allProducts = result.products;
    //       // this.productList = allProducts.slice(-10);
    //   }); 
    // }
  
    createProduct() {
      if (this.productOBJ) {
        let last:any = this.productList[this.productList.length-1];
        let json = JSON.stringify(this.productOBJ);
        this.http.post(`https://dummyjson.com/products/add`, json)
          .subscribe((result: any) => {
           
            result.brand = this.productOBJ.brand;
            result.title = this.productOBJ.title;
            this.productList[last.id] = result;                  
            this.productOBJ = null; 
          });
      }
    }
  
    updateProduct() {
      if (this.productOBJ) {
      debugger;
        let json = JSON.stringify(this.productOBJ);
        this.http.patch(`https://dummyjson.com/products/${this.productOBJ.id}`, json)
          .subscribe((result: any) => {
            const index = this.productList.findIndex(p => p.id === this.productOBJ.id);
            if (index !== -1) {
              result.brand = this.productOBJ.brand;
              result.title = this.productOBJ.title;
              this.productList[index] = result;         
            }
            this.productOBJ = null; 
          });
      }
    }
    
    onEdit(data: any) {
      this.productOBJ = { ...data}; 
    }
  //route: navigate to the route component as mentioned
    viewProductDetails(id: number) {
      this.router.navigate(['/product-details', id]);
    }

    onDelete(id: number){
      this.http.delete("https://dummyjson.com/products/"+id).subscribe((result:any)=>{
        this.productList = this.productList.filter(product => product.id !== id);
      }); 
    }
   
}