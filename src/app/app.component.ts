import { Component, OnInit } from '@angular/core'
import { DataService } from './services/data.service';
import {Art} from './models/art';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit { 
  items!: Art;

  index: number = 0;

  randompage: number = 1;

  endpic: boolean = false;

  randomPage(): number {
    return this.randompage = Math.floor(Math.random() *  (5978 - 1) + 1);
  }

  nextPic(): number {    
    return this.index ++;     
  }

  prevPic(): number {
    if(this.index <= 0) {
      return this.index = 0; 
    }
    return this.index --;     
  }

  lookSomeoneElse(): void {
    this.index = 0;
    this.randomPage();
    this.getPic();
  }

  getPic():void {
    this.dataService.get('https://api.artic.edu/api/v1/artworks?page='+this.randomPage()+'&fields=id%2Ctitle%2Cimage_id%2Cdate_display%2Cartist_display&limit=20&offset=21').subscribe({next: (data:any)=> this.items = data});
  }

  constructor(private dataService: DataService) {} 

  ngOnInit() {
    this.getPic();
  }

}
 