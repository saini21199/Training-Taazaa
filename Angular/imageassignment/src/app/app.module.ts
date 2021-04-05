import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {MatTableModule} from '@angular/material/table';
import { AttributeDirectiveDirective } from './attribute-directive.directive';
import { CustomAttributeDirectiveComponent } from './custom-attribute-directive/custom-attribute-directive.component';
import { HomeComponent } from './home/home.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { MyerrorhandlerService } from './myerrorhandler.service';
@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    StructuredirectiveComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    Child1Component,
    Child2Component,
    AttributeDirectiveDirective,
    CustomAttributeDirectiveComponent,
    HomeComponent,
    ErrorHandlerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [{provide:ErrorHandler,useClass:MyerrorhandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
