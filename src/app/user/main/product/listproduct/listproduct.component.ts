import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  grid = false;
  constructor() { }

  ngOnInit(): void {
  }
  changegrid(){
    this.grid = !this.grid;
    console.log(this.grid);
  }
}
