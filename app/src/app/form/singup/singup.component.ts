import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
onselected() {
throw new Error('Method not implemented.');
}
onSubmit(_t7: NgForm) {
throw new Error('Method not implemented.');
}
  
   
  constructor() { }

  ngOnInit(): void {
  }

  
  onsubmit(ngForm:NgForm){
    console.log("form submit",ngForm.value);

  }
  
}
