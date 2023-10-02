import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';
    posts = [
      {
        title: 'Neat tree',
        imageUrl: 'assets/tree.jpeg',
        username: 'nature',
        content: 'I saw this neat tree today'
      },
      {
        title: 'Snowy mountain',
        imageUrl: 'assets/mountain.jpeg',
        username: 'mountainlower',
        content: 'Here is a picture of a snowy mountain'
      },
      {
        title: 'mountain biking',
        imageUrl: 'assets/biking.jpeg',
        username: 'niking1222',
        content: 'I didi some biking today'
      }
    ]
}
