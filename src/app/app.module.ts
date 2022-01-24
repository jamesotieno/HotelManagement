import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RoomBooKingRequestComponent } from './room-boo-king-request/room-boo-king-request.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, AuthenticationComponent, RoomBooKingRequestComponent, FeedbackComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
