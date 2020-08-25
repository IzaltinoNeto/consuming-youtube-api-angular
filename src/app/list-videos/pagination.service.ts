import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private notify = new BehaviorSubject<any>(null);
  /**
   * Observable string streams
   */
  notifyObservable$ = this.notify.asObservable();
  constructor() { }
  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }
}
