import React, { useState, useEffect } from 'react';
//데이터를 불러오는걸 바로바로 실행하기 위해서 이펙트라는 함수를 집어넣는다.
import "./App.css"

const movieLap = [
    {
        "adult": false,
        "backdrop_path": "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 580489,
        "original_language": "en",
        "original_title": "Venom: Let There Be Carnage",
        "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        "popularity": 10424.41,
        "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        "release_date": "2021-09-30",
        "title": "Venom: Let There Be Carnage",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 4087
    },
    {
        "adult": false,
        "backdrop_path": "/5uVhMGsps81CN0S4U9NF0Z4tytG.jpg",
        "genre_ids": [
            28,
            35,
            80,
            53
        ],
        "id": 512195,
        "original_language": "en",
        "original_title": "Red Notice",
        "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
        "popularity": 3819.259,
        "poster_path": "/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
        "release_date": "2021-11-04",
        "title": "Red Notice",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 1788
    },
    {
        "adult": false,
        "backdrop_path": "/zBkHCpLmHjW2uVURs5uZkaVmgKR.jpg",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "id": 585245,
        "original_language": "en",
        "original_title": "Clifford the Big Red Dog",
        "overview": "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
        "popularity": 3379.61,
        "poster_path": "/ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg",
        "release_date": "2021-11-10",
        "title": "Clifford the Big Red Dog",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 424
    },
    {
        "adult": false,
        "backdrop_path": "/xGrTm3J0FTafmuQ85vF7ZCw94x6.jpg",
        "genre_ids": [
            18,
            36,
            12
        ],
        "id": 589761,
        "original_language": "ru",
        "original_title": "Чернобыль",
        "overview": "The aftermath of a shocking explosion at the Chernobyl nuclear power station made hundreds of people sacrifice their lives to clean up the site of the catastrophe and to successfully prevent an even bigger disaster that could have turned a large part of the European continent into an uninhabitable exclusion zone. This is their story.",
        "popularity": 3131.783,
        "poster_path": "/kfQJQWFEoWRVBH8FUKnT0HX1yRS.jpg",
        "release_date": "2021-04-15",
        "title": "Chernobyl: Abyss",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 226
    },
    {
        "adult": false,
        "backdrop_path": "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 566525,
        "original_language": "en",
        "original_title": "Shang-Chi and the Legend of the Ten Rings",
        "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
        "popularity": 3240.721,
        "poster_path": "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
        "release_date": "2021-09-01",
        "title": "Shang-Chi and the Legend of the Ten Rings",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 4007
    },
    {
        "adult": false,
        "backdrop_path": "/g2djzUqA6mFplzC03gDk0WSyg99.jpg",
        "genre_ids": [
            12,
            16,
            35,
            10751,
            14,
            10402
        ],
        "id": 568124,
        "original_language": "en",
        "original_title": "Encanto",
        "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        "popularity": 2984.677,
        "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        "release_date": "2021-11-24",
        "title": "Encanto",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 230
    },
    {
        "adult": false,
        "backdrop_path": "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
        "genre_ids": [
            12,
            28,
            53
        ],
        "id": 370172,
        "original_language": "en",
        "original_title": "No Time to Die",
        "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        "popularity": 1775.597,
        "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
        "release_date": "2021-09-29",
        "title": "No Time to Die",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 2390
    },
    {
        "adult": false,
        "backdrop_path": "/uWGPC7j70LE64nbetxQGSSYJO53.jpg",
        "genre_ids": [
            53,
            10752
        ],
        "id": 762433,
        "original_language": "en",
        "original_title": "Zeros and Ones",
        "overview": "Called to Rome to stop an imminent terrorist bombing, a soldier desperately seeks news of his imprisoned brother — a rebel with knowledge that could thwart the attack. Navigating the capital's darkened streets, he races to a series of ominous encounters to keep the Vatican from being blown to bits.",
        "popularity": 1813.807,
        "poster_path": "/a6balsDWCFMHPaPT6rFoBpNjR6z.jpg",
        "release_date": "2021-11-18",
        "title": "Zeros and Ones",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 56
    },
    {
        "adult": false,
        "backdrop_path": "/lyvszvJJqqI8aqBJ70XzdCNoK0y.jpg",
        "genre_ids": [
            28,
            12,
            878,
            14
        ],
        "id": 524434,
        "original_language": "en",
        "original_title": "Eternals",
        "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
        "popularity": 1527.452,
        "poster_path": "/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg",
        "release_date": "2021-11-03",
        "title": "Eternals",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1348
    },
    {
        "adult": false,
        "backdrop_path": "/odKqOY6VE6C59YAdGHB0b5Havye.jpg",
        "genre_ids": [
            10751,
            12,
            14
        ],
        "id": 615666,
        "original_language": "en",
        "original_title": "A Boy Called Christmas",
        "overview": "An ordinary young boy called Nikolas sets out on an extraordinary adventure into the snowy north in search of his father who is on a quest to discover the fabled village of the elves, Elfhelm. Taking with him a headstrong reindeer called Blitzen and a loyal pet mouse, Nikolas soon meets his destiny in this magical and endearing story that proves nothing is impossible…",
        "popularity": 1204.291,
        "poster_path": "/1sRejtiHOZGggZd9RcmdqbapLM5.jpg",
        "release_date": "2021-11-25",
        "title": "A Boy Called Christmas",
        "video": false,
        "vote_average": 8,
        "vote_count": 175
    },
    {
        "adult": false,
        "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
        "genre_ids": [
            35,
            28,
            12,
            878
        ],
        "id": 550988,
        "original_language": "en",
        "original_title": "Free Guy",
        "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
        "popularity": 1125.572,
        "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
        "release_date": "2021-08-11",
        "title": "Free Guy",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3978
    },
    {
        "adult": false,
        "backdrop_path": "/4gKxQIW91hOTELjY5lzjMbLoGxB.jpg",
        "genre_ids": [
            28,
            53,
            878
        ],
        "id": 763164,
        "original_language": "en",
        "original_title": "Apex",
        "overview": "Ex-cop Thomas Malone is serving a life sentence for a crime he didn’t commit. He is offered a chance at freedom if he can survive a deadly game of Apex, in which six hunters pay for the pleasure of hunting another human on a remote island. He accepts, and once he arrives, all hell breaks loose.",
        "popularity": 1092.11,
        "poster_path": "/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg",
        "release_date": "2021-11-12",
        "title": "Apex",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 253
    },
    {
        "adult": false,
        "backdrop_path": "/Aebz7s8EHQXxHR98J8Vw6QVGggq.jpg",
        "genre_ids": [
            878,
            12
        ],
        "id": 438631,
        "original_language": "en",
        "original_title": "Dune",
        "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
        "popularity": 1221.81,
        "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        "release_date": "2021-09-15",
        "title": "Dune",
        "video": false,
        "vote_average": 8,
        "vote_count": 4564
    },
    {
        "adult": false,
        "backdrop_path": "/iUeeZ5PWfZGgUtCJfwcgmCfdzoI.jpg",
        "genre_ids": [
            16,
            878,
            10751,
            35
        ],
        "id": 482321,
        "original_language": "en",
        "original_title": "Ron's Gone Wrong",
        "overview": "In a world where walking, talking, digitally connected bots have become children's best friends, an 11-year-old finds that his robot buddy doesn't quite work the same as the others do.",
        "popularity": 1133.251,
        "poster_path": "/gA9QxSravC2EVEkEKgyEmDrfL0e.jpg",
        "release_date": "2021-10-15",
        "title": "Ron's Gone Wrong",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 236
    },
    {
        "adult": false,
        "backdrop_path": "/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg",
        "genre_ids": [
            28,
            18,
            36
        ],
        "id": 617653,
        "original_language": "en",
        "original_title": "The Last Duel",
        "overview": "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
        "popularity": 1513.273,
        "poster_path": "/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
        "release_date": "2021-10-13",
        "title": "The Last Duel",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 708
    },
    {
        "adult": false,
        "backdrop_path": "/pKgfWzxOpvGV3MQ0kLjLdjKAzUe.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 785538,
        "original_language": "pt",
        "original_title": "7 Prisioneiros",
        "overview": "An impoverished teen seeking to escape the clutches of a human trafficker must weigh living up to his moral code against his struggle to survive.",
        "popularity": 907.073,
        "poster_path": "/5svMKCGnR6Yvj8wxldvDvgUi0Jk.jpg",
        "release_date": "2021-10-22",
        "title": "7 Prisoners",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 127
    },
    {
        "adult": false,
        "backdrop_path": "/lV3UFPPxDIPelh46G9oySXN9Mcz.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 744275,
        "original_language": "en",
        "original_title": "After We Fell",
        "overview": "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
        "popularity": 841.375,
        "poster_path": "/dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg",
        "release_date": "2021-09-01",
        "title": "After We Fell",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1081
    },
    {
        "adult": false,
        "backdrop_path": "/vr6TqnRLcZACo9htfcmBUcjs2t4.jpg",
        "genre_ids": [
            10751,
            35
        ],
        "id": 802217,
        "original_language": "en",
        "original_title": "8-Bit Christmas",
        "overview": "In suburban Chicago during the late 1980s, ten-year-old Jake Doyle embarks on a herculean quest to get the latest and greatest video game system for Christmas.",
        "popularity": 750.354,
        "poster_path": "/5YwaISdOwp8Zu6O7kwBeUn8a7Pu.jpg",
        "release_date": "2021-11-25",
        "title": "8-Bit Christmas",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 69
    },
    {
        "adult": false,
        "backdrop_path": "/9OE62lhp5FPNJMfKXodegVLjHUA.jpg",
        "genre_ids": [
            16,
            10751
        ],
        "id": 823609,
        "original_language": "en",
        "original_title": "Monster Family 2",
        "overview": "To free Baba Yaga and Renfield from the clutches of Monster Hunter Mila Starr, the Wishbone Family once more transforms into a Vampire, Frankenstein's Monster, a Mummy and a Werewolf. Aided and abetted by their three pet bats, our Monster Family zooms around the world again to save their friends, make new monstrous acquaintances and finally come to the realization that ‘Nobody’s Perfect’ – even those with flaws can find happiness.",
        "popularity": 705.97,
        "poster_path": "/em2NLSbVj49NjpdqmaKYuqKYZET.jpg",
        "release_date": "2021-01-13",
        "title": "Monster Family 2",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 12
    },
    {
        "adult": false,
        "backdrop_path": "/d0mpUFKzoPwF1KsdjHpkkaYSvKm.jpg",
        "genre_ids": [
            37
        ],
        "id": 618162,
        "original_language": "en",
        "original_title": "The Harder They Fall",
        "overview": "Gunning for revenge, outlaw Nat Love saddles up with his gang to take down enemy Rufus Buck, a ruthless crime boss who just got sprung from prison.",
        "popularity": 673.441,
        "poster_path": "/su9WzL7lwUZPhjH6eZByAYFx2US.jpg",
        "release_date": "2021-10-22",
        "title": "The Harder They Fall",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 400
    },
]

const App = () => {

    // {안에는 함수,상태값들이 들어간다.
    // A는 버튼 클릭하기전 B정보는 버튼 클릭후 변수 적용 노출.
    const [movieLapDate, setMovieLapDate] = useState([])
    //
    // const [bdate, setBDate] = useState(22)
    //
    // const [cdate, setCDate] = useState(0)
    //
    // //자신이 이름을 정하고 변수를 입력.
    // const changeText = () => {
    //     setCDate(adate+bdate)
    // }
    useEffect(() => {
        setMovieLapDate(movieLap)
    }, [])

    const getmovieList = () => {

    }
    
  return (
      <div className={"App"}>
          {movieLapDate.map(movieList => (
              <h1>
                  {movieList.original_title}
              </h1>


          ))}
          <button onClick={getmovieList}>
              영화사 정보 불러오기.
          </button>
        {/*<hi>*/}
        {/*    {adate} + {bdate} = {cdate}*/}
        {/*</hi>*/}
        {/*  <br />*/}

        {/*  <button onClick={changeText}>*/}
        {/*      hi go!*/}
        {/*  </button>*/}
      </div>
  );
};

export default App;
