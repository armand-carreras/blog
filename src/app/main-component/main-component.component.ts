import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  @Output() enviar = new EventEmitter<Object>();
  comentario = {
    name: '',
    comment: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  handleData(name,comment){
    this.comentario.name = name;
    this.comentario.comment = comment;
    this.enviar.emit(this.comentario);
  }
}
