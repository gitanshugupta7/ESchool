import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosectionComponent } from './mainview/herosection/herosection.component';
import { ClassesComponent } from './mainview/classes/classes.component';
import { FeatureComponent } from './mainview/feature/feature.component';
import { ContactusComponent } from './mainview/contactus/contactus.component';
import { AboutusComponent} from './mainview/aboutus/aboutus.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';

const routes: Routes = [

  { path: '', component: HerosectionComponent, },
  { path: 'classes', component: ClassesComponent, },
  { path: 'features', component: FeatureComponent, },
  { path: 'contact', component: ContactusComponent, },
  { path: 'about', component: AboutusComponent, },
  { path: 'coursediscription', component:CourseDescriptionComponent, },
  { path: 'memberpage', component:MemberPageComponent, },
  { path: 'developerpage', component:DeveloperPageComponent, }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
