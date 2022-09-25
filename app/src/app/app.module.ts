import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SingupComponent } from './form/singup/singup.component';
import { LoginComponent } from './form/login/login.component';
import { HeaderComponent } from './header/header.component';
import { StyleDirective } from './style.directive';

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    LoginComponent,
    HeaderComponent,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
