import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule, MatNativeDateModule,
  MatSelectModule,
  MatStepperModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material';




const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatStepperModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
