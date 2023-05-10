import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {

  title = "Title With OnPush Strategy"

  updateTitle(){
    this.title += " update"
  }
}
