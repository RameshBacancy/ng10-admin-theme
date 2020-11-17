import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LandingHeaderComponent } from './pages/layout/landing-header/landing-header.component';
import { LayoutModule } from 'src/app/pages/layout/layout.module';
// import { ClickOutsideDirective } from './core/directives/click-outside.directive';
import { BasicAuthInterceptor } from 'src/app/interceptor/basic-auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule
  ],
  exports: [
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ]
})
export class AppModule { }
