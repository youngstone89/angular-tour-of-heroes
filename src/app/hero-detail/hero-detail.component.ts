import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit
} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnDestroy, DoCheck, OnInit,OnChanges,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {

  constructor() {
    console.log('constructure');
  }


  @Input() hero: Hero;

  ngOnChanges(){
    console.log("change");
  }
  ngDoCheck(){
    console.log('docheck');
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");

  }

  debuggConsole():void{

    console.log("debugging");
  }

}
