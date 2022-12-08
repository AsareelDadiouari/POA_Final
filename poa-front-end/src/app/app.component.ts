import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'poa-front-end';

  constructor(public router: Router) {
  }

  async redirectTo(eventInfo: { event: MouseEvent, route: string }): Promise<void> {
    await this.router.navigate([eventInfo.route]);
  }
}
