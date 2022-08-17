import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  valform: any;
  ngOnInit() {
    this.valform = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[A-Za-z.^-_!%@*$&0-9]{8,16}'),
      ]),
      Phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
    });
  }
}
