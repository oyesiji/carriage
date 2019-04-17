import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../brefft/brefft.component';

@Component({
  selector: 'app-london',
  templateUrl: './london.component.html',
  styleUrls: ['./london.component.scss']
})
export class LondonComponent implements OnInit {
  sampleArray : Array<PeriodicElement> = [
    {position: 1, name: 'HydrogenX', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Neonx', weight: 20.1797, symbol: 'Ne'},
    {position: 12, name: 'Neonss', weight: 20.1797, symbol: 'Ne'},
    {position: 13, name: 'NeonA', weight: 20.1797, symbol: 'Ne'},
    {position: 14, name: 'NeonB', weight: 20.1797, symbol: 'Ne'},
    {position: 15, name: 'NeonC', weight: 20.1797, symbol: 'Ne'},
    {position: 16, name: 'Neonss', weight: 20.1797, symbol: 'Ne'},
    {position: 17, name: 'NeonA', weight: 20.1797, symbol: 'Ne'},
    {position: 18, name: 'NeonB', weight: 20.1797, symbol: 'Ne'},
    {position: 19, name: 'NeonC', weight: 20.1797, symbol: 'Ne'},
    {position: 20, name: 'Neon3', weight: 20.1797, symbol: 'Ne3'},
    {position: 21, name: 'Neonx3', weight: 20.1797, symbol: 'Ner'},
    {position: 22, name: 'Neonss3', weight: 20.1797, symbol: 'Net'},
    {position: 23, name: 'NeonA3', weight: 20.1797, symbol: 'Neu'},
    {position: 24, name: 'NeonB3', weight: 20.1797, symbol: 'Nei'},
    {position: 25, name: 'NeonC3', weight: 20.1797, symbol: 'Noe'},
    {position: 26, name: 'Neons3s', weight: 20.1797, symbol: 'oNe'},
    {position: 27, name: 'NeonA3', weight: 20.1797, symbol: 'Npe'},
    {position: 28, name: 'NeonB3', weight: 20.1797, symbol: 'Npe'},
    {position: 29, name: 'NeonC3', weight: 20.1797, symbol: 'Npe'},
  ];
  length = 100;
  pageSize = 5;
  pageIndex = 1;
  startRecord=0;
  endRecord=5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor() { }

  ngOnInit() {
    const test = localStorage.getItem('pagination');
    if (test){
     // const event = JSON.parse(test);
    //  this.pageSize = event.pageSize;
    //  this.pageIndex = event.pageIndex;
    }
  }

  onPaginateChange(event){
    this.pageSize = event.pageSize;
    const test = JSON.stringify(event);
    console.log(test);
    localStorage.setItem('pagination',test);
    this.pageIndex = event.pageIndex;
    this.startRecord = (this.pageIndex-1) * this.pageSize;
    console.log('###pageIndex'+this.pageIndex);
    console.log('###startRecord'+this.startRecord);
    console.log('###length'+this.sampleArray.length);
  }

}
