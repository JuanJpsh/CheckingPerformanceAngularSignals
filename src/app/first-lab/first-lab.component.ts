import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first-lab',
  templateUrl: './first-lab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstLabComponent {
  firstlab = ""
}
