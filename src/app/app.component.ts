import { HttpClient, HttpClientModule ,provideHttpClient,withFetch } from '@angular/common/http';
import { Component} from '@angular/core';
import { ProductDetailsComponent } from './Component/product-details.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule, JsonPipe } from '@angular/common';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet,ProductDetailsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}

