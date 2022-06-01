import React, { Component } from 'react'
import NewsItem from './NewsItem'



export class News extends Component {
articles =   [
  {
      "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
      },
      "author": "Rachel Pannett, John Hudson",
      "title": "Biden confirms U.S. is sending advanced rocket systems to Ukraine - The Washington Post",
      "description": "The High Mobility Artillery Rocket System, or HIMARS, will enable Ukraine “to more precisely strike key targets on the battlefield in Ukraine,\" Biden said.",
      "url": "https://www.washingtonpost.com/world/2022/05/31/ukraine-russia-war-hmars-mlrs-rockets-biden/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BZA7ZTXBIII6ZLTENMR6KFK3MI.jpg&w=1440",
      "publishedAt": "2022-06-01T03:46:27Z",
      "content": "Placeholder while article actions load\r\nPresident Biden on Tuesday confirmed that his administration is sending medium-range advanced rocket systems to Ukraine, responding to a top request from Ukrai… [+3790 chars]"
  },
  {
      "source": {
          "id": "the-verge",
          "name": "The Verge"
      },
      "author": "Victoria Song",
      "title": "Garmin revamps Forerunner lineup with racing features and solar power - The Verge",
      "description": "For Global Running Day, Garmin is announcing the $349.99 Forerunner 255 and the $499.99 Forerunner 955. Both watches add a new “morning report,” racing widget, and multi-band GPS.",
      "url": "https://www.theverge.com/2022/5/31/23148570/garmin-forerunner-255-955-wearables-smartwatches",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/-dSvk9ryD_bM3bBwkGDA41rXndE=/0x59:3000x1630/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23598906/Forerunner_255_series_family_image.png",
      "publishedAt": "2022-06-01T03:00:00Z",
      "content": "The Forerunner 255 and 955 add a new race widget, multi-band GPS, and a morning report\r\nThe Forerunner 255 family adds a host of new racing features and multi-band GPS.\r\nImage: Garmin\r\nJust in time f… [+4484 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Helen Regan, CNN",
      "title": "Rafael Nadal advances to French Open semifinals after defeating Novak Djokovic - CNN",
      "description": null,
      "url": "https://www.cnn.com/2022/05/31/tennis/nadal-french-open-quarterfinals-djokovic-intl-hnk-spt/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220531205850-01-nadal-french-open-semifinals-super-tease.jpg",
      "publishedAt": "2022-06-01T02:33:00Z",
      "content": null
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "By <a href=\"/profiles/helen-regan\">Helen Regan</a>, <a href=\"/profiles/andrew-raine\">Andrew Raine</a>, Jack Guy, Hannah Ryan, <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a>, <a href=\"/profiles/meg-wagner\">Meg Wagner</a>, Melissa Macaya and Mike Hayes, CNN",
      "title": "May 31, 2022 Russia-Ukraine news - CNN",
      "description": "The European Union agreed to ban 90% of Russian oil imports by the end of the year, the leaders of the European Council announced on Monday.",
      "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-05-31-22/index.html",
      "urlToImage": "https://dynaimage.cdn.cnn.com/cnn/digital-images/org/212a2cd1-27fa-4a41-abe5-70848be9711a.jpg",
      "publishedAt": "2022-06-01T01:15:30Z",
      "content": "Ukraine is working on an UN-led naval operation with navies of partnering countries to ensure a safe trade route for exporting its agricultural products, Ukrainian Foreign Minister Dmytro Kuleba said… [+1490 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Times"
      },
      "author": "Alex Traub",
      "title": "Alligator Kills Florida Man Retrieving Frisbees in Lake, Officials Say - The New York Times",
      "description": "The 47-year-old man frequently swam into a lake near a disc golf course to retrieve stray discs and sell them, a park official said.",
      "url": "https://www.nytimes.com/2022/05/31/us/alligator-kills-florida-man-retrieving-frisbees-in-lake-officials-say.html",
      "urlToImage": "https://static01.nyt.com/images/2022/05/31/multimedia/31xp-gator-1/31xp-gator-1-facebookJumbo-v2.jpg",
      "publishedAt": "2022-06-01T01:15:20Z",
      "content": "One hole in the disc golf course is as close as 25 to 50 feet from the water, Mr. Cozzie said. Certainly, it might be wise for the disc golf group to look at relocating the hole, he added.\r\nHe descri… [+1372 chars]"
  },
  {
      "source": {
          "id": "associated-press",
          "name": "Associated Press"
      },
      "author": "Nathan Ellgren, Adriana Gomez Licon",
      "title": "Mourners gather as funerals begin for Uvalde school killings - The Associated Press",
      "description": "UVALDE, Texas (AP) — The pallbearers wore white shirts and gloves. The desert-brown church with the tall bell tower was filled to overflowing. The casket held a 10-year-old girl who loved purple.  On Tuesday afternoon, hundreds of mourners turned out for the …",
      "url": "https://apnews.com/f4db991b846223f3a4b76376e5789b00",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/3e39c579ab414781a28f2c06ee8ee21e/3000.jpeg",
      "publishedAt": "2022-06-01T01:07:30Z",
      "content": "UVALDE, Texas (AP) The pallbearers wore white shirts and gloves. The desert-brown church with the tall bell tower was filled to overflowing. The casket held a 10-year-old girl who loved purple. \r\nOn … [+5911 chars]"
  },
  {
      "source": {
          "id": "politico",
          "name": "Politico"
      },
      "author": null,
      "title": "Supreme Court blocks Texas law on social media 'censorship' - POLITICO",
      "description": "The ruling is a major victory for tech companies.",
      "url": "https://www.politico.com/news/2022/05/31/texas-social-media-censorship-scotus-00036146",
      "urlToImage": "https://static.politico.com/e0/93/bcb3cf234434a1b1d8b5c44894ca/https-delivery.gettyimages.com/downloads/1393847516",
      "publishedAt": "2022-06-01T00:38:52Z",
      "content": "No one had yet filed lawsuits under the law, and Tuesdays decision means it will remain blocked as the case moves through the 5th U.S. Circuit of Court of Appeals.\r\nChief Justice John Roberts, along … [+4393 chars]"
  },
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "Amy McGorry",
      "title": "Coffee may perk up your life expectancy, study suggests - Fox News",
      "description": "Coffee drinkers are less likely to die compared to non-coffee drinkers, according to a new study published in the Annals of Internal Medicine.",
      "url": "https://www.foxnews.com/health/coffee-may-perk-up-life-expectancy-study-suggests",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/Coffee-Pour.jpg",
      "publishedAt": "2022-06-01T00:31:37Z",
      "content": "Coffee drinkers may get an added pep up from their morning cup of Joe!  Coffee drinkers are less likely to die during a 7-year follow-up period, compared to non-coffee drinkers, according to a new st… [+2675 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "10TV"
      },
      "author": "10TV Web Staff",
      "title": "Grove City woman gored by bison at Yellowstone National Park - 10TV",
      "description": "As the bison walked near a boardwalk, the woman approached it. The bison then gored and tossed her 10 feet into the air.",
      "url": "https://www.10tv.com/article/news/local/grove-city-woman-gored-bison-at-yellowstone-national-park/530-fadac38a-d78a-4154-b342-3297706d8937",
      "urlToImage": "https://media.tegna-media.com/assets/WBNS/images/b1cfdc19-2e94-432a-8e21-4203fba7302c/b1cfdc19-2e94-432a-8e21-4203fba7302c_1140x641.jpg",
      "publishedAt": "2022-06-01T00:31:00Z",
      "content": "YELLOWSTONE NATIONAL PARK, Wyo. A 25-year-old Grove City woman was gored and tossed into the air by a bison at Yellowstone National Park over the Memorial Day weekend.\r\nThe woman, who has not been id… [+1054 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "YouTube"
      },
      "author": null,
      "title": "Warriors Mini Movie | 2022 Western Conference Finals - Golden State Warriors",
      "description": "Three series down. One to go.Before the Golden State Warriors tip-off the 2022 NBA Finals against the Boston Celtics, relieve the Western Conference Finals s...",
      "url": "https://www.youtube.com/watch?v=0Boo7L854f8",
      "urlToImage": "https://i.ytimg.com/vi/0Boo7L854f8/hqdefault.jpg",
      "publishedAt": "2022-06-01T00:30:09Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "New York Post"
      },
      "author": "Elizabeth Rosner",
      "title": "Johnny Depp invites Kate Moss to concert in London while jury deliberates - New York Post ",
      "description": "Johnny Depp performed in front of a sold-out crowd alongside Jeff Beck at the Royal Albert Hall in London for the third night in a row.",
      "url": "https://nypost.com/2022/05/31/johnny-depp-invites-kate-moss-to-uk-concert-as-jury-deliberates/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/depp-index.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-05-31T23:38:00Z",
      "content": "Johnny Depp performed in front of a sold-out crowd alongside Jeff Beck at the Royal Albert Hall in London for the third night in a row — as he awaits the verdict in his defamation trial against his e… [+1145 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "YouTube"
      },
      "author": null,
      "title": "Jury's question in Depp Heard trial reveals MAJOR clue, says Cooper Lawrence | Sunrise - Sunrise",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4T2ZALwNXOw",
      "urlToImage": null,
      "publishedAt": "2022-05-31T23:35:01Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
  },
  {
      "source": {
          "id": null,
          "name": "ESPN"
      },
      "author": "Jake Trotter",
      "title": "Cleveland Browns QB Deshaun Watson facing 23rd active civil lawsuit over alleged inappropriate sexual conduct - ESPN",
      "description": "A woman changed her mind about filing a lawsuit against Deshaun Watson after watching an HBO show in which two other women suing the quarterback criticized the Browns for giving him a record-setting contract.",
      "url": "https://www.espn.com/nfl/story/_/id/34015843/cleveland-browns-qb-deshaun-watson-facing-23rd-active-lawsuit-inappropriate-sexual-conduct",
      "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0325%2Fr991202_1296x729_16%2D9.jpg",
      "publishedAt": "2022-05-31T23:31:15Z",
      "content": "Another woman has filed a lawsuit against Deshaun Watson, joining 22 others who accused the Cleveland Browns quarterback in civil cases filed in 2021 of inappropriate sexual conduct during massage se… [+2836 chars]"
  },
  {
      "source": {
          "id": "reuters",
          "name": "Reuters"
      },
      "author": null,
      "title": "Yellen says she was 'wrong' about inflation path, Biden supports Fed actions - Reuters",
      "description": "U.S. Treasury Secretary Janet Yellen said on Tuesday that she was wrong in the past about the path inflation would take, but said taming price hikes is President Joe Biden's top priority and he supports the Federal Reserve's actions to achieve that.",
      "url": "https://www.reuters.com/markets/us/yellen-says-she-was-wrong-about-inflation-path-biden-supports-fed-actions-2022-05-31/",
      "urlToImage": "https://www.reuters.com/resizer/qjXF3lYMJ3Z0IDd-m0i-KttDiEY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HBEUOQPWJFMTHAUNFRPWN7JVRU.jpg",
      "publishedAt": "2022-05-31T23:28:00Z",
      "content": "WASHINGTON, May 31 (Reuters) - U.S. Treasury Secretary Janet Yellen said on Tuesday that she was wrong in the past about the path inflation would take, but said taming price hikes is President Joe Bi… [+1777 chars]"
  },
  {
      "source": {
          "id": "google-news",
          "name": "Google News"
      },
      "author": null,
      "title": "Futures Rise After Market Holds Key Levels; Don't Fall For This - Investor's Business Daily",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMimAFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtbWFya2V0LXJhbGx5LWhvbGRzLWtleS1sZXZlbHMtc2FsZXNmb3JjZS1yaXNlcy1sYXRlLWRvbnQtZmFsbC1mb3ItdGhpcy10cmFwL9IBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-05-31T23:23:00Z",
      "content": null
  },
  {
      "source": {
          "id": "ars-technica",
          "name": "Ars Technica"
      },
      "author": "Beth Mole",
      "title": "Experts warn of continued monkeypox spread as hundreds of cases found worldwide - Ars Technica",
      "description": "\"At the moment, we are not concerned of a global pandemic.\"",
      "url": "https://arstechnica.com/science/2022/05/monkeypox-unlikely-to-become-a-pandemic-but-spread-may-not-be-contained/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/05/GettyImages-151054421-e1653346027144-760x380.jpeg",
      "publishedAt": "2022-05-31T23:05:02Z",
      "content": "Enlarge/ A negative stain electron micrograph of a monkeypox virus virion in human vesicular fluid. \r\n37 with 24 posters participating\r\nThe multinational monkeypox outbreak continues to pose a low ri… [+3863 chars]"
  },
  {
      "source": {
          "id": "abc-news",
          "name": "ABC News"
      },
      "author": "ABC News",
      "title": "Uvalde police, school district no longer cooperating with Texas probe of shooting: Sources - ABC News",
      "description": "Uvalde police and school district police are no longer cooperating with the Texas Dept. of Public Safety's probe into the Robb Elementary School shooting, sources say.",
      "url": "https://abcnews.go.com/US/uvalde-police-school-district-longer-cooperating-texas-probe/story?id=85093405",
      "urlToImage": "https://s.abcnews.com/images/US/uvalde-law-enforcement-vid3-01-ht-iwb-220527_1653668406391_hpMain_16x9_992.jpg",
      "publishedAt": "2022-05-31T23:02:43Z",
      "content": "The Uvalde Police Department and the Uvalde Independent School District police force are no longer cooperating with the Texas Department of Public Safety's investigation into the massacre at Robb Ele… [+1006 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NBCSports.com"
      },
      "author": "Mike Florio",
      "title": "Nick Saban reiterates regret for singling out programs - NBC Sports",
      "description": "Alabama coach Nick Saban may be on the wrong side of 70, but he can backpedal like an All-Pro defensive back.In a session with reporters on Tuesday, Saban was asked about the recent brouhaha between him and Texas A&M coach Jimbo Fisher regarding the name, ima…",
      "url": "https://profootballtalk.nbcsports.com/2022/05/31/nick-saban-reiterates-regret-for-singling-out-programs/",
      "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/05/GettyImages-1237228639-e1654037680639.jpg",
      "publishedAt": "2022-05-31T22:55:00Z",
      "content": "Alabama coach Nick Saban may be on the wrong side of 70, but he can backpedal like an All-Pro defensive back.\r\nIn a session with reporters on Tuesday, Saban was asked about the recent brouhaha betwee… [+1544 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "New York Times"
      },
      "author": "Gina Kolata",
      "title": "The Doctor Prescribed an Obesity Drug. Her Insurer Called It ‘Vanity.’ - The New York Times",
      "description": "Many insurance companies refuse to cover new weight loss drugs that their doctors deem medically necessary.",
      "url": "https://www.nytimes.com/2022/05/31/health/obesity-drugs-insurance.html",
      "urlToImage": "https://static01.nyt.com/images/2022/05/24/science/00sci-obesity-promo/00sci-obesity-promo-facebookJumbo.jpg",
      "publishedAt": "2022-05-31T22:23:09Z",
      "content": "Access to medicines for the treatment of obesity is dismal in this country, said Dr. Fatima Cody Stanford, an obesity medicine specialist at Massachusetts General Hospital and Harvard Medical School.… [+1366 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "WLS-TV"
      },
      "author": "Ravi Baichwal",
      "title": "Chicago Memorial Day shootings 2022: 47 shot, 9 fatally, in holiday weekend violence across city, police say - WLS-TV",
      "description": "Chicago Memorial Day weekend shootings have left at least 47 shot, nine fatally, police said.",
      "url": "https://abc7chicago.com/chicago-shootings-shooting-memorial-day-weekend-violence/11911262/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/11913418_053122-wls-ravi-weekend-violence-6p-vid.jpg?w=1600",
      "publishedAt": "2022-05-31T22:18:45Z",
      "content": "CHICAGO (WLS) -- A violent weekend kicked off the unofficial start of summer in Chicago. It was one of the most violent Memorial Day weekends we've had in recent years.Despite the fact that Chicago p… [+6045 chars]"
  }
]


  constructor()
{
  super();
  console.log("cnstrctr from news component");
  this.state = { 
    articles: this.articles,
    loading: false
  }
}

async cDM()
{
 let url=""
 let data = await fetch(url);
 let parsedData = await data.json()
 this.setState({articles : parsedData.articles})

}


  render() {
    return (
      <div className="container my-3">
        <h2>my news</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
      return   <div className="col-md-4" key={element.url}>
           <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
         </div>

        })}

         
          

          
          
          </div>
          </div>
    )
  }
}

export default News