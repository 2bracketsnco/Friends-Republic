import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  project = [
    { class: "short", cover: "https://i.pinimg.com/originals/60/9f/83/609f838106ff4b3e8a73cce1d5490e98.jpg", video: "https://player.vimeo.com/video/336648260", reference: "https://vimeo.com/channels/friendsrepublic/336648260" },
    { class: "doc", cover: "./assets/images/thumbnails/vishnu.jpg", video: "https://player.vimeo.com/video/286935698", reference: "https://vimeo.com/channels/friendsrepublic/286935698" },
    { class: "after", cover: "./assets/images/thumbnails/weekend.jpg", video: "https://player.vimeo.com/video/308579389", reference: "https://vimeo.com/channels/friendsrepublic/308579389" },
    { class: "short", cover: "https://i.pinimg.com/originals/60/9f/83/609f838106ff4b3e8a73cce1d5490e98.jpg", video: "https://player.vimeo.com/video/285877576", reference: "https://vimeo.com/channels/friendsrepublic/285877576" },
    { class: "short", cover: "./assets/images/thumbnails/limbo.jpg", video: "https://player.vimeo.com/video/304668531", reference: "https://vimeo.com/channels/friendsrepublic/304668531" },
    { class: "short", cover: "./assets/images/thumbnails/snap.jpg", video: "https://player.vimeo.com/video/273166543", reference: "https://vimeo.com/channels/friendsrepublic/273166543" },
    { class: "others", cover: "./assets/images/thumbnails/lulla.jpg", video: "https://player.vimeo.com/video/273164625", reference: "https://vimeo.com/channels/friendsrepublic/273164625" },
    { class: "short", cover: "./assets/images/thumbnails/silver.jpg", video: "https://player.vimeo.com/video/272413779", reference: "https://vimeo.com/channels/friendsrepublic/272413779" },
    { class: "doc", cover: "./assets/images/thumbnails/anakha.jpg", video: "https://player.vimeo.com/video/272207343", reference: "https://vimeo.com/channels/friendsrepublic/272207343" },
    { class: "short", cover: "./assets/images/thumbnails/dark.jpg", video: "https://player.vimeo.com/video/191550249", reference: "https://vimeo.com/channels/friendsrepublic/191550249" },
    { class: "short", cover: "./assets/images/thumbnails/tabla.jpg", video: "https://player.vimeo.com/video/196249288", reference: "https://vimeo.com/channels/friendsrepublic/196249288" },
    { class: "web", cover: "./assets/images/thumbnails/mj.jpg", video: "https://player.vimeo.com/video/203987032", reference: "https://vimeo.com/channels/friendsrepublic/203987032" },
    { class: "web", cover: "./assets/images/thumbnails/bside.jpg", video: "https://player.vimeo.com/video/367668768", reference: "https://vimeo.com/channels/friendsrepublic/367668768" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
