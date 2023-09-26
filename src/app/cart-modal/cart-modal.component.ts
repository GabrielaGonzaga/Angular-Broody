import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent {
  @Input() cart: any[] = [];
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
}
