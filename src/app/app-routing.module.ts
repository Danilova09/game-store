import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { ChoosePlatformComponent } from './games/choose-platform.component';
import { PlatformGamesListComponent } from './games/platform-games-list/platform-games-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  {path: 'games', component: GamesComponent, children: [
      {path: '', component: ChoosePlatformComponent},
      {path: ':platform', component: PlatformGamesListComponent},
    ]},
  {path: 'new-game', component: NewGameComponent},
  {path: 'game-details', component: GameDetailsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
