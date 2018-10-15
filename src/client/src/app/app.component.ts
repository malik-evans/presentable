import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title;

    constructor(public http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('api/cats').subscribe({
            next(value) {
                console.log(value);
            }
        });
    }
}
