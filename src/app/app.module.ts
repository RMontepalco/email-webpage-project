import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { EmailBoxComponent } from './email-box/email-box.component';
import { SideUiComponent } from './side-ui/side-ui.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ButtonHighlightDirective } from './button-highlight.directive';
import { SearchHighlightDirective } from './search-highlight.directive';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
    pathMatch: 'full',
    data: {
      title: 'Email App'
    }
  },
  {
    path: 'login',
    loadChildren: () => import ('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import ('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'home',
    loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    //SignupComponent
    //ButtonHighlightDirective
    //SearchHighlightDirective
    //SearchBarComponent
    //EmailBoxComponent
    //SideUiComponent
    //LoginComponent
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
