import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.scss'],
})
export class PalabraComponent  implements OnInit {
  @Input() elegido!: string;
  gane = '';
  constructor() { }

  ngOnInit() {}

}
