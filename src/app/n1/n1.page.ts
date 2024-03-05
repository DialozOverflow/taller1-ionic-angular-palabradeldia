import { AfterViewInit, Component, OnInit, viewChild } from '@angular/core';
import { PalabraComponent } from './palabra/palabra.component';

@Component({
  selector: 'app-n1',
  templateUrl: './n1.page.html',
  styleUrls: ['./n1.page.scss'],
})
export class N1Page implements OnInit , AfterViewInit{
  @viewChild(PalabraComponent) winn;
  palabra_elegida = '';
  win = "";

  constructor() { }

  ngOnInit() {
    let numero = Math.floor(Math.random() * 5);
    this.palabra_elegida = ['comida', "pereza", "tolima",'sastre', "comico"][numero];
  }

  ngAfterViewInit(): void {
    this.win = this.winn.gane;
  }

}
