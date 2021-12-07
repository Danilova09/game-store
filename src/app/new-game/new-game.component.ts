import { Component } from '@angular/core';
import { Game } from '../shared/game.model';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  name!: string;
  imgUrl!: string;
  gamePlatform!: string;
  description!: string;

  constructor(private gameService: GamesService) { }

  onSubmit() {
    const game = new Game(this.name, this.imgUrl, this.description, this.gamePlatform);
    this.gameService.addGame(game);
  }
}
