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
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599458624/Friends%27%20Republic/Assets/fr_hipcouch_kaveer.jpg', 
      video: 'https://player.vimeo.com/video/384870257?byline=0&title=0&portrait=0&control=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/336648260', 
      dek: `One-minute explainer for Hipcouch, an interior design company based in Mumbai.`,
      projectCredits: [
        'Client: Hipcouch',
        `Produced by: Friends' Republic`
      ],
      titleCredits: [
        'We were responsible for:',
        'Concept',
        'Direction',
        'Cinematography',
        'Edit',
        'Graphics and Animation'
      ]
    },
    { 
      lead: '"SILVER NIGHT" - ASIAN PAINTS NILAYA', 
      byline: 'Commercial',
      class: 'doc', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044050/Friends%27%20Republic/Assets/fr_Asian-Paints.jpg', 
      video: 'https://www.youtube.com/embed/Bx9EeWRNFw8?modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/286935698', 
      dek: `A Launch film for ‘Wallpaper of the year 2020’- Asian Paints Nilaya x Nicobar Design Studio.`,
      projectCredits: [
        'Directed by: Hetan Shah & Chinmay Deshpande'
      ],
      titleCredits: [
        'Edited by: Hetan Shah',
        'Cinematography/Colour Grade by: Quais Waseeq',
        'Executive Producer: Manoti Jain',
        'Executive Creative Director: Nisha Vasudevan',
        'Creative Producer: Hitarth Solanki',
        'Creative Director: Prem Kumar'
      ],
      productionCredits: [
        'Produced by: Supari Studios'
      ]
    },
    { 
      lead: 'BROKEN DREAMS', 
      byline: 'Music Video', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599458624/Friends%27%20Republic/Assets/fr_broken_dreams.jpg', 
      video: 'https://player.vimeo.com/video/400296233?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `An introvert teenage girl attempts to have a cool haircut for a special occasion - only to have her dreams shattered. ‘Broken Dreams’ is a story about her acceptance with the situation and ultimately learning the fact that happiness is a choice.`,
      projectCredits: [
        'Artist: Rushikesh Nene'
      ],
      titleCredits: [
        'Writen/Directed by: Hetan Shah',
        'Shot/Edited by: Chinmay Deshpande',
        'Cast: Ananya Maheshwari'
      ],
      artistCredits: `"Broken Dreams" by Rushikesh Nene is available to listen on Spotify.`
    },
    { 
      lead: 'B Side: EP/02', 
      byline: 'Music Documentary Series', 
      class: 'after', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1637577324/Friends%27%20Republic/Assets/fr_bside_ep02_shibham_kamat.jpg', 
      video: 'https://www.youtube.com/embed/UZpWX990WWw?modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/308579389', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.`,
      dekArtist: `The second episode features Vadodara based Pianist, Singer-Songwriter Shubham Kamat.`,
      projectCredits: [
        'Directed/ Edited by: Hetan Shah',
        'Director of Photography: Chinmay Deshpande',
        'Mix by: Kartavya Jain',
        'Appearances: Ajay Mistry (Proprietor - A. Mistry & Co., Mumbai)'
      ],
      liveSessionCredits: [
        'Live Sessions: ',
        '1. Break Me',
        '2. Craptalk (Bonus Track)'
      ],
      titleCredits: [
        'Titles by: Chinmay Deshpande',
        'Graded by: Hetan Shah'
      ],
      productionCredits: [
        `Produced by: Friends' Republic`
      ],
      artistCredits: `All songs by Shubham Kamat.`
    },
    { 
      lead: 'ZAKIR KHAN', 
      byline: 'Tour Recap', 
      class: 'short', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044053/Friends%27%20Republic/Assets/fr_Zakir-Still.jpg', 
      video: 'https://player.vimeo.com/video/349332857?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/285877576', 
      dek: `Recap of Zakir's Gujarat tour with his comedy special 'Kaksha Gyarvi'.`,
      projectCredits: [
        'Client: The Comedy Factory',
        `Created by: Friends' Republic`
      ],
      titleCredits: [
        'Editor/Colorist: Hetan Shah',
        'Shot by: Chinmay Deshpande, Hetan Shah'
      ]
    },
    { 
      lead: 'VISHNU', 
      byline: 'Short Documentary', 
      class: 'short', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599458624/Friends%27%20Republic/Assets/fr_Vishnu.jpg', 
      video: 'https://www.youtube.com/embed/V1kJVCuSSSA?modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/273166543', 
      dek: `Finalist in 'Best Documentary' category at My Rode Reel 2018. 'Vishnu' is an inspiring story of a tea seller from the city of Vadodara, who shares a unique relationship with his customers.`,
      projectCredits: [
        'Directed/Edited by: Hetan Shah',
        'Cinematography by: Chinmay Deshpande',
        'Music by: Aliozair Patel',
        'BTS coverage: Surabhi Thakkar'
      ],
      productionCredits: [
        `Produced by: Friends' Republic`
      ] 
    },
    { 
      lead: 'MAKE ROOM FOR A BABY', 
      byline: 'Documentary Series', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1636981344/Friends%27%20Republic/Assets/fr_make_a_room_for_a_baby_sara_sham.jpg', 
      video: 'https://www.youtube.com/embed?v=Te2qfiK17Kg&list=PLDq4vguZiskYcBMc__Kko8p2ZV8EfWEJy&index=1&ab_channel=BeautifulHomes&modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Presenting 'Make Room For a Baby', a three-part series that takes us through interior designer Sarah Sham’s process of designing a nursery for her little one, all in the middle of the pandemic.`,
      projectCredits: [
        'Directed and Edited by: Hetan Shah, Chinmay Deshpande',
        'Executive Creative Director: Nisha Vasudevan',
        'Creative Director: Nandini Godara',
        'Executive Producer: Manoti Jain',
        'Senior Creative Producer: Ria Concessao',
        'Creative Producer: Kriti Bhangadiya',
        'DOP: Ritvik Tyagi',
        'Designer & Motion Graphics: Shradha Verma',
        'Sound Design & Mix: Carl Nazareth'
      ],
      productionCredits: [
        'Conceptualized and Produced by: Supari Studios'
      ]
    },
    { 
      lead: 'VIR DAS', 
      byline: 'Tour Recap', 
      class: 'short', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044054/Friends%27%20Republic/Assets/fr_Vir-Das.jpg', 
      video: 'https://player.vimeo.com/video/285877576?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/272413779', 
      dek: `Recap of Vir Das's Gujarat tour with his comedy special "Boarding Das".`,
      projectCredits: [
        'Client: The Comedy Factory',
        `Created by: Friends' Republic`
      ],
      titleCredits: [
        'Editor/Colorist: Hetan Shah',
        'Shot by: Chinmay Deshpande & Hetan Shah'
      ]
    },
    { 
      lead: 'SNAP', 
      byline: 'Horror Short', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044057/Friends%27%20Republic/Assets/fr_Snap.jpg', 
      video: 'https://www.youtube.com/embed/g3Qz7T51jR0?modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `'What if your web-cam starts to misbehave- do you have a stalker?' Finalist in *Best Horror* Category - My Rode Reel 2017.`,
      projectCredits: [
        'Written/Directed/Edited by: Chinmay Deshpande',
        'Cinematography/Colourist: Hetan Shah',
        'Cast: Om Bhatt',
        'BTS coverage: Kunal Soni'
      ]
    },
    { 
      lead: 'LIMBO', 
      byline: 'Short', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044051/Friends%27%20Republic/Assets/fr_Limbo-Still.jpg', 
      video: 'https://www.youtube.com/embed/aYE_fNdvPD0?modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Virtual Reality on a "substance"... what could go wrong? `,
      projectCredits: [
        'Director/Cinematographer: Chinmay Deshpande',
        'Editor/Colourist: Hetan Shah',
        'Cast: Tareesh Jaggi'
      ] 
    },
    { 
      lead: 'AAKASH GUPTA', 
      byline: 'Tour Recap', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044050/Friends%27%20Republic/Assets/fr_Aakash-Gupta.jpg', 
      video: 'https://www.youtube.com/embed/nN2XSigfJd0?modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `Recap of Aakash's Gujarat tour with his comedy special "Excuse Me Brother!”.`,
      projectCredits: [
        'Client: Aakash Gupta'
      ],
      titleCredits: [
        'Shot by: Chinmay Deshpande, Hetan Shah',
        'Editor/Colourist: Hetan Shah'
      ],
      productionCredits: [
        `Created by: Friends' Republic`
      ]
    },
    { 
      lead: 'B Side: EP/01', 
      byline: 'Music Documentary Series', 
      class: 'after', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044050/Friends%27%20Republic/Assets/fr_B_side-Poster-1.jpg', 
      video: 'https://www.youtube.com/embed/PAY4_tBq7rw?modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/308579389', 
      dek: `Friends' Republic presents B SIDE, a documentary series which features independent musicians talking about their lives and music along with some special sessions (filmed and recorded live at locations) 
      that captures the true energy of a live performance.`,
      dekArtist: `The first episode features Vadodara based singer-songwriter Shashwat Bulusu.`,
      projectCredits: [
        'Directed/ Edited by: Hetan Shah',
        'Director of Photography: Chinmay Deshpande',
        'Mix by: Kartavya Jain'
      ],
      liveSessionCredits: [
        'Live Sessions: ',
        '1. Tiny Man',
        '2. Padmini on Riverbed',
        '3. Under the Sun (Bonus Track)'
      ],
      titleCredits: [
        'Titles by: Chinmay Deshpande',
        'Graded by: Hetan Shah',
        'BTS Coverage: Pratik Parmar'
      ],
      productionCredits: [
        `Produced by: Friends' Republic`
      ],
      artistCredits: `All songs by Shashwat Bulusu.`
    },
    { 
      lead: 'UNDER THE SUN', 
      byline: 'B Side - Live Session', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599458625/Friends%27%20Republic/Assets/fr_under_the_sun.png', 
      video: 'https://www.youtube.com/embed/vBgkuYXLTPo?modestbranding=1', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      dek: `This is a bonus live session from B Side EP/01 ft. Shashwat Bulusu.`,
      projectCredits: [
        'Directed by: Hetan Shah',
        'Director of Photography: Chinmay Deshpande',
        'Sound Supervisor: Gagan Malhotra',
        'Mixed by: Kartavya Jain',
        'Editing/Titles by: Chinmay Deshpande',
        'Graded by: Hetan Shah',
        'Behind the Scenes by: Pratik Parmar',
        'Film Lcation: Wonky Works, Vadodara'
      ],
      liveSessionCredits: [
        'Music Performed by:',
        'Shashwat Bulusu', 
        'Uday Bhardwaj',
        'Jyotirmay Menon'
      ],
      titleCredits: [
        'Cinematographers:',
        'Deep Gurjar',
        'Parth Vyas',
        'Hetan Shah',
        'Chinmay Deshpande'
      ],
      productionCredits: [
        `Produced by: Friends' Republic`
      ],
      artistCredits: `All songs by Shashwat Bulusu.` 
    },
    { 
      lead: 'LULLA CLASSES', 
      byline: 'Commercial', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044053/Friends%27%20Republic/Assets/fr_lulla.png', 
      video: 'https://player.vimeo.com/video/273164625?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      // dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.`
      projectCredits: [
        'Client: Dev Lulla Sir (Lulla Classes)'
      ],
      titleCredits: [
        'Directed and Shot by: Chinmay Deshpande',
        'Edited and Graded by: Hetan Shah',
        'Sound Recording and Mixing by: Sumeet Mamtani (Ambisonic Records)'
      ],
      productionCredits: [
        `Produced by: Friends' Republic`
      ]
    },
    { 
      lead: 'PLAYGROUND', 
      byline: 'Music Video', 
      class: 'others', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044054/Friends%27%20Republic/Assets/fr_play-ground.jpg', 
      video: 'https://player.vimeo.com/video/343813921?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/273164625', 
      dek: `This VHS-style music video explores the life of three flatmates spending a laid back Sunday.`,
      projectCredits: [
        'Artist: Shashwat Bulusu'
      ],
      titleCredits: [
        'Directed & Edited by: Hetan Shah',
        'Cinematography by: Chinmay Deshpande',
        'Cast: Anikesa Dhing, Sasha Kalrani, Vaidehi Gohil'
      ],
      productionCredits: [
        `Produced by: Friends' Republic`
      ],
      artistCredits: `"Playground" by Shashwat Bulusu is available to listen on Spotify.`
    },
    { 
      lead: 'WEEKEND WINDOW', 
      byline: 'Aftermovie', 
      class: 'web', 
      cover: 'https://res.cloudinary.com/kaushalshah1307/image/upload/v1599044053/Friends%27%20Republic/Assets/fr_WW-2018.jpg', 
      video: 'https://player.vimeo.com/video/308579389?byline=0&title=0&portrait=0', 
      reference: 'https://vimeo.com/channels/friendsrepublic/367668768', 
      // dek: `Friends' Republic presents B SIDE, a documentary series which features indie musicians talking about their lives and music along with some special performances filmed and recorded live at locations to give you a unique experience.`,
      projectCredits: [
        'Client: The Idea Bag Inc.'
      ],
      titleCredits: [
        'Colorist: Hetan Shah',
        'Shot and Edited by: Chinmay Deshpande & Hetan Shah'
      ],
      productionCredits: [
        `Produced by: Friends' Republic`
      ]
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
