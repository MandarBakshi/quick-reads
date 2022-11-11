import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FeaturesComponent } from './components/extras/features/features.component';
import { AboutComponent } from './components/extras/about/about.component';
import { ContactComponent } from './components/extras/contact/contact.component';
import { PageNotFoundComponent } from './components/extras/page-not-found/page-not-found.component';
import { SummarizerComponent } from './components/tools/generate/summarizer/summarizer.component';
import { PdftotextComponent } from './components/tools/convert/pdftotext/pdftotext.component';
import { ExtractimageComponent } from './components/tools/generate/extractimage/extractimage.component';
import { PdfInputComponent } from './components/tools/generate/summarizer/pdf-input/pdf-input.component';
import { TextInputComponent } from './components/tools/generate/summarizer/text-input/text-input.component';
import { UrlInputComponent } from './components/tools/generate/summarizer/url-input/url-input.component';
import { SpamDetectorComponent } from './components/tools/generate/spam-detector/spam-detector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FeaturesComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    SummarizerComponent,
    PdftotextComponent,
    ExtractimageComponent,
    PdfInputComponent,
    TextInputComponent,
    UrlInputComponent,
    SpamDetectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
