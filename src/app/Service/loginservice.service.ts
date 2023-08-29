import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService implements OnInit {
Visible:boolean=true;
  constructor(private route:Router) {
  }
  ngOnInit(): void {
    this.Visible=true;
  }
  
  show(){
    
    this.Visible=true;
  }
  hide(){
   
    this.Visible=false;
  }
  toggle(){
    this.Visible=!this.Visible;
  }
}
