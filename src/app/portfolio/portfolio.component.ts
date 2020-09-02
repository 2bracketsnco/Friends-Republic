import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  project = [
    { 
      lead: 'HIPCOUCH', 
      byline: 'Commercial', 
      class: 'short', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044058/Friends%27%20Republic/Assets/fr_Hipcouch.png', 
      video: 'https://player.vimeo.com/video/384870257?byline=0&title=0&portrait=0&control=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/336648260', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'NILAYA', 
      byline: 'Commercial', 
      class: 'doc', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044050/Friends%27%20Republic/Assets/fr_Asian-Paints.jpg', 
      video: 'https://www.youtube.com/embed/Bx9EeWRNFw8?controls=0&modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/286935698', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'BROKEN DREAMS', 
      byline: 'Music Video', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044051/Friends%27%20Republic/Assets/fr_broken-dreams.jpg', 
      video: 'https://player.vimeo.com/video/400296233?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'ZAKIR KHAN', 
      byline: 'Tour Recap', 
      class: 'short', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044053/Friends%27%20Republic/Assets/fr_Zakir-Still.jpg', 
      video: 'https://player.vimeo.com/video/349332857?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/285877576', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'B Side: EP/01', 
      byline: 'Music Documentary Series', 
      class: 'after', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044050/Friends%27%20Republic/Assets/fr_B_side-Poster-1.jpg', 
      video: 'https://www.youtube.com/embed/PAY4_tBq7rw?controls=0&modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/308579389', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'VISHNU', 
      byline: 'Documentary', 
      class: 'short', 
      cover: './assets/images/thumbnails/Vishnu-Poster-(Portrait).jpg', 
      video: 'https://www.youtube.com/embed/V1kJVCuSSSA?controls=0&modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/273166543', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'PLAYGROUND', 
      byline: 'Music Video', 
      class: 'others', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044054/Friends%27%20Republic/Assets/fr_play-ground.jpg', 
      video: 'https://player.vimeo.com/video/343813921?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/273164625', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'VIR DAS', 
      byline: 'Tour Recap', 
      class: 'short', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044054/Friends%27%20Republic/Assets/fr_Vir-Das.jpg', 
      video: 'https://player.vimeo.com/video/285877576?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/272413779', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'LIMBO', 
      byline: 'Short', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044051/Friends%27%20Republic/Assets/fr_Limbo-Still.jpg', 
      video: 'https://www.youtube.com/embed/aYE_fNdvPD0?controls=0&modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'SNAP', 
      byline: 'Horror Short', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044057/Friends%27%20Republic/Assets/fr_Snap.jpg', 
      video: 'https://www.youtube.com/embed/g3Qz7T51jR0?controls=0&modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'AAKASH GUPTA', 
      byline: 'Tour Recap', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044050/Friends%27%20Republic/Assets/fr_Aakash-Gupta.jpg', 
      video: 'https://www.youtube.com/embed/nN2XSigfJd0?controls=0&modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'UNDER THE SUN', 
      byline: 'B Side Live Session', 
      class: 'web', 
      cover: './assets/images/thumbnails/chinmayedit.jpg', 
      video: 'https://www.youtube.com/embed/vBgkuYXLTPo?controls=0&modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'WEEKEND WINDOW', 
      byline: 'Aftermovie', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044053/Friends%27%20Republic/Assets/fr_WW-2018.jpg', 
      video: 'https://player.vimeo.com/video/308579389?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    },
    { 
      lead: 'LULLA CLASSES', 
      byline: 'Commercial', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044053/Friends%27%20Republic/Assets/fr_lula.png', 
      video: 'https://player.vimeo.com/video/273164625?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.` 
    }
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
