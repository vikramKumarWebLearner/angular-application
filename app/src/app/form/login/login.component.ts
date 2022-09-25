import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor() { 
   
  }
  ngOnInit(): void {
  }
  

  //console value print
  
  onsubmit(userValue:Form){
    console.log(userValue);

  }
}
