import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedulForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.schedulForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      text: new FormControl(''),
     
    });
  }

  onSubmit() {
    console.log(this.schedulForm.value);
  }
}
