import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {

  comments = [
    {comment:'Tempor aute mollit eiusmod nisi sint nulla aliqua.', name:'whateverName'},
    {comment:'Velit reprehenderit mollit voluptate fugiat amet dolor.', name:'whateverName'},
    {comment:'Ullamco quis voluptate consequat proident mollit fugiat eu incididunt reprehenderit esse dolore consequat labore.', name:'whateverName'},
    {comment:'Laboris proident culpa ea nulla minim adipisicing.', name:'whateverName'},
    {comment:'Dolor Lorem dolor culpa do cillum. Duis esse irure incididunt duis enim. Commodo ex esse irure elit duis.', name:'whateverName'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
