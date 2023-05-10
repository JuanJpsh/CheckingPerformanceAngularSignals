import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLabComponent } from './first-lab/first-lab.component';
import { SecondLabComponent } from './second-lab/second-lab.component';
import { ThirdLabComponent } from './third-lab/third-lab.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstLabComponent,
  },
  {
    path: 'second',
    component: SecondLabComponent,
  },
  {
    path: 'third',
    component: ThirdLabComponent,
  },
  {
    path: '**',
    redirectTo: 'first'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
