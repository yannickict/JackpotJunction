import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../user/user-respone.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: UserResponse | null = null;
  isLoggedin = false;
  private subscription: Subscription | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.httpClient
      .get<UserResponse>('http://localhost/blj/Jackpot-JunctionPhP/model/GetUserId.model.php') // Update with your actual API endpoint
      .subscribe({
        next: (data: UserResponse) => {
          if(data.userId == null){
            this.isLoggedin = false;
          }
          else{
            this.isLoggedin = true;
          }
          this.user = data;
        },
        error: (error) => {
          console.error('Error fetching user data:', error);
        },
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription?.unsubscribe();
  }

  logout(): void {
    // Implement logout logic
  }

  makeOrange(event: Event) {
    document.querySelectorAll('.NavLink').forEach((element) => {
      element.classList.remove('marked-red', 'marked-green', 'marked-orange');
    });

    const clickedElement = event.target as HTMLElement;

    if (clickedElement.classList.contains('red')) {
      clickedElement.classList.add('marked-red');
    } else if (clickedElement.classList.contains('green')) {
      clickedElement.classList.add('marked-green');
    } else if (clickedElement.classList.contains('orange')) {
      clickedElement.classList.add('marked-orange');
    }
  }
}
