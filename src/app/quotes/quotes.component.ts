import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewQuotes().subscribe(
      (data)=>{
        this.quotesData=data
      }
    )
  }

  quotesData:any={}

  ngOnInit(): void {
  }

}
