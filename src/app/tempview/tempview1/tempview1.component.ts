import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tempview1',
  templateUrl: './tempview1.component.html',
  styleUrls: ['./tempview1.component.css']
})
export class Tempview1Component implements OnInit {

  counter: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  increment(n : number): void{
    this.counter += n;
  }

  decrement(n: number): void{
    this.counter -= n;
  }

}
