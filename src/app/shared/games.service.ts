import { EventEmitter } from '@angular/core';
import { Game } from './game.model';

export class GamesService {
  gamesChange = new EventEmitter<Game[]>();
  gameDetailsChange = new EventEmitter<Game>();
  gameDetails!: Game;
  games: Game[] = [
    new Game('Super Mario', 'https://mynintendonews.com/wp-content/uploads/2012/08/super_mario_galaxy.jpg', 'In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser.', 'NES'),
    new Game('Super Mario', 'https://mynintendonews.com/wp-content/uploads/2012/08/super_mario_galaxy.jpg', 'In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser.', 'NES'),
    new Game('Gunstar Heroes', 'https://e.snmc.io/lk/f/x/89b0fbf1039fd85914a0c3d7da4d9adc/7329985', 'Gunstar Heroes is a run and gun game played from a side-scrolling perspective similar to Contra. The game can be played in single-player, or cooperatively with a partner.', 'Sega Genesis'),
    new Game('Sonic the Hedgehog 2', 'https://assets.mycast.io/posters/sonic-the-hedgehog-2-2022-fan-casting-poster-98988-medium.jpg?1620057625', 'It follows Sonic as he attempts to stop Doctor Robotnik from stealing the Chaos Emeralds to power his space station, the Death Egg.', 'Sega Genesis'),
    new Game('The Legend of Zelda: A Link to the Past', 'https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png', 'The player assumes the role of Link as he journeys to save Hyrule, defeat the demon king Ganon, and rescue the descendants of the Seven Sages.', 'Super Nintendo'),
    new Game('Donkey Kong Country', 'https://img.discogs.com/LIzbcySj4xq3RmpnLXsmyc97E-Y=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-16567179-1608531625-1405.jpeg.jpg', 'Donkey Kong Country is a side-scrolling platform game in which the player must complete 40 levels to recover the Kongs\' banana hoard, which has been stolen by the crocodilian Kremlings. ', 'Super Nintendo'),
  ];

  getGames() {
    return this.games.slice();
  }

  addGame(game: Game) {
    this.games.push(game);
  }

  onGamesChange() {
    this.gamesChange.emit(this.games);
  }

  getGamesByPlatform(platform: string) {
    const gamesByPlatform = this.games.filter((game: Game) => {
      return game.platform === platform;
    });
    return gamesByPlatform;
  }

  changeGameDetails(game: Game) {
    this.gameDetails = game;
    this.gameDetailsChange.emit(game);
  }

  getGameDetails() {
    return this.gameDetails;
  }

}
