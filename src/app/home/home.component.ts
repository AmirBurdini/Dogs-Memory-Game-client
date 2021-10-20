import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  startGame(): void {
    console.log("!");
  }

  getName(name : string) : void {

    console.log(name + '!');
  }

  ngOnChanges() : void {
    
  }

  ngOnInit(): void {
    let data : number = 2
  }
}