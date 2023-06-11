import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule,} from '@angular/material/button';
import{ MatToolbarModule} from '@angular/material/toolbar';
import{ MatInputModule} from '@angular/material/input';
import{ MatIconModule} from '@angular/material/icon';
import{ MatFormFieldModule} from '@angular/material/form-field';
import{ MatListModule} from '@angular/material/list';
import{ MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { ExploreComponent } from './explore/explore.component';
import { FormsModule } from '@angular/forms';
import { EyeComponent } from './eye/eye.component';
import { ContentService } from './services/content.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { SunburstComponent } from './sunburst/sunburst.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExploreComponent,
    EyeComponent,
    SunburstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
