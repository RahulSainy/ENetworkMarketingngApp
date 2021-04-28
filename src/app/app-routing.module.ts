import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { MyincomeComponent } from "./myincome/myincome.component";
import { BusinessnetworkComponent } from "./mynetwork/businessnetwork/businessnetwork.component";
import { CustomernetworkComponent } from "./mynetwork/customernetwork/customernetwork.component";
import { OrderComponent } from "./order/order.component";
import { ReportComponent } from "./report/report.component";
import { UpgradebusinessComponent } from "./upgradebusiness/upgradebusiness.component";


const routes: Routes = [
    { path:'', component: OrderComponent},
    { path:'signup', component: SignupComponent},
     { path:'login', component:LoginComponent },
     { path:'report', component: ReportComponent },
     { path:'upgardebusiness', component: UpgradebusinessComponent },
     { path:'myincome', component: MyincomeComponent },
     { path:'customernetwork', component:CustomernetworkComponent },
     { path:'businessnetwork', component:BusinessnetworkComponent },
      { path:'myaccount', component:MyaccountComponent },
     //  { path:'', component: }









    
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports : [RouterModule]
})
export class AppRoutingModule {}