import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-no-encontrado',
  templateUrl: './error-no-encontrado.component.html',
  styleUrls: ['./error-no-encontrado.component.css']
})
export class ErrorNoEncontradoComponent implements OnInit {

  constructor(private destino: Location) {}

  ngOnInit(): void {}

  public regresar():void{
    this.destino.back();
  }

}
