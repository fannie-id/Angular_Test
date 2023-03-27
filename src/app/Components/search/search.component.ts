import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public keyword: string = '';
  public historyList: string[] = []

  saveSearch() {
    if(this.historyList.indexOf(this.keyword)===-1){

      this.historyList.push(this.keyword)

    }

    this.keyword = ''

  }

  deleteSearch(key:number) {

      this.historyList.splice(key,1)

  }

}
