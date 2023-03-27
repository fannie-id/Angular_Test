import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {


public peopleInfo :any ={
  username:'',
  gender:'1',
  cityList:['munich','berlin','essen'],
  city:'munich',
  hobbyList:[
    {title:'eat',
    check:false},
    {title:'sing',
      check:false},
    {title:'pray',
      check:false}
  ],
  mark:''
}
  handelSubmit(){
    /*
    jquery dom:
     <input type="text" id="username">

     let usernameDom :any = document.getElementById('username')
     console.log(usernameDom.value)

    */
    console.log(this.peopleInfo)
  }

}
