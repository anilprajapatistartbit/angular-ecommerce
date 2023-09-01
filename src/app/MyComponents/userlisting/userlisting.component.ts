import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/User';
import * as alertifyjs from 'alertifyjs'

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  serarchValue:string='';
  Item:any;
  user:User[]=[];
  currentPage=1;
  constructor(private authservice:AuthService){
this.getuser();
  }
  getuser(){
    this.authservice.getalluser().subscribe(result=>{
      console.log(result);
      
       this.user=result as User[];
    
    });
  }
  Edit(id:number){
    console.log(id);
    
  }
  delete(id:number){
console.log(id);
this.authservice.deleteuser(id).subscribe(result=>{
  alertifyjs.set('notifier','position', 'top-right');
  alertifyjs.success(result);
  this.getuser();
})

  }
}
