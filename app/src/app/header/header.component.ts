import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected =new EventEmitter<string>();
  
    
  constructor() { 
    setTimeout(() => {
      
      console.log(this.featureSelected);
    }, 5000);
  }
    
  

  ngOnInit(): void {
    
  }
  onSelected(link:string){
    this.featureSelected.emit(link);
    console.log(this.featureSelected)
  }
  
}
