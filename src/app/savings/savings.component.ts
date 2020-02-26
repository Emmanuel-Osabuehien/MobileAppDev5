import { Component, OnInit } from '@angular/core';
import{InterestService} from '../interest.service'

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private service:InterestService) { }

  ngOnInit(): void {
  }

  Total: number;
  Amount: number = 5000;
  interestRate: number = 0.01;
  annualCompound: number = 1;
  years: number;
  calculateinterest(): void {this.Total= this.service.calculateinterest(
  this.years,this.interestRate, this.Amount);
  }
}  
