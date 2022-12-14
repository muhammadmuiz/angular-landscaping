import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  freeEstimate: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.freeEstimate = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      text: new FormControl(''),
     
    });
  }

  onSubmit() {
    console.log(this.freeEstimate.value);
  }
}
