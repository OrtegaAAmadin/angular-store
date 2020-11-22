import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    /*
    this.emailField.valueChanges.subscribe(value => {
      console.log(value);
    });*/
  }

  sendEmail(){
    if (this.emailField.valid){
      console.log(this.emailField.value)
    }
  }
}
