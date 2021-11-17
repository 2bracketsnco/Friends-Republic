import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutus = [
    {
      para1: "In 2016, school buddies, Chinmay and Hetan teamed up to found Friends’ Republic - a film production company that creates music videos, documentaries, branded content and all that filmmaking goodness. The idea is to produce emotionally resonant work in a variety of formats."
    },
    {
      para1: "We are here to help you and your stories move forward. Get in touch and let’s make some films together!"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
