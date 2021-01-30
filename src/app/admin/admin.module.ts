import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session/session.component';
import { SessionItelListComponent } from './session-itel-list/session-itel-list.component';
import {  SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { AppSessionEditComponent } from './app-session-edit/app-session-edit.component'
import {FakeSessionItemService} from './fakesessionitem.service';
import {RouterModule, Routes} from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrackComponent } from './track/track.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ListFormateurComponent } from './list-formateur/list-formateur.component';
import { AddformateurComponent } from './addformateur/addformateur.component';
import { ParticipantComponent } from './participant/participant.component';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { AddparticipantComponent } from './addparticipant/addparticipant.component';

const adminRoutes: Routes = [{
  path: '',component: AdminComponent,children: [ 
  { path: 'add', component: SessionAddFormComponent },
  { path: 'edit/:id', component: AppSessionEditComponent },
  { path: 'list', component: SessionItelListComponent },
  { path : 'formateur', component: ListFormateurComponent},
  { path :'addform' , component:AddformateurComponent },
  {path:'participant',component:ListParticipantComponent},
  {path:'addparticipant',component:AddparticipantComponent},
  { path: '',  component : DashboardComponent }]
}]; 
@NgModule({
  declarations: [AdminComponent,SessionComponent,SessionItelListComponent,SessionAddFormComponent, AppSessionEditComponent, SidenavComponent, HeaderComponent, DashboardComponent, TrackComponent, FormateurComponent, ListFormateurComponent, AddformateurComponent, ParticipantComponent, ListParticipantComponent, AddparticipantComponent],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule,
  ],
  providers: [FakeSessionItemService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
