import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-item-detail-metadata',
  standalone: true,
  imports: [],
  templateUrl: './item-detail-metadata.component.html',
  styleUrl: './item-detail-metadata.component.css',
})
export class ItemDetailMetadataComponent {
  @Input({ required: true }) item!: string;
  @Input({ transform: booleanAttribute }) itemAvailability!: boolean;
}
