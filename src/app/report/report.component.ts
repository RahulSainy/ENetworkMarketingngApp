import { Component, OnInit } from '@angular/core';
interface Problem {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  problems: Problem[] = [
    {value: 'customer-0', viewValue: 'Customer'},
    {value: 'Bussiness owner-1', viewValue: 'BusinessOwner'},
    {value: 'application-2', viewValue: 'application'},
    {value: 'payment-3', viewValue: 'payments'},
    {value: 'other-4', viewValue: 'other'}


  ];
  constructor() { }

  ngOnInit(): void {
  }

}
