import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  project = [
    { class: "short", cover: "./assets/images/thumbnails/Vishnu-Poster-(Portrait).jpg", video: "https://player.vimeo.com/video/336648260", reference: "https://vimeo.com/channels/friendsrepublic/336648260" },
    { class: "doc", cover: "./assets/images/thumbnails/Asian-Paints.jpg", video: "https://player.vimeo.com/video/286935698", reference: "https://vimeo.com/channels/friendsrepublic/286935698" },
    { class: "web", cover: "./assets/images/thumbnails/image_promo-2.jpg", video: "https://player.vimeo.com/video/367668768", reference: "https://vimeo.com/channels/friendsrepublic/367668768" },
    { class: "short", cover: "./assets/images/thumbnails/B_side-Poster-1.jpg", video: "https://player.vimeo.com/video/285877576", reference: "https://vimeo.com/channels/friendsrepublic/285877576" },
    { class: "after", cover: "./assets/images/thumbnails/vlcsnap-2020-07-29-22h51m03s483.png", video: "https://player.vimeo.com/video/308579389", reference: "https://vimeo.com/channels/friendsrepublic/308579389" },
    { class: "short", cover: "./assets/images/thumbnails/Album-art-trial.jpg", video: "https://player.vimeo.com/video/273166543", reference: "https://vimeo.com/channels/friendsrepublic/273166543" },
    { class: "others", cover: "./assets/images/thumbnails/AG-for-Stable.00_00_00_18.Still001.jpg", video: "https://player.vimeo.com/video/273164625", reference: "https://vimeo.com/channels/friendsrepublic/273164625" },
    { class: "short", cover: "./assets/images/thumbnails/Vir-Das.jpg", video: "https://player.vimeo.com/video/272413779", reference: "https://vimeo.com/channels/friendsrepublic/272413779" },
    { class: "web", cover: "./assets/images/thumbnails/Zakir-Still.jpg", video: "https://player.vimeo.com/video/367668768", reference: "https://vimeo.com/channels/friendsrepublic/367668768" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
