import { Routes } from '@angular/router';
import { ProductComponent } from './Component/product/product.component';
import { ProductDetailsComponent } from './Component/product-details.component';

export const routes: Routes = [
    {
      path:'',
      redirectTo:'product-details',
      pathMatch:'full'
    },
    {
        path:'product-details',
        component:ProductDetailsComponent
    },
    { 
        path: 'products/:id',
        component: ProductComponent 
    },
];
