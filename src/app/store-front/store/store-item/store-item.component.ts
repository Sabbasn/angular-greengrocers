import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent implements OnInit {
  @Input('item') item: any;
  @Output('add') addEvent = new EventEmitter<any>();
  icon: string = '';

  ngOnInit(): void {
    this.icon = `assets/icons/${this.item.id}.svg`;
  }

  onAddClick() {
    this.addEvent.emit(this.item);
  }
}
