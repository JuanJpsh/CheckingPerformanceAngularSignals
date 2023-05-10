import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent {

  title = "default Component"

  updateTitle(){
    this.title += " update"
  }
}
