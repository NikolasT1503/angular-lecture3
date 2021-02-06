import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements 
  OnChanges, 
  OnInit, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
 {

  logs: string[] = [];
  name: string;
  showChild: boolean = false;

  constructor() {
    this.name = "Виктория";
    setTimeout(()=>{this.showChildMethod()}, 5000);
    setTimeout(()=>{this.updateName()}, 5000);
    setTimeout(()=>{this.hideChild()}, 10000);
  }
  
  ngAfterViewChecked(): void {
    console.log('app-mod1', 'ngAfterViewChecked', this.logs);
  }
  ngAfterViewInit(): void {
    console.log('app-mod1', 'ngAfterViewInit', this.logs);
  }
  ngAfterContentChecked(): void {
    console.log('app-mod1', 'nngAfterContentChecked', this.logs);
  }
  ngAfterContentInit(): void {
    console.log('app-mod1', 'ngAfterContentInit', this.logs);
  }
  ngDoCheck(): void {
    console.log('app-mod1', 'ngDoCheck', this.logs);
  }
  ngOnInit(): void {
    console.log('app-mod1', 'ngOnInit', this.logs);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('app-mod1', changes);
  }

  onLog(data: string): void{
    this.logs.push(data);

  }

  updateName(): void{
    this.name = 'Николай';
  }

  hideChild(): void{
    this.showChild = false;
    this.onLog("onDestroy");
  }

  showChildMethod(): void{
    this.showChild = true;
  }


}
