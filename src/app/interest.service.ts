import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor() { }
  Total: number;
  Amount: number = 5000;
  annualCompound: number = 1;
  calculateinterest(years: number, interestRate: number, Amount: number): number {
  for (var counter: number = 1; counter < years + 1; counter++) {
  this.Total = this.Amount * Math.pow((1 + interestRate / this.annualCompound),
  (this.annualCompound * counter));
  }
  return this.Total;
  }
}  
