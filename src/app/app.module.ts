import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavComponent } from "./navigation/sidenav/sidenav.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { OrderComponent } from "./order/order.component";
import { ReportComponent } from "./report/report.component";
import { BusinessownerComponent } from "./order/businessowner/businessowner.component";
import { CustomerComponent } from "./order/customer/customer.component";
import { MyincomeComponent } from "./myincome/myincome.component";
import { UpgradebusinessComponent } from "./upgradebusiness/upgradebusiness.component";
import { CustomernetworkComponent } from "./mynetwork/customernetwork/customernetwork.component";
import { BusinessnetworkComponent } from "./mynetwork/businessnetwork/businessnetwork.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { AuthService } from "./auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidenavComponent,
    OrderComponent,
    BusinessownerComponent,
    CustomerComponent,
    ReportComponent,
    UpgradebusinessComponent,
    MyincomeComponent,
    CustomernetworkComponent,
    BusinessnetworkComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
