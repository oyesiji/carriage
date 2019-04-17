import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatPaginatorModule} from '@angular/material';
import { BrefftComponent } from './brefft/brefft.component';
import { TabsComponent } from './tabs/tabs.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LondonComponent } from './london/london.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrefftComponent,
    TabsComponent,
    LondonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
