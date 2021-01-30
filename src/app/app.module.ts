import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { SessionItelListComponent } from './session-itel-list/session-itel-list.component';
import { InscriptionDisabledDirectiveDirective } from './inscription-disabled-directive.directive';

import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [{
  path: 'list',component: SessionItelListComponent},
  {path: 'admin',loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)},
  { path: '',   redirectTo: '/list', pathMatch: 'full' }
];
@NgModule({
  declarations: [  
    AppComponent,
    SessionComponent,
    SessionItelListComponent,
    InscriptionDisabledDirectiveDirective,
   
  ],
  imports: [RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
