import React, { useState } from 'react';
import "./App.css"

const newsList = [
    {
        "source": {
            "id": null,
            "name": "Electrek"
        },
        "author": "Fred Lambert",
        "title": "Elon Musk: Tesla Bot can solve labor shortage, but there’s no clear timeline",
        "description": "Elon Musk gave an update on Tesla Bot, Tesla’s upcoming humanoid robot project, and said that he believes it can solve the labor shortage issue. But the CEO is not committing to any timeline. Earlier this year, Musk announced plans for Tesla Bot, a humanoid r…",
        "url": "https://electrek.co/2021/12/07/elon-musk-tesla-bot-solve-labor-shortage-no-clear-timeline/",
        "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/Tesla-Bot-Hero-china.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2021-12-07T11:51:40Z",
        "content": "Elon Musk gave an update on Tesla Bot, Tesla’s upcoming humanoid robot project, and said that he believes it can solve the labor shortage issue.\r\nBut the CEO is not committing to any timeline.\r\nEarli… [+2392 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Faz.net"
        },
        "author": "Andreas Mihm",
        "title": "Erster Supermarkt in Kroatien verkauft Milch für Bitcoin",
        "description": "Als Spekulationsobjekt sind Kryptowährungen stark gefragt. Als Zahlungsmittel taugen sie bisher eher wenig. Kroatiens größer Lebensmittelhändler will das jetzt ändern.",
        "url": "https://www.faz.net/aktuell/finanzen/erster-supermarkt-in-kroatien-verkauft-milch-fuer-bitcoin-17671648.html",
        "urlToImage": "https://media1.faz.net/ppmedia/aktuell/2821841780/1.7671663/facebook_teaser/die-kroatische-supermarktkette.jpg",
        "publishedAt": "2021-12-07T11:44:11Z",
        "content": "Freunde von Kryptowährungen wie Bitcoin und Ether müssen nicht nur gegen starke Kursschwankungen wie zuletzt am Wochenende immun sein, sie haben mitunter auch Schwierigkeiten, ihr Geld gegen Ware zu … [+4542 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Motor.ru"
        },
        "author": "Анастасия Мельник",
        "title": "Посмотрите, как разгоняется Tesla Model S с тремя реактивными двигателями",
        "description": "Американский блогер Мэтт Микка опубликовал на своем YouTube-канале Warped Perceptions новое видео, в котором продемонстрировал результат 42-дневной работы. Инженер разработал три миниатюрных реактивных двигателя, которые установил на Tesla Model S. В результа…",
        "url": "https://motor.ru/news/turbotesla-07-12-2021.htm",
        "urlToImage": "https://motor.ru/thumb/1280x720/filters:quality(75)/imgs/2021/12/07/10/5080475/c32ea22d95052c6bb2454768923204f51e32da31.jpg",
        "publishedAt": "2021-12-07T11:42:55Z",
        "content": ", Model S . «», «» 3,5 . , , Tesla Model S."
    },
    {
        "source": {
            "id": null,
            "name": "Sozcu.com.tr"
        },
        "author": "Sözcü",
        "title": "Elon Musk duyurdu: 2022’de insanlara beyin çipleri yerleştirilebilecek",
        "description": "Son dönemde adı elektrikli araç markası Tesla ve kripto para ve Bitcoin ile ilgili yaptığı açıklamalarla gündeme gelen ünlü girişimci ve iş insanı Elon Musk’ın sahibi olduğu Neuralink isimli şirketten dikkat çekici bir hamle geldi. Elon Musk, beyin arayüzü te…",
        "url": "https://www.sozcu.com.tr/2021/teknoloji/elon-musk-duyurdu-2022de-insanlara-beyin-cipleri-yerlestirilebilecek-6812977/",
        "urlToImage": "https://i01.sozcucdn.com/wp-content/uploads/2021/12/07/iecrop/1_42-sixteen_nine_16_9_1638877252-670x371.jpg",
        "publishedAt": "2021-12-07T11:42:44Z",
        "content": "<ul><li>Yazlar büyüt</li><li>Yazlar küçült</li><li>Standart boyut</li></ul>\r\nSon dönemde ad elektrikli araç markas Tesla ve kripto para ve Bitcoin ile ilgili yapt açklamalarla gündeme gelen ünlü giri… [+2395 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Lefigaro.fr"
        },
        "author": "Le Figaro avec AFP",
        "title": "Intel veut faire entrer à Wall Street sa filiale de conduite autonome Mobileye",
        "description": "Le géant américain des semi-conducteurs Intel a annoncé qu'il comptait faire entrer à Wall Street, à la mi-2022, sa filiale israélienne Mobileye...",
        "url": "https://www.lefigaro.fr/flash-eco/intel-veut-faire-entrer-a-wall-street-sa-filiale-de-conduite-autonome-mobileye-20211207",
        "urlToImage": "https://i.f1g.fr/media/cms/704x396_cropupscale/2021/12/07/49676c88813c7331c58e87fd64d92b57e7ec12487d0cae598c76f076b3811146.jpg",
        "publishedAt": "2021-12-07T11:37:34Z",
        "content": "Le géant américain des semi-conducteurs Intel a annoncé qu'il comptait faire entrer à Wall Street, à la mi-2022, sa filiale israélienne Mobileye spécialisée dans les technologies de conduite autonome… [+1461 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Tesla, continua l'apertura dei Supercharger a terzi: abilitati clienti tedeschi e belgi, la prossima è la Norvegia",
        "description": "Continua il programma Tesla per aprire i Supercharger anche alle auto elettriche degli altri brand. La Norvegia dovrebbe essere il prossimo mercato per il progetto pilota, poiché mette sul piatto finanziamenti pubblici",
        "url": "https://auto.hwupgrade.it/news/soluzioni-ricarica/tesla-continua-l-apertura-dei-supercharger-a-terzi-abilitati-clienti-tedeschi-e-belgi-la-prossima-e-la-norvegia_103043.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/OsloMain.jpg",
        "publishedAt": "2021-12-07T11:30:16Z",
        "content": "All'inizio del mese di novembre Tesla aveva aperto la sua rete di ricarica veloceSupercharger anche ai proprietari di auto elettriche della concorrenza, iniziando con un progetto pilota in dieci loca… [+1698 chars]"
    },
    {
        "source": {
            "id": "handelsblatt",
            "name": "Handelsblatt"
        },
        "author": "Thomas Jahn",
        "title": "Elektromobilität: Tesla-Chef Elon Musk: „Lasst uns alle Subventionen abschaffen“",
        "description": "Der Tesla-Gründer spricht sich gegen Zuschüsse für Elektroautos oder Ladesäulen aus. Seine Erfahrungen in Deutschland dürften eine Rolle gespielt haben.",
        "url": "https://www.handelsblatt.com/unternehmen/industrie/elektromobilitaet-tesla-chef-elon-musk-lasst-uns-alle-subventionen-abschaffen/27869148.html",
        "urlToImage": "https://www.handelsblatt.com/images/elon-musk-in-gruenheide/27869266/4-format2003.jpg",
        "publishedAt": "2021-12-07T11:27:39Z",
        "content": "Aber Musk spricht sich gegen das Gesetzespaket mit dem Namen Build Back Better aus, das derzeit im US-Senat verhandelt wird und mit dem insgesamt zwei Billionen Dollar ausgegeben werden sollen.Der Gr… [+2772 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Sam Shead",
        "title": "Intel plans to take self-driving car unit public in the U.S. in mid-2022",
        "description": "Intel has announced that it plans to list Mobileye, the Israeli autonomous driving firm it acquired for $15.3 billion in 2017.",
        "url": "https://www.cnbc.com/2021/12/07/intel-plans-to-take-self-driving-car-unit-public-in-the-us-in-2022.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/106913978-16268192682021-07-20t192606z_1895303704_rc2ioo9l1187_rtrmadp_0_mobileye-autonomous.jpeg?v=1626819349",
        "publishedAt": "2021-12-07T11:26:00Z",
        "content": "Intel has announced that it plans to list Mobileye, the Israeli autonomous driving firm it acquired for $15.3 billion in 2017 as part of an effort to branch out into new markets.\r\nThe Santa Clara chi… [+2354 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Electrek"
        },
        "author": "Fred Lambert",
        "title": "Elon Musk calls for Senate not to pass the Build Back Better act: ‘Tesla doesn’t need the $7,500’",
        "description": "Elon Musk calls for the Senate not to pass the $2 trillion Build Back Better act and says Tesla doesn’t need the $7,500 tax credit for electric vehicles.\nHowever, his concerns appear to be more about federal spending and the deficit.\n more…\nThe post Elon Musk…",
        "url": "https://electrek.co/2021/12/07/elon-musk-senate-not-pass-build-back-better-act-tesla-doesnt-need/",
        "urlToImage": "https://i1.wp.com/electrek.co/wp-content/uploads/sites/3/2020/09/Tesla-CEO-Elon-Musk.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2021-12-07T11:22:35Z",
        "content": "Elon Musk calls for the Senate not to pass the $2 trillion Build Back Better act and says Tesla doesn’t need the $7,500 tax credit for electric vehicles.\r\nHowever, his concerns appear to be more abou… [+3343 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "FRANCE 24 English"
        },
        "author": "FRANCE 24",
        "title": "Les inégalités mondiales face au patrimoine \"stratosphérique\" d'une petite caste",
        "description": "Le rapport 2022 sur les inégalités du World Inequality Lab, publié mardi, souligne que les ultra-riches ont énormément profité de la crise sanitaire du Covid-19, qui a creusé encore davantage les inégalités de patrimoine. Pour y remédier, les économistes ayan…",
        "url": "https://www.france24.com/fr/%C3%A9co-tech/20211207-les-in%C3%A9galit%C3%A9s-mondiales-face-au-patrimoine-stratosph%C3%A9rique-d-une-petite-caste",
        "urlToImage": "https://s.france24.com/media/display/f87c5d3c-abf9-11ea-8a17-005056a964fe/w:1280/p:16x9/tiny-men-argent.jpg",
        "publishedAt": "2021-12-07T11:22:18Z",
        "content": "Le rapport 2022 sur les inégalités du World Inequality Lab, publié mardi, souligne que les ultra-riches ont énormément profité de la crise sanitaire du Covid-19, qui a creusé encore davantage les iné… [+6232 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "City A.M."
        },
        "author": "Crypto AM Daily in association with Luno",
        "title": "Bitcoin’s return to form continues as global markets recover",
        "description": "Bitcoin continued its steady recovery yesterday. It’s currently changing hands for more than $51k, up eight per cent over the past 24 hours.\nThe post Bitcoin’s return to form continues as global markets recover appeared first on CityAM.",
        "url": "https://www.cityam.com/bitcoins-return-to-form-continues-as-global-markets-recover/",
        "urlToImage": "https://www.cityam.com/wp-content/uploads/2021/11/crypto-am-daily-5.jpeg",
        "publishedAt": "2021-12-07T11:18:27Z",
        "content": "Tuesday 07 December 2021 11:18 am\r\nBitcoin continued its steady recovery yesterday. Its currently changing hands for more than $51k, up eight per cent over the past 24 hours. The largest cryptocurren… [+5459 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "bgriffiths@insider.com (Brent D. Griffiths)",
        "title": "10 Things in Politics: Biden boycotts China's Olympics",
        "description": "And New York plans to impose a sweeping vaccine mandate.",
        "url": "https://www.businessinsider.com/10-things-in-politics-biden-boycotts-chinas-olympics-2021-12",
        "urlToImage": "https://i.insider.com/61ae59637802650019c8e100?width=1200&format=jpeg",
        "publishedAt": "2021-12-07T11:09:41Z",
        "content": "Welcome back to 10 Things in Politics. Sign up here to receive this newsletter. Plus, download Insider's app for news on the go click here for iOS and here for Android. Send tips to bgriffiths@inside… [+7478 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Wire"
        },
        "author": null,
        "title": "Leading Ag Tech Startup Iron Ox Appoints Impossible Foods and Tesla Veteran Myra Pasek as General Counsel",
        "description": "SAN CARLOS, Calif.--(BUSINESS WIRE)--Iron Ox, a farming innovation company with deep expertise in plant science, robotics and artificial intelligence, has hired former Impossible Foods and Tesla executive Myra Pasek as General Counsel. Pasek joins the industr…",
        "url": "https://www.businesswire.com/news/home/20211207005456/en/Leading-Ag-Tech-Startup-Iron-Ox-Appoints-Impossible-Foods-and-Tesla-Veteran-Myra-Pasek-as-General-Counsel",
        "urlToImage": "https://mms.businesswire.com/media/20211207005456/en/933574/23/Myra.jpg",
        "publishedAt": "2021-12-07T11:05:09Z",
        "content": "SAN CARLOS, Calif.--(BUSINESS WIRE)--Iron Ox, a farming innovation company with deep expertise in plant science, robotics and artificial intelligence, has hired former Impossible Foods and Tesla exec… [+4467 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Notebookcheck.net"
        },
        "author": "Daniel Zlatev",
        "title": "Tesla investigated by the SEC over disclosure of fire hazard in SolarCity panel installations",
        "description": "An ex-SolarCity quality assurance employee has filed a lawsuit against Tesla Energy arguing criminal negligence regarding faulty solar roof installations that caused residential and commercial fires. In complaints filed before the Securities and Exchange Comm…",
        "url": "https://www.notebookcheck.net/Tesla-investigated-by-the-SEC-over-disclosure-of-fire-hazard-in-SolarCity-panel-installations.583388.0.html",
        "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Solar_city_roof_Tesla.jpg",
        "publishedAt": "2021-12-07T11:03:00Z",
        "content": "Tesla's swift purchase of SolarCity back in 2016 may have been a little too quick, as the U.S. Securities and Exchange Commission has now initiated a probe into the solar roofing division. The invest… [+1952 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "Moira Forbes, Forbes Staff, \n Moira Forbes, Forbes Staff\n https://www.forbes.com/sites/moiraforbes/",
        "title": "The World’s 100 Most Powerful Women: Redefining The Face Of Power In 2021",
        "description": "Meet the world's most powerful women of 2021, Forbes’ definitive audit of the foremost female CEOs, entrepreneurs, philanthropists and policy makers, who are solving for society’s most intractable problems and steering the world toward a stronger post-pandemi…",
        "url": "https://www.forbes.com/sites/moiraforbes/2021/12/07/the-worlds-100-most-powerful-women-redefining-the-face-of-power-in-2021/",
        "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61af3c91f2f2f921bc3e57db%2F0x0.jpg",
        "publishedAt": "2021-12-07T11:00:38Z",
        "content": "The thing that immediately jumps out on this years list of the Worlds 100 Most Powerful Women is who is now at the top and who is not. Serving an astonishing 16 years at the helm of Europes most powe… [+5937 chars]"
    },
    {
        "source": {
            "id": "the-hill",
            "name": "The Hill"
        },
        "author": "Rafael Bernal",
        "title": "Mexico compares Biden electric car tax credits to Trump's tariff threat",
        "description": "Mexico is ratcheting up pressure against electric vehicle (EV) tax credits for American-built cars, a measure in President Biden's signature Build Back Better bill that some Mexican officials a...",
        "url": "https://thehill.com/policy/energy-environment/584616-mexico-compares-biden-electric-car-tax-credits-to-trumps-tariff",
        "urlToImage": "https://thehill.com/sites/default/files/article_images/072810ap-paul-sakuma_ev.jpg",
        "publishedAt": "2021-12-07T11:00:27Z",
        "content": "Mexico is ratcheting up pressure against electric vehicle (EV) tax credits for American-built cars, a measure in President BidenJoe BidenMan sentenced to nearly four years for running scam Trump, Bid… [+7040 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Phonandroid"
        },
        "author": "William Zimmer",
        "title": "Mazda 2 Hybrid : le clone de la Toyota Yaris arrive au printemps 2022 en Europe",
        "description": "Mazda vient de dévoiler sa Mazda 2 Hybrid basée sur la Toyota Yaris. Elle dispose d'un système hybride à recharge automatique complet et sera vendu aux côtés de la Mazda 2 2022 ordinaire en Europe au...",
        "url": "https://www.phonandroid.com/mazda-2-hybrid-le-clone-de-la-toyota-yaris-arrive-au-printemps-2022-en-europe.html",
        "urlToImage": "https://img.phonandroid.com/2021/12/Mazda-2-Hybrid.jpg",
        "publishedAt": "2021-12-07T11:00:11Z",
        "content": "Mazda vient de dévoiler sa Mazda 2 Hybrid basée sur la Toyota Yaris. Elle dispose d'un système hybride à recharge automatique complet et sera vendu aux côtés de la Mazda 2 2022 ordinaire en Europe au… [+1936 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gizmodo Australia"
        },
        "author": "Matt Novak",
        "title": "MyCryptoWallet Collapses and Leaves Bitcoin Traders Stranded: Report",
        "description": "MyCryptoWallet, an Australia-based cryptocurrency exchange that allowed users to buy and sell coins like ether and bitcoin, has collapsed and...\nThe post MyCryptoWallet Collapses and Leaves Bitcoin Traders Stranded: Report appeared first on Gizmodo Australia.…",
        "url": "https://www.gizmodo.com.au/2021/12/mycryptowallet-collapses-and-leaves-bitcoin-traders-stranded-report/",
        "urlToImage": "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/12/07/8b23a1a3c51fc4983c06b093c93b5696-scaled.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
        "publishedAt": "2021-12-07T11:00:00Z",
        "content": "MyCryptoWallet, an Australia-based cryptocurrency exchange that allowed users to buy and sell coins like ether and bitcoin, has collapsed and left users without access to funds, according to multiple… [+2448 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "jerb@insider.com (Jordan Parker Erb)",
        "title": "10 things in tech you need to know today",
        "description": "New revelations have emerged about Elon Musk's Autopilot push, and DoorDash rolled out ultrafast delivery in NYC: 10 things in tech you need to know.",
        "url": "https://www.businessinsider.com/10-things-in-tech-you-need-to-know-today-7-2021-12",
        "urlToImage": "https://i.insider.com/61ae886b7db53500184cac58?width=1200&format=jpeg",
        "publishedAt": "2021-12-07T11:00:00Z",
        "content": "Howdy. We're covering new revelations about Elon Musk's push for Autopilot, and a flying car that you have to partially assemble yourself.\r\nLet's get to it.\r\nIf this was forwarded to you, sign up her… [+4072 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Leganerd.com"
        },
        "author": "Umberto Stentella",
        "title": "Tesla vuole aprire la sua rete Supercharger a tutte le auto elettriche anche in Norvegia",
        "description": "Dopo l’Olanda, Tesla ore vuole testare l’apertura a tutte le auto della sua rete Supercharger anche in Norvegia. In attesa dell’ufficialità del progetto, la casa automobilistica ha iniziato a dialogare con il governo locale. Tesla vuole mettere a disposizione…",
        "url": "https://leganerd.com/2021/12/07/tesla-vuole-aprire-la-sua-rete-supercharger-a-tutte-le-auto-elettriche-anche-in-norvegia/",
        "urlToImage": "https://leganerd.com/wp-content/uploads/2021/06/tesla-supercharger.jpg",
        "publishedAt": "2021-12-07T10:57:42Z",
        "content": "Dopo l’Olanda, Tesla ore vuole testare l’apertura a tutte le auto della sua rete Supercharger anche in Norvegia. In attesa dell’ufficialità del progetto, la casa automobilistica ha iniziato a dialoga… [+1410 chars]"
    }
]

const App = () => {

    // {안에는 함수,상태값들이 들어간다.
    const [newsListDate, setNewsListDate] = useState([])
    //
    // const [bdate, setBDate] = useState(22)
    //
    // const [cdate, setCDate] = useState(0)
    //
    // //자신이 이름을 정하고 변수를 입력.
    // const changeText = () => {
    //     setCDate(adate+bdate)
    // }

    const getnewsList = () => {
        setNewsListDate(newsList)
    }
    
  return (
      <div className={"App"}>
          {newsListDate.map(news => (
              <h1>
                  {news.name}
                  {news.author}
              </h1>


          ))}
          <button onClick={getnewsList}>
              뉴스 불러오기.
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
