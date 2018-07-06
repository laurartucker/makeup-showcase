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


const appRoutes: Routes = [
   {
      path: 'products',
      component: ProductComponent
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
      ProductEditComponent
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
