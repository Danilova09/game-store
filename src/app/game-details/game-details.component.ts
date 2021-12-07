import { Component, OnInit } from '@angular/core';
import { GamesService } from '../shared/games.service';
import { Game } from '../shared/game.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  gameDetails!: Game;

  constructor(
    private gamesService: GamesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.gameDetails = this.gamesService.getGameDetails();
    this.gamesService.gameDetailsChange.subscribe((game: Game) => {
      this.gameDetails = game;
    })
  }

  goBack() {
    this.location.back();
  }
}
