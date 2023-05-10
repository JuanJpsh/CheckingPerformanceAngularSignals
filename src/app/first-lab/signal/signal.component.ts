import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
})
export class SignalComponent {

  title = signal<string>("Computed Header signal")

  computedTitle = computed<string>(() => {
    console.log("render Computed Header signal")
    return this.title()
  })

  updateTitle(){
    this.title.update((value) => value += " update")
  }
}
