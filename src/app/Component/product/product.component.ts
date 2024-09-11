import { Component, EventEmitter, Input ,OnInit,Output} from '@angular/core';
import { Product } from '../../model/Class/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule ,provideHttpClient,withFetch } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  prod: any;
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}

    // @Output() back = new EventEmitter<void>();
    // @Input() productflag : string  = 'Details';
    // flag : boolean = true;
    
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.http.get(`https://dummyjson.com/products/${id}`).subscribe((result: any) => {
          this.prod = result;
        });
      }
    }
    goBack() {
      this.router.navigate(['/product-details']);
    }

}
