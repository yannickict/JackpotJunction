import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  makeOrange(event: Event) {
    document.querySelectorAll('.NavLink').forEach((element) => {
      element.classList.remove('marked-red', 'marked-blue', 'marked-orange');
    });
    const clickedElement = event.target as HTMLElement;
    if(clickedElement.classList.contains("red")){
      clickedElement.classList.add('marked-red');
    }
    else if(clickedElement.classList.contains("blue")){
      clickedElement.classList.add('marked-blue');
    }
    else if(clickedElement.classList.contains("orange")){
      clickedElement.classList.add('marked-orange');
    }
  }
}
