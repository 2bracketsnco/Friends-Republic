import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  people = [
    { name: "Hetan Shah", image: "https://res.cloudinary.com/kaushalshah1307/image/upload/v1599461635/Friends%27%20Republic/Assets/hetan_ts24mj.jpg" },
    { name: "Chinmay Deshpande", image: "https://res.cloudinary.com/kaushalshah1307/image/upload/v1599461631/Friends%27%20Republic/Assets/chinmayedit_w5nxix.jpg" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
