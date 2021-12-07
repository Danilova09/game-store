import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/game.model';
import { GamesService } from '../shared/games.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  gamesPlatformList!: Game[];
  games: Game[] = [];
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
    this.gamesPlatformList = _.uniqBy(this.games, 'platform');
    this.gamesService.gamesChange.subscribe((games: Game[]) => {
      this.games = games;
      this.gamesPlatformList = _.uniqBy(this.games, 'platform');
    });
  }
}
