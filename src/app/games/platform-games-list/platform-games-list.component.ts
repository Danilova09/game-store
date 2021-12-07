import { Component, OnInit } from '@angular/core';
import { Game } from '../../shared/game.model';
import { GamesService } from '../../shared/games.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-platform-games-list',
  templateUrl: './platform-games-list.component.html',
  styleUrls: ['./platform-games-list.component.css']
})
export class PlatformGamesListComponent implements OnInit {
  gamesByPlatForm!: Game[];
  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const platformName = this.route.snapshot.params['platform'];
      this.gamesByPlatForm = this.gamesService.getGamesByPlatform(platformName);
    })
  }

  onNavigate(game: Game) {
    void this.router.navigate(['game-details']);
    this.gamesService.changeGameDetails(game);
  }
}
