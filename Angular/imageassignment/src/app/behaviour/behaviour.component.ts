import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BehaviourService } from '../behaviour.service';

@Component({
  selector: 'app-behaviour',
  templateUrl: './behaviour.component.html',
  styleUrls: ['./behaviour.component.css']
})
export class BehaviourComponent implements OnInit {

  title = 'RxJS Behaviour Subject Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  observer1 : any[]= [];
  observer2 :any[] = [];
  observer3 :any[] = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;

  constructor(private appservic: BehaviourService) {

  }

  subscribe1() {
    this.appservic.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.appservic.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.appservic.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }

}
