import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { ItemsComponent } from './MyComponents/items/items.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { PagenotfoundComponent } from './MyComponents/pagenotfound/pagenotfound.component';

import { FooterComponent } from './MyComponents/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BillingDetailsComponent } from './MyComponents/billing-details/billing-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpFormComponent } from './MyComponents/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './MyComponents/login-form/login-form.component'
import { AuthService } from './Shared/Services/auth.service';
import { ItemSingleComponent } from './MyComponents/item-single/item-single.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchfilterPipe } from './Shared/Pipes/searchfilter.pipe';
import { ProductsService } from './MyComponents/admin/Services/products.service';
import { AddproductComponent } from './MyComponents/admin/addproduct/addproduct.component';
import jsPDF from 'jspdf';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { ListingComponent } from './MyComponents/admin/listing/listing.component';
import { EditComponent } from './MyComponents/admin/edit/edit.component';
import { UserlistingComponent } from './MyComponents/admin/userlisting/userlisting.component';
import { UsersearchfilterPipe } from './Shared/Pipes/usersearchfilter.pipe';
import { UserEditComponent } from './MyComponents/admin/user-edit/user-edit.component';
import { OrderlistComponent } from './MyComponents/admin/orderlist/orderlist.component';
import { OrderdetailsComponent } from './MyComponents/orderdetails/orderdetails.component';
import { OrderlistbyuserComponent } from './MyComponents/orderlistbyuser/orderlistbyuser.component';
import { SuccessComponent } from './MyComponents/success/success.component';
import { SomethingWentWrongComponent } from './MyComponents/something-went-wrong/something-went-wrong.component';
import { AddAddressComponent } from './MyComponents/add-address/add-address.component';
import { AddressesComponent } from './MyComponents/addresses/addresses.component';
import { TokenInterceptor } from './Shared/Interceptor/token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    CartComponent,
    PagenotfoundComponent,
    FooterComponent,
    BillingDetailsComponent,
    SignUpFormComponent,
    LoginFormComponent,
    ItemSingleComponent,
    AboutUsComponent,
    SearchfilterPipe,
    AddproductComponent,
    AdminComponent,
    ListingComponent,
    EditComponent,
    UserlistingComponent,
    UsersearchfilterPipe,
    UserEditComponent,
    OrderlistComponent,
    OrderdetailsComponent,
    OrderlistbyuserComponent,
    SuccessComponent,
    SomethingWentWrongComponent,
    AddAddressComponent,
    AddressesComponent,


    // AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
    , ReactiveFormsModule, NgxPaginationModule, FormsModule,
  ],
  providers: [AuthService, ProductsService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
