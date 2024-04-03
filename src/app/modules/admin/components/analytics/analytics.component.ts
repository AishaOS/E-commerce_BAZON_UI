import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {

  data:any;


  constructor(private adminService: AdminService,){

  }

  displayedColumns: string[] = ['metric', 'currentMonth', 'previousMonth'];
  dataSource = new MatTableDataSource([
    { metric: 'Orders', currentMonth: 1, previousMonth: 0 },
    { metric: 'Earnings', currentMonth: 300, previousMonth: 0 }
  ]);

  ngOnInit(): void {
    this.adminService.getAnalytics().subscribe(res =>{
      console.log(res);
      this.data = res;
    })
  }

}
