import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  project = [
    { lead: 'HIPCOUCH', byline: 'Commercial', class: 'short', cover: './assets/images/thumbnails/Hipcouch.png', video: 'https://player.vimeo.com/video/384870257?byline=0&title=0&portrait=0&control=0', reference: 'https://vimeo.com/channels/friendsrepublic/336648260', dek: 'one' },
    { lead: 'NILAYA', byline: 'Commercial', class: 'doc', cover: './assets/images/thumbnails/Asian-Paints.jpg', video: 'https://www.youtube.com/embed/Bx9EeWRNFw8?controls=0&modestbranding=1', reference: 'https://vimeo.com/channels/friendsrepublic/286935698', dek: 'two'  },
    { lead: 'BROKEN DREAMS', byline: 'Music Video', class: 'web', cover: './assets/images/thumbnails/image_promo-2.jpg', video: 'https://player.vimeo.com/video/400296233?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'three'  },
    { lead: 'ZAKIR KHAN', byline: 'Tour Recap', class: 'short', cover: './assets/images/thumbnails/Zakir-Still.jpg', video: 'https://player.vimeo.com/video/349332857?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/285877576', dek: 'four'  },
    { lead: 'B Side: EP/01', byline: 'Music Documentary Series', class: 'after', cover: './assets/images/thumbnails/B_side-Poster-1.jpg', video: 'https://www.youtube.com/embed/PAY4_tBq7rw?controls=0&modestbranding=1', reference: 'https://vimeo.com/channels/friendsrepublic/308579389', dek: 'five'  },
    { lead: 'VISHNU', byline: 'Documentary', class: 'short', cover: './assets/images/thumbnails/Vishnu-Poster-(Portrait).jpg', video: 'https://www.youtube.com/embed/V1kJVCuSSSA?controls=0&modestbranding=1', reference: 'https://vimeo.com/channels/friendsrepublic/273166543', dek: 'six'  },
    { lead: 'PLAYGROUND', byline: 'Music Video', class: 'others', cover: './assets/images/thumbnails/play-ground.jpg', video: 'https://player.vimeo.com/video/343813921?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/273164625', dek: 'seven'  },
    { lead: 'VIR DAS', byline: 'Tour Recap', class: 'short', cover: './assets/images/thumbnails/Vir-Das.jpg', video: 'https://player.vimeo.com/video/285877576?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/272413779', dek: 'eight'  },
    { lead: 'LIMBO', byline: 'Short', class: 'web', cover: './assets/images/thumbnails/Limbo-Still.jpg', video: 'https://www.youtube.com/embed/aYE_fNdvPD0?controls=0&modestbranding=1', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'nine'  },
    { lead: 'SNAP', byline: 'Horror Short', class: 'web', cover: './assets/images/thumbnails/Snap.jpg', video: 'https://www.youtube.com/embed/g3Qz7T51jR0?controls=0&modestbranding=1', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'ten'  },
    { lead: 'AAKASH GUPTA', byline: 'Tour Recap', class: 'web', cover: './assets/images/thumbnails/Aakash-Gupta.jpg', video: 'https://www.youtube.com/embed/nN2XSigfJd0?controls=0&modestbranding=1', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'eleven'  },
    { lead: 'UNDER THE SUN', byline: 'B Side Live Session', class: 'web', cover: './assets/images/thumbnails/chinmayedit.jpg', video: 'https://www.youtube.com/embed/vBgkuYXLTPo?controls=0&modestbranding=1', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'twelve'  },
    { lead: 'WEEKEND WINDOW', byline: 'Aftermovie', class: 'web', cover: './assets/images/thumbnails/WW-2018.jpg', video: 'https://player.vimeo.com/video/308579389?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'thirteen'  },
    { lead: 'LULLA CLASSES', byline: 'Commercial', class: 'web', cover: './assets/images/thumbnails/vlcsnap-2020-08-07-13h09m31s810.png', video: 'https://player.vimeo.com/video/273164625?byline=0&title=0&portrait=0', reference: 'https://vimeo.com/channels/friendsrepublic/367668768', dek: 'fourteen'  }
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
