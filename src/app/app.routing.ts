import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductIndexComponent } from './components/products/product-index/product-index.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';

const appRoute: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard',component: DashboardComponent},
    {path: 'products',component: ProductIndexComponent},
    {path: 'product/register',component: ProductCreateComponent},
    {path: 'product/edit/:id',component: ProductEditComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);
