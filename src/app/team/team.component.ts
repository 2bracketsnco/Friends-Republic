import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  people = [
    { name: "Hetan Shah", image: "./assets/images/thumbnails/hetan.jpg" },
    { name: "Chinmay Deshpande", image: "./assets/images/thumbnails/chinmayedit.jpg" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
