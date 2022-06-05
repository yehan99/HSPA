import { InspectionApiService } from './services/inspection-api.service';
import { RegisterComponent } from './User/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { InspectionComponent } from './Inspection/inspection/inspection.component';
import { ShowInspectionComponent } from './Inspection/show-inspection/show-inspection.component';
import {MatDialogModule} from '@angular/material/dialog';
import { InspectionTypeDialogComponent } from './inspection-type-dialog/inspection-type-dialog.component';
import { NewInspectionComponent } from './Inspection/new-inspection/new-inspection.component';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  // {path: '**' , component: PageNotFoundComponent},
  {path: '' , component: ShowInspectionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    RegisterComponent,
    InspectionComponent,
    ShowInspectionComponent,
    InspectionTypeDialogComponent,
    NewInspectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatButtonModule,
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    UserService,
    InspectionApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
