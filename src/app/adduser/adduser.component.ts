import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user: any;
 
  constructor() { }

  ngOnInit() {
    console.info(this.user);
    this.user = {email:'',first_name:'',last_name:''}
  }

  save(userinfo){
    console.log(userinfo);
  }

}
