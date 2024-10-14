import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss',
})
export class BtnComponent {
  @Input() text: string = 'Button';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() theme: 'validate' | 'cancel' | 'alert' | 'loading' | 'disabled' =
    'validate';
  @Output() onBtnClick = new EventEmitter<void>();

  handleClick() {
    if (this.theme === 'disabled' || this.theme === 'loading') {
      return;
    }
    this.onBtnClick.emit();
  }
}
