import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { BrandsComponent } from './products/brands/brands.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { LoginComponent } from './header/login/login.component';


const appRoutes: Routes = [
   {
      path: 'products',
      component: ProductComponent,
      data: { title: 'Product List' }
   },
   {
      path: 'product-details/:id',
      component: ProductDetailComponent,
      data: { title: 'Product Details' }
   },
   {
      path: 'product-create',
      component: ProductCreateComponent,
      data: { title: 'Create Product' }
   },
   {
      path: 'featured-products',
      component: FeaturedProductsComponent,
      data: { title: 'Featured Products' }
   },
   {
      path: 'product-edit/:id',
      component: ProductEditComponent,
      data: { title: 'Edit Product' }
   },
   {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
   }
];

@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      ProductDetailComponent,
      ProductCreateComponent,
      ProductEditComponent,
      FeaturedProductsComponent,
      BrandsComponent,
      HeaderComponent,
      MenuComponent,
      LoginComponent
   ],
   imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
