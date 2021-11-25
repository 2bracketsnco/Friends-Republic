import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutus = [
    {
      para1: "In 2016, school buddies, Chinmay and Hetan teamed up to found Friends’ Republic - a Mumbai based film production company that creates music videos, documentaries, branded content and all that filmmaking goodness. The idea is to produce emotionally resonant work in a variety of formats."
    },
    {
      para2: "We are here to help you and your stories move forward."
    },
    {
      para3: "Get in touch and let’s make some films together!"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
