import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/userComponent/user.component';
import { AboutComponent }  from './components/aboutComponent/about.component';
import { FooterComponent }  from './components/footerComponent/footer.component';

@NgModule({    // bind all the commponents
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
