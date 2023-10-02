import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards-app';

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
	  content: 'I did some biking today'
	}
  ]
}
