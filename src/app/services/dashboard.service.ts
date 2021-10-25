import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  public get currentDate() : Date {
    let d = new Date()
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }


  constructor() { }

  //Function to get the last 6 days the current day and the next 7 days in an Array
  public getCalendarDateArray() {
    let calendarArray=[];
    
    let now = new Date();
  
    for (let i = -6; i<=7; i++) 
    {
      let d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
      calendarArray.push(d);
    }

    return calendarArray;
  }

}
