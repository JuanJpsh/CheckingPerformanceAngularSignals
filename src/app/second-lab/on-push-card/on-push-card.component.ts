import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ElementTest } from '../../mocks/element.interface';

@Component({
  selector: 'app-on-push-card',
  templateUrl: './on-push-card.component.html',
  styleUrls: ['./on-push-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() element!: ElementTest;
  @Output() onSelect = new EventEmitter<void>();

  onClick() {
    if (this.element.active) return;
    this.element.active = true;
    this.onSelect.emit();
  }
}
