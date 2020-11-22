import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  items = ['Amadin', 'Belinda', 'Celinda', 'Betty'];
  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void{
    this.items.push('nuevo item');
  }

  deleteItem(index: number): void{
    this.items.splice(index, 1);
  }

}
