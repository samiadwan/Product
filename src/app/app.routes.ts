import { Routes } from '@angular/router';
import { ProductComponent } from './Component/product/product.component';
import { ProductDetailsComponent } from './Component/product-details.component';

export const routes: Routes = [
    {
      path:'',
      redirectTo:'products',
      pathMatch:'full'
    },
    {
        path:'products',
        component:ProductDetailsComponent
    },
    { 
        path: 'product-details/:id',
        component: ProductComponent 
    },
];
