import {Component} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  title = "News Component title ts"

  public message: any

  public student: any = 'student character'

  public content = "<h3>html content h3</h3>"

  public arr: string[] = ['1111', '2222', '3333']
  public list: any[] = ['111s1', 22252, '333e3']

  public userList: any[] = [
    {
      username: 'bob',
      age: 20
    },
    {
      username: 'amy',
      age: 24
    },
    {
      username: 'alex',
      age: 29
    }
  ]

  public cars: any[] = [

    {
      cate: "bmw",
      productList: [
        {title: 'bmw1', price: '30k'},
        {title: 'bmw2', price: '30k'},
        {title: 'bmw3', price: '30k'}
      ]
    },
    {
      cate: "audi",
      productList: [
        {title: 'audiQ1', price: '30k'},
        {title: 'audiQ2', price: '30k'},
        {title: 'audiQ3', price: '30k'}
      ]
    }

  ]

  public picUrl = 'https://m.media-amazon.com/images/I/71CP6B3SF-L._AC_SX679_.jpg'


  public flag: boolean = true

  public oderStatus: number = 2

  public attr: string = "red"

  public today: any = new Date();

  constructor() {

    this.message = 'change this type'

  }
  doSomething(){

    alert('i did something')
  }

  getData(){

    alert(this.message)
  }

  setData(){

    this.message = "changed Message"
  }


}
