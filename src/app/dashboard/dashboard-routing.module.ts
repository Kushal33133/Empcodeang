import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { UploadComponent } from './upload/upload.component';
import { UpdateDocketComponent } from './update-docket/update-docket.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', component: MainComponent
      },
      { path: 'upload', component: UploadComponent },
      { path: 'update', component: UpdateDocketComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
