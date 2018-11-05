import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChatReplayComponent } from './chat-replay/chat-replay.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatReplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
