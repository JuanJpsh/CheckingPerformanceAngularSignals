import { Component, signal } from '@angular/core';
import { mockElements } from '../mocks/elements';
import { ElementTest } from '../mocks/element.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-third-lab',
  templateUrl: './third-lab.component.html',
  styleUrls: ['./third-lab.component.css']
})
export class ThirdLabComponent {
  elementList: ElementTest[] = []
  elementList$ = new BehaviorSubject<ElementTest[]>([])
  elementListSignal = signal<ElementTest[]>([])

  restart(){
    this.elementList = []
    this.elementList$.next([])
    this.elementListSignal.set([])
  }

  elementListTest(){
    for (let i = 0; i < 10; i++) {
      this.elementList = this.elementList.concat(mockElements)
    }
  }

  elementList$Test(){
    for (let i = 0; i < 10; i++) {
      this.elementList$.next( [...this.elementList$.getValue(), ...mockElements])
    }
  }

  elementListSignalTest(){
    for (let i = 0; i < 10; i++) {
      this.elementListSignal.update((val) => [...val, ...mockElements]) 
    }
  }
}
