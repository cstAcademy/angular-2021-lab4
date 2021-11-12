import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CompanyInfosRoutingModule } from './company-infos-routing.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    CompanyInfosRoutingModule
  ]
})
export class CompanyInfosModule { }
