import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GamesComponent } from './games/games.component';
import { PlatformGamesListComponent } from './games/platform-games-list/platform-games-list.component';
import { ChoosePlatformComponent } from './games/choose-platform.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NewGameComponent,
    GamesComponent,
    PlatformGamesListComponent,
    ChoosePlatformComponent,
    GameDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
