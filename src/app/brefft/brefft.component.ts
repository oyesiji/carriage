import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
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
];

@Component({
  selector: 'app-brefft',
  templateUrl: './brefft.component.html',
  styleUrls: ['./brefft.component.scss']
})


export class BrefftComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  results:Array<PeriodicElement>;
 testing:Array<PeriodicElement>= [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
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
  ];
  

  constructor(private messageService: MessageServiceService) { }

  ngOnInit() {
    this.results = this.testing.filter(
      book => book.name.startsWith('N'));
      console.log('#################'+this.results.length);
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
}

clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
}

}
