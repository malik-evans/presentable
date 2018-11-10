import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  data: object;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('api/cats').subscribe(res => {
      this.data = res;
    });
  }

}
