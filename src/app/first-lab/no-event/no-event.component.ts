import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-event',
  templateUrl: './no-event.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoEventComponent {
  test(){
    console.log("From no-event Component")
    return "From no-event Component"
  }
}
