import { Component, signal } from '@angular/core';
import { ElementTest } from '../mocks/element.interface';
import { mockElements } from '../mocks/elements';

@Component({
  selector: 'app-second-lab',
  templateUrl: './second-lab.component.html',
  styleUrls: ['./second-lab.component.css'],
})
export class SecondLabComponent {
  defaultlist!: ElementTest[];
  selectedIndexDefaultList!: number;

  onpushlist!: ElementTest[];
  selectedIndexOnPushList!: number;

  signallist = signal<ElementTest[]>([]);
  selectedIndexSignalList!: number;

  constructor() {
    this.defaultlist = mockElements.map(val => {return {...val}});
    this.selectedIndexDefaultList = 2;
    this.defaultlist[this.selectedIndexDefaultList].active = true;

    this.onpushlist = mockElements.map(val => {return {...val}});
    this.selectedIndexOnPushList = 2;
    this.onpushlist[this.selectedIndexOnPushList].active = true;

    this.signallist.set(mockElements.map(val => {return {...val}}))
    this.selectedIndexSignalList = 2;
    this.signallist.update((elements) => {
      elements[this.selectedIndexSignalList].active = true;
      return elements
    })
  }

  changeSelectedDefaultList(index: number) {
    this.defaultlist[this.selectedIndexDefaultList].active = false;
    this.selectedIndexDefaultList = index;
  } 

  changeSelectedOnPushList(index: number) {
    const temporalElement = this.onpushlist[this.selectedIndexOnPushList]
    this.onpushlist[this.selectedIndexOnPushList] = {...temporalElement, active: false};
    //this.onpushlist[this.selectedIndexOnPushList].active = false;
    this.selectedIndexOnPushList = index;
  } 

  changeSelectedSignalListDefault(index: number) {
    this.signallist.update((elements) => {
      elements[this.selectedIndexSignalList].active = false;
      this.selectedIndexSignalList = index;
      return elements
    })
  } 

  changeSelectedSignalListOnPush(index: number) {
    this.signallist.update((elements) => {
      const temporalElement = elements[this.selectedIndexSignalList]
      elements[this.selectedIndexSignalList] = {...temporalElement, active: false};
      this.selectedIndexSignalList = index;
      return elements
    })
  } 
}
