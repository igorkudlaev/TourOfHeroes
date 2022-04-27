import { Component, Input, OnInit } from '@angular/core';
import Hero from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  onRename(name: string) {
    if(!this.hero) {
      return;
    }
    this.hero.name = name;
  }
  update() {
    if(!this.hero) {
      return;
    }
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
