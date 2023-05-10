import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementTest } from 'src/app/mocks/element.interface';

@Component({
  selector: 'app-default-card',
  templateUrl: './default-card.component.html',
  styleUrls: ['./default-card.component.css']
})
export class OnPushCardComponent {
  @Input() element!: ElementTest;
  @Output() onSelect = new EventEmitter<void>();

  onClick() {
    if (this.element.active) return;
    this.element.active = true;
    this.onSelect.emit();
  }
}
