import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  project = [
    { id: '1', class: 'short', cover: './assets/images/thumbnails/Vishnu-Poster-(Portrait).jpg', video: 'https://player.vimeo.com/video/336648260?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/336648260', dek: 'one' },
    { id: '2', class: 'doc', cover: './assets/images/thumbnails/Asian-Paints.jpg', video: 'https://player.vimeo.com/video/286935698?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/286935698', dek: 'two'  },
    { id: '3', class: 'web', cover: './assets/images/thumbnails/image_promo-2.jpg', video: 'https://player.vimeo.com/video/367668768?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'three'  },
    { id: '4', class: 'short', cover: './assets/images/thumbnails/B_side-Poster-1.jpg', video: 'https://player.vimeo.com/video/285877576?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/285877576', dek: 'four'  },
    { id: '5', class: 'after', cover: './assets/images/thumbnails/Hipcouch.png', video: 'https://player.vimeo.com/video/308579389?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/308579389', dek: 'five'  },
    { id: '6', class: 'short', cover: './assets/images/thumbnails/play-ground.jpg', video: 'https://player.vimeo.com/video/273166543?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/273166543', dek: 'six'  },
    { id: '7', class: 'others', cover: './assets/images/thumbnails/Aakash-Gupta.jpg', video: 'https://player.vimeo.com/video/273164625?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/273164625', dek: 'seven'  },
    { id: '8', class: 'short', cover: './assets/images/thumbnails/Vir-Das.jpg', video: 'https://player.vimeo.com/video/272413779?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/272413779', dek: 'eight'  },
    { id: '9', class: 'web', cover: './assets/images/thumbnails/Zakir-Still.jpg', video: 'https://player.vimeo.com/video/367668768?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'nine'  },
    { id: '10', class: 'web', cover: './assets/images/thumbnails/Limbo-Still.jpg', video: 'https://player.vimeo.com/video/367668768?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'ten'  },
    { id: '11', class: 'web', cover: './assets/images/thumbnails/Snap.jpg', video: 'https://player.vimeo.com/video/367668768?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'eleven'  },
    { id: '12', class: 'web', cover: './assets/images/thumbnails/vlcsnap-2020-08-07-13h09m31s810.png', video: 'https://player.vimeo.com/video/367668768?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'twelve'  },
    { id: '13', class: 'web', cover: './assets/images/thumbnails/WW-2018.jpg', video: 'https://player.vimeo.com/video/367668768?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'thirteen'  }
  ];

  public selectedItem: any;
  public showDialog: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public setSelectedItem(item): void {
    this.selectedItem = item;
    this.showDialog = true;
  }
}
