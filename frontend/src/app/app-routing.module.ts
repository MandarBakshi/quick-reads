import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AboutComponent } from './components/extras/about/about.component';
import { FeaturesComponent } from './components/extras/features/features.component';
import { PageNotFoundComponent } from './components/extras/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PdftotextComponent } from './components/tools/convert/pdftotext/pdftotext.component';
import { SpamDetectorComponent } from './components/tools/generate/spam-detector/spam-detector.component';
import { SummarizerComponent } from './components/tools/generate/summarizer/summarizer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'tools/summarizer', component: SummarizerComponent},
  {path: 'tools/pdftotext', component: PdftotextComponent},
  {path: 'tools/spamdetector', component: SpamDetectorComponent},

  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
