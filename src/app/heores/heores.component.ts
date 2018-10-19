import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeoresComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'kimyeongseok'
  // }

  heroes: Hero[];

  protected selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {

      this.getHeroes();
  }
  onSelect(hero: Hero): void {

    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes, error => console.log(error));
  }
}
