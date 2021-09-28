import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from "./token";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  itemWidth!: number;
  config = 4;

  listImage = [
    'https://cdn.tgdd.vn/Files/2017/12/15/1050674/img_5338_800x450_800x450.jpg',
    'https://cdn.tgdd.vn/Files/2017/12/15/1050674/img_5338_800x450_800x450.jpg',
    'https://cdn.tgdd.vn/Files/2017/12/15/1050674/img_5338_800x450_800x450.jpg',
    'https://cdn.tgdd.vn/Files/2017/12/15/1050674/img_5338_800x450_800x450.jpg'

  ];

  constructor(@Inject(GalleryConfig)
              @Optional()
                config: number) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }

}
