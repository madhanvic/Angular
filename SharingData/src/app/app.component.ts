import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AliasingComponent } from './aliasing/aliasing.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InTheMetadataComponent } from './in-the-metadata/in-the-metadata.component';
import { ItemDetailMetadataComponent } from './item-detail-metadata/item-detail-metadata.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ItemDetailComponent,
    AliasingComponent,
    InputOutputComponent,
    InTheMetadataComponent,
    ItemDetailMetadataComponent,
    ItemOutputComponent,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentItem = 'Television';
  lastChanceItem = 'Beanbag';
  items = ['item1', 'item2', 'item3', 'item4'];
  wishlist = ['Drone', 'Computer'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  crossOffItem(item: string) {
    console.warn(`Parent says: crossing off ${item}`);
  }

  buyClearnceItem(item: string) {
    console.warn(`Parent says: buying ${item}`);
  }

  saveForLater(item: string) {
    console.warn(`Parent says:saving ${item} for later.`);
  }

  addToWishList(wish: string) {
    console.warn(`Parent says: adding ${this.currentItem} to your wishlist.`);
    this.wishlist.push(wish);
    console.warn(this.wishlist);
  }
}
