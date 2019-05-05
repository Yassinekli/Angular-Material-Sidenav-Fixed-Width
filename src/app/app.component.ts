import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activatedRoute = "/";
  isClosed : Boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log(this.router.url);
        this.activatedRoute = this.router.url;
      });
  }

  sidenavToggle(){
    this.isClosed = !this.isClosed;
  }

}
