import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  data: object;
  isLoading: Observable<boolean> = this.appService.isLoading$;
  constructor(private appService: AppService) {}

}
