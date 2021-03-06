import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	styleUrls: ['heroes.component.css'],
	templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}


	ngOnInit(): void {
		this.getHeroes();
	}

	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

}
