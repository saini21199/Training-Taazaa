import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { Child1Component } from './child1/child1.component';
import { CustomAttributeDirectiveComponent } from './custom-attribute-directive/custom-attribute-directive.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RelayComponent } from './relay/relay.component';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'behaviourSubject',
    component: BehaviourComponent
  },
  {
    path: 'replaySubject',
    component : RelayComponent
  },
  {
    path: 'asyncSubject',
    component: AsyncComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'custom-attribute-directive',
    component: CustomAttributeDirectiveComponent
  },
  {
    path: 'data-binding',
    component: ImageComponent
  },
  {
    path: 'product',
    component: StructuredirectiveComponent
  },
  {
    path: 'master-detail',
    component: PurchaseComponent
  },
  {
    path: 'send-data',
    component: Child1Component
  },
  {
    path: 'error-handler',
    component: ErrorHandlerComponent
  },
  {
    path: 'login-form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }