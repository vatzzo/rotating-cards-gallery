import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities = [
    { 
      title: 'Kraków', 
      subtitle: 'City of the Kings',
      imgUrl: 'assets/images/krakow.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tortor quis felis egestas viverra. Sed dictum lectus et urna aliquet luctus. Nunc commodo nec sapien eu finibus. Aliquam facilisis finibus est ut hendrerit. Vivamus sollicitudin rhoncus massa, id lobortis est. Curabitur mollis urna vitae ultrices molestie.'
    },
    { 
      title: 'Warszawa', 
      subtitle: 'The Capital of Poland', 
      imgUrl: 'assets/images/warszawa.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tortor quis felis egestas viverra. Sed dictum lectus et urna aliquet luctus. Nunc commodo nec sapien eu finibus. Aliquam facilisis finibus est ut hendrerit. Vivamus sollicitudin rhoncus massa, id lobortis est. Curabitur mollis urna vitae ultrices molestie.'
    },
    { 
      title: 'Gdańsk', 
      subtitle: 'Beautiful city with maritime climate', 
      imgUrl: 'assets/images/gdansk.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tortor quis felis egestas viverra. Sed dictum lectus et urna aliquet luctus. Nunc commodo nec sapien eu finibus. Aliquam facilisis finibus est ut hendrerit. Vivamus sollicitudin rhoncus massa, id lobortis est. Curabitur mollis urna vitae ultrices molestie.'
    },
  ]
}
