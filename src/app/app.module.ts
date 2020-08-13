import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { HerosectionComponent } from './mainview/herosection/herosection.component';
import { ClassesComponent } from './mainview/classes/classes.component';
import { FeatureComponent } from './mainview/feature/feature.component';
import { ContactusComponent } from './mainview/contactus/contactus.component';
import { AboutusComponent } from './mainview/aboutus/aboutus.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { InternsComponent } from './contact_us/interns/interns.component';
import { MembersComponent } from './contact_us/members/members.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    HerosectionComponent,
    ClassesComponent,
    FeatureComponent,
    ContactusComponent,
    AboutusComponent,
    CourseDescriptionComponent,
    InternsComponent,
    MembersComponent,
    DeveloperPageComponent,
    MemberPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
