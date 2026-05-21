const fs = require('fs');

const teamExtras = {
  'Mexique': {
    stars: [{nom:'Hirving Lozano',club:'PSV'},{nom:'Santiago Giménez',club:'Feyenoord'},{nom:'Edson Álvarez',club:'West Ham'}],
    buteurs: [{nom:'Javier Hernandez',buts:52},{nom:'Cuauhtémoc Blanco',buts:38},{nom:'Luis Hernandez',buts:35}],
    passeurs: [{nom:'Cuauhtémoc Blanco',passes:45},{nom:'Pavel Pardo',passes:32},{nom:'Andrés Guardado',passes:30}]
  },
  'Afrique du Sud': {
    stars: [{nom:'Percy Tau',club:'Al Ahly'},{nom:'Ronwen Williams',club:'Mamelodi Sundowns'},{nom:'Themba Zwane',club:'Mamelodi Sundowns'}],
    buteurs: [{nom:'Benni McCarthy',buts:31},{nom:'Shaun Bartlett',buts:28},{nom:'Phil Masinga',buts:18}],
    passeurs: [{nom:'Steven Pienaar',passes:25},{nom:'Siyabonga Nomvethe',passes:18},{nom:'Quinton Fortune',passes:15}]
  },
  'Brésil': {
    stars: [{nom:'Vinícius Jr.',club:'Real Madrid'},{nom:'Rodrygo',club:'Real Madrid'},{nom:'Endrick',club:'Real Madrid'}],
    buteurs: [{nom:'Ronaldo',buts:62},{nom:'Pelé',buts:77},{nom:'Romário',buts:55}],
    passeurs: [{nom:'Pelé',passes:53},{nom:'Ronaldinho',passes:40},{nom:'Kaká',passes:36}]
  },
  'Argentine': {
    stars: [{nom:'Lionel Messi',club:'Inter Miami'},{nom:'Julián Álvarez',club:'Atlético Madrid'},{nom:'Enzo Fernández',club:'Chelsea'}],
    buteurs: [{nom:'Lionel Messi',buts:109},{nom:'Gabriel Batistuta',buts:54},{nom:'Sergio Agüero',buts:42}],
    passeurs: [{nom:'Lionel Messi',passes:58},{nom:'Diego Maradona',passes:35},{nom:'Juan Román Riquelme',passes:30}]
  },
  'France': {
    stars: [{nom:'Kylian Mbappé',club:'Real Madrid'},{nom:'Antoine Griezmann',club:'Atlético Madrid'},{nom:'Aurélien Tchouaméni',club:'Real Madrid'}],
    buteurs: [{nom:'Thierry Henry',buts:51},{nom:'Michel Platini',buts:41},{nom:'Kylian Mbappé',buts:48}],
    passeurs: [{nom:'Zinedine Zidane',passes:36},{nom:'Michel Platini',passes:38},{nom:'Thierry Henry',passes:35}]
  },
  'Allemagne': {
    stars: [{nom:'Florian Wirtz',club:'Bayer Leverkusen'},{nom:'Jamal Musiala',club:'Bayern Munich'},{nom:'Antonio Rüdiger',club:'Real Madrid'}],
    buteurs: [{nom:'Miroslav Klose',buts:71},{nom:'Gerd Müller',buts:68},{nom:'Lukas Podolski',buts:49}],
    passeurs: [{nom:'Lothar Matthäus',passes:40},{nom:'Michael Ballack',passes:35},{nom:'Mesut Özil',passes:40}]
  },
  'Espagne': {
    stars: [{nom:'Pedri',club:'FC Barcelona'},{nom:'Lamine Yamal',club:'FC Barcelona'},{nom:'Rodri',club:'Manchester City'}],
    buteurs: [{nom:'David Villa',buts:59},{nom:'Raúl',buts:44},{nom:'Fernando Torres',buts:38}],
    passeurs: [{nom:'Xavi Hernández',passes:52},{nom:'Andrés Iniesta',passes:35},{nom:'David Silva',passes:40}]
  },
  'Portugal': {
    stars: [{nom:'Cristiano Ronaldo',club:'Al Nassr'},{nom:'Bruno Fernandes',club:'Manchester United'},{nom:'Rafael Leão',club:'AC Milan'}],
    buteurs: [{nom:'Cristiano Ronaldo',buts:135},{nom:'Pauleta',buts:47},{nom:'Eusébio',buts:41}],
    passeurs: [{nom:'Cristiano Ronaldo',passes:45},{nom:'Luís Figo',passes:38},{nom:'Bruno Fernandes',passes:32}]
  },
  'Angleterre': {
    stars: [{nom:'Harry Kane',club:'Bayern Munich'},{nom:'Jude Bellingham',club:'Real Madrid'},{nom:'Phil Foden',club:'Manchester City'}],
    buteurs: [{nom:'Wayne Rooney',buts:53},{nom:'Harry Kane',buts:68},{nom:'Gary Lineker',buts:48}],
    passeurs: [{nom:'David Beckham',passes:42},{nom:'Frank Lampard',passes:38},{nom:'Steven Gerrard',passes:35}]
  },
  'Italie': {
    stars: [{nom:'Gianluigi Donnarumma',club:'PSG'},{nom:'Federico Chiesa',club:'Liverpool'},{nom:'Nicolò Barella',club:'Inter Milan'}],
    buteurs: [{nom:'Luigi Riva',buts:35},{nom:'Roberto Baggio',buts:27},{nom:'Alessandro Del Piero',buts:27}],
    passeurs: [{nom:'Andrea Pirlo',passes:42},{nom:'Francesco Totti',passes:38},{nom:'Roberto Baggio',passes:30}]
  },
  'Pays-Bas': {stars: [{nom:'Virgil van Dijk',club:'Liverpool'},{nom:'Cody Gakpo',club:'Liverpool'},{nom:'Xavi Simons',club:'RB Leipzig'}],
    buteurs: [{nom:'Patrick Kluivert',buts:40},{nom:'Ruud van Nistelrooy',buts:35},{nom:'Robin van Persie',buts:50}],
    passeurs: [{nom:'Johan Cruyff',passes:42},{nom:'Dennis Bergkamp',passes:37},{nom:'Wesley Sneijder',passes:35}]
  },
  'Belgique': {
    stars: [{nom:'Kevin De Bruyne',club:'Manchester City'},{nom:'Romelu Lukaku',club:'AS Roma'},{nom:'Lois Openda',club:'RB Leipzig'}],
    buteurs: [{nom:'Romelu Lukaku',buts:85},{nom:'Eden Hazard',buts:33},{nom:'Kevin De Bruyne',buts:26}],
    passeurs: [{nom:'Kevin De Bruyne',passes:55},{nom:'Eden Hazard',passes:40},{nom:'Jan Vertonghen',passes:25}]
  },
  'Uruguay': {
    stars: [{nom:'Darwin Núñez',club:'Liverpool'},{nom:'Federico Valverde',club:'Real Madrid'},{nom:'Ronald Araújo',club:'FC Barcelona'}],
    buteurs: [{nom:'Luis Suárez',buts:68},{nom:'Diego Forlán',buts:36},{nom:'Óscar Míguez',buts:28}],
    passeurs: [{nom:'Diego Forlán',passes:25},{nom:'Luis Suárez',passes:35},{nom:'Enzo Francescoli',passes:30}]
  },
  'Corée du Sud': {
    stars: [{nom:'Son Heung-min',club:'Tottenham'},{nom:'Lee Kang-in',club:'PSG'},{nom:'Kim Min-jae',club:'Bayern Munich'}],
    buteurs: [{nom:'Cha Bum-kun',buts:58},{nom:'Son Heung-min',buts:42},{nom:'Park Ji-sung',buts:13}],
    passeurs: [{nom:'Park Ji-sung',passes:28},{nom:'Son Heung-min',passes:35},{nom:'Lee Young-pyo',passes:20}]
  },
  'Japon': {
    stars: [{nom:'Takefusa Kubo',club:'Real Sociedad'},{nom:'Kaoru Mitoma',club:'Brighton'},{nom:'Ritsu Doan',club:'Freiburg'}],
    buteurs: [{nom:'Kunishige Kamamoto',buts:75},{nom:'Shinji Okazaki',buts:50},{nom:'Keisuke Honda',buts:37}],
    passeurs: [{nom:'Keisuke Honda',passes:37},{nom:'Shunsuke Nakamura',passes:30},{nom:'Hidetoshi Nakata',passes:28}]
  },
  'Maroc': {
    stars: [{nom:'Achraf Hakimi',club:'PSG'},{nom:'Hakim Ziyech',club:'Galatasaray'},{nom:'Sofiane Boufal',club:'Southampton'}],
    buteurs: [{nom:'Hicham Zerouali',buts:18},{nom:'Salaheddine Bassir',buts:16},{nom:'Youssef En-Nesyri',buts:18}],
    passeurs: [{nom:'Mustapha Hadji',passes:22},{nom:'Hakim Ziyech',passes:25},{nom:'Achraf Hakimi',passes:20}]
  },
  'Sénégal': {
    stars: [{nom:'Sadio Mané',club:'Al Nassr'},{nom:'Édouard Mendy',club:'Al Ahli'},{nom:'Ismaïla Sarr',club:'Crystal Palace'}],
    buteurs: [{nom:'Sadio Mané',buts:38},{nom:'Henri Camara',buts:29},{nom:'Moussa Sow',buts:22}],
    passeurs: [{nom:'Sadio Mané',passes:28},{nom:'Cheikhou Kouyaté',passes:18},{nom:'Papa Bouba Diop',passes:15}]
  },
  'Ghana': {
    stars: [{nom:'Mohammed Kudus',club:'West Ham'},{nom:'Thomas Partey',club:'Arsenal'},{nom:'Jordan Ayew',club:'Leicester'}],
    buteurs: [{nom:'Asamoah Gyan',buts:51},{nom:'Abedi Pelé',buts:33},{nom:'Tony Yeboah',buts:29}],
    passeurs: [{nom:'Abedi Pelé',passes:35},{nom:'Michael Essien',passes:22},{nom:'André Ayew',passes:20}]
  },
  'Cameroun': {
    stars: [{nom:'André Onana',club:'Manchester United'},{nom:'Vincent Aboubakar',club:'Al Qadsiah'},{nom:'Bryan Mbeumo',club:'Brentford'}],
    buteurs: [{nom:'Samuel Eto\'o',buts:56},{nom:'Roger Milla',buts:43},{nom:'Patrick Mboma',buts:33}],
    passeurs: [{nom:'Samuel Eto\'o',passes:30},{nom:'Marc-Vivien Foé',passes:22},{nom:'Rigobert Song',passes:18}]
  },
  'Côte d\'Ivoire': {
    stars: [{nom:'Sébastien Haller',club:'Borussia Dortmund'},{nom:'Franck Kessié',club:'Al Ahli'},{nom:'Simon Adingra',club:'Brighton'}],
    buteurs: [{nom:'Didier Drogba',buts:65},{nom:'Salomon Kalou',buts:28},{nom:'Arouna Koné',buts:24}],
    passeurs: [{nom:'Didier Zokora',passes:20},{nom:'Yaya Touré',passes:32},{nom:'Didier Drogba',passes:25}]
  },
  'Nigeria': {
    stars: [{nom:'Victor Osimhen',club:'Galatasaray'},{nom:'Ademola Lookman',club:'Atalanta'},{nom:'William Troost-Ekong',club:'Watford'}],buteurs: [{nom:'Rashidi Yekini',buts:37},{nom:'Julius Aghahowa',buts:14},{nom:'Victor Osimhen',buts:22}],
    passeurs: [{nom:'Jay-Jay Okocha',passes:35},{nom:'Nwankwo Kanu',passes:28},{nom:'Mikel John Obi',passes:20}]
  },
  'États-Unis': {
    stars: [{nom:'Christian Pulisic',club:'AC Milan'},{nom:'Weston McKennie',club:'Juventus'},{nom:'Tyler Adams',club:'Bournemouth'}],
    buteurs: [{nom:'Landon Donovan',buts:57},{nom:'Clint Dempsey',buts:57},{nom:'Brian McBride',buts:30}],
    passeurs: [{nom:'Landon Donovan',passes:58},{nom:'Claudio Reyna',passes:30},{nom:'Christian Pulisic',passes:28}]
  },
  'Canada': {
    stars: [{nom:'Alphonso Davies',club:'Bayern Munich'},{nom:'Jonathan David',club:'LOSC Lille'},{nom:'Tajon Buchanan',club:'Inter Milan'}],
    buteurs: [{nom:'Dwayne De Rosario',buts:22},{nom:'Jonathan David',buts:32},{nom:'Cyle Larin',buts:26}],
    passeurs: [{nom:'Alphonso Davies',passes:25},{nom:'Atiba Hutchinson',passes:28},{nom:'Scott Arfield',passes:15}]
  },
  'Australie': {
    stars: [{nom:'Mat Ryan',club:'Real Sociedad'},{nom:'Mitchell Duke',club:'Fagiano Okayama'},{nom:'Ajdin Hrustic',club:'Hellas Verona'}],
    buteurs: [{nom:'Tim Cahill',buts:50},{nom:'John Aloisi',buts:27},{nom:'Harry Kewell',buts:17}],
    passeurs: [{nom:'Harry Kewell',passes:25},{nom:'Tim Cahill',passes:20},{nom:'Mark Viduka',passes:18}]
  },
  'Arabie Saoudite': {
    stars: [{nom:'Salem Al-Dawsari',club:'Al-Hilal'},{nom:'Mohammed Al-Owais',club:'Al-Hilal'},{nom:'Firas Al-Buraikan',club:'Al-Fateh'}],
    buteurs: [{nom:'Yasser Al-Qahtani',buts:46},{nom:'Sami Al-Jaber',buts:44},{nom:'Salem Al-Dawsari',buts:25}],
    passeurs: [{nom:'Sami Al-Jaber',passes:30},{nom:'Yasser Al-Qahtani',passes:28},{nom:'Nawaf Al-Temyat',passes:22}]
  },
  'Iran': {
    stars: [{nom:'Sardar Azmoun',club:'Bayer Leverkusen'},{nom:'Mehdi Taremi',club:'Inter Milan'},{nom:'Alireza Jahanbakhsh',club:'Feyenoord'}],
    buteurs: [{nom:'Ali Daei',buts:109},{nom:'Mehdi Taremi',buts:48},{nom:'Karim Bagheri',buts:50}],
    passeurs: [{nom:'Karim Bagheri',passes:35},{nom:'Javad Nekounam',passes:30},{nom:'Mehdi Taremi',passes:25}]
  },
  'Suisse': {
    stars: [{nom:'Granit Xhaka',club:'Bayer Leverkusen'},{nom:'Xherdan Shaqiri',club:'Chicago Fire'},{nom:'Yann Sommer',club:'Inter Milan'}],
    buteurs: [{nom:'Alexander Frei',buts:42},{nom:'Kubilay Türkyilmaz',buts:34},{nom:'Xherdan Shaqiri',buts:32}],
    passeurs: [{nom:'Granit Xhaka',passes:30},{nom:'Xherdan Shaqiri',passes:35},{nom:'Blaise Nkufo',passes:20}]
  },
  'Croatie': {
    stars: [{nom:'Luka Modrić',club:'Real Madrid'},{nom:'Ivan Perišić',club:'Hajduk Split'},{nom:'Mateo Kovačić',club:'Manchester City'}],
    buteurs: [{nom:'Davor Šuker',buts:45},{nom:'Ivan Perišić',buts:33},{nom:'Mario Mandžukić',buts:33}],
    passeurs: [{nom:'Luka Modrić',passes:42},{nom:'Ivan Rakitić',passes:35},{nom:'Zvonimir Boban',passes:30}]
  },
  'Serbie': {
    stars: [{nom:'Dušan Vlahović',club:'Juventus'},{nom:'Aleksandar Mitrović',club:'Al-Hilal'},{nom:'Sergej Milinković-Savić',club:'Al-Hilal'}],
    buteurs: [{nom:'Aleksandar Mitrović',buts:58},{nom:'Savo Milošević',buts:37},{nom:'Dušan Vlahović',buts:22}],
    passeurs: [{nom:'Dragan Džajić',passes:32},{nom:'Sergej Milinković-Savić',passes:30},{nom:'Dejan Stanković',passes:28}]
  },
  'Pologne': {
    stars: [{nom:'Robert Lewandowski',club:'FC Barcelona'},{nom:'Piotr Zieliński',club:'Inter Milan'},{nom:'Wojciech Szczęsny',club:'FC Barcelona'}],
    buteurs: [{nom:'Robert Lewandowski',buts:82},{nom:'Włodzimierz Lubański',buts:48},{nom:'Grzegorz Lato',buts:45}],
    passeurs: [{nom:'Zbigniew Boniek',passes:35},{nom:'Kazimierz Deyna',passes:32},{nom:'Robert Lewandowski',passes:30}]
  },
  'Danemark': {
    stars: [{nom:'Christian Eriksen',club:'Manchester United'},{nom:'Pierre-Emile Højbjerg',club:'Atletico Madrid'},{nom:'Rasmus Højlund',club:'Manchester United'}],buteurs: [{nom:'Poul Nielsen',buts:52},{nom:'Jon Dahl Tomasson',buts:52},{nom:'Ebbe Sand',buts:25}],
    passeurs: [{nom:'Michael Laudrup',passes:42},{nom:'Christian Eriksen',passes:38},{nom:'Brian Laudrup',passes:30}]
  },
  'Autriche': {
    stars: [{nom:'David Alaba',club:'Real Madrid'},{nom:'Marcel Sabitzer',club:'Borussia Dortmund'},{nom:'Marko Arnautović',club:'Inter Milan'}],
    buteurs: [{nom:'Toni Polster',buts:44},{nom:'Hans Krankl',buts:34},{nom:'Marko Arnautović',buts:26}],
    passeurs: [{nom:'Andreas Herzog',passes:26},{nom:'David Alaba',passes:22},{nom:'Ernst Happel',passes:20}]
  },
  'Écosse': {
    stars: [{nom:'Andrew Robertson',club:'Liverpool'},{nom:'Scott McTominay',club:'Napoli'},{nom:'Kieran Tierney',club:'Real Sociedad'}],
    buteurs: [{nom:'Denis Law',buts:30},{nom:'Kenny Dalglish',buts:30},{nom:'Ally McCoist',buts:19}],
    passeurs: [{nom:'Kenny Dalglish',passes:28},{nom:'Barry Ferguson',passes:22},{nom:'Scott McTominay',passes:15}]
  },
  'Turquie': {
    stars: [{nom:'Hakan Çalhanoğlu',club:'Inter Milan'},{nom:'Arda Güler',club:'Real Madrid'},{nom:'Kenan Yıldız',club:'Juventus'}],
    buteurs: [{nom:'Hakan Şükür',buts:51},{nom:'Tuncay Şanlı',buts:32},{nom:'Burhan Emir',buts:20}],
    passeurs: [{nom:'Hakan Şükür',passes:28},{nom:'Hakan Çalhanoğlu',passes:30},{nom:'İlhan Mansız',passes:22}]
  },
  'Roumanie': {
    stars: [{nom:'Radu Drăgușin',club:'Tottenham'},{nom:'Florin Tănase',club:'Al-Qadsiah'},{nom:'Nicușor Stanciu',club:'Wuhan'}],
    buteurs: [{nom:'Gheorghe Hagi',buts:35},{nom:'Adrian Mutu',buts:35},{nom:'Ion Oblemenco',buts:20}],
    passeurs: [{nom:'Gheorghe Hagi',passes:40},{nom:'Dan Petrescu',passes:25},{nom:'Adrian Mutu',passes:22}]
  },
  'Hongrie': {
    stars: [{nom:'Dominik Szoboszlai',club:'Liverpool'},{nom:'Roland Sallai',club:'Freiburg'},{nom:'Péter Gulácsi',club:'RB Leipzig'}],
    buteurs: [{nom:'Ferenc Puskás',buts:84},{nom:'Sándor Kocsis',buts:75},{nom:'Imre Schlosser',buts:59}],
    passeurs: [{nom:'Ferenc Puskás',passes:45},{nom:'Nándor Hidegkuti',passes:35},{nom:'Dominik Szoboszlai',passes:20}]
  },
  'Ukraine': {
    stars: [{nom:'Mykhailo Mudryk',club:'Chelsea'},{nom:'Viktor Tsyhankov',club:'Girona'},{nom:'Ruslan Malinovskyi',club:'Atalanta'}],
    buteurs: [{nom:'Andriy Shevchenko',buts:48},{nom:'Serhiy Rebrov',buts:15},{nom:'Andriy Voronin',buts:11}],
    passeurs: [{nom:'Andriy Shevchenko',passes:30},{nom:'Oleksandr Zinchenko',passes:22},{nom:'Serhiy Rebrov',passes:18}]
  },
  'Slovaquie': {
    stars: [{nom:'Marek Hamšík',club:'retraité'},{nom:'Milan Škriniar',club:'PSG'},{nom:'Dávid Hancko',club:'Feyenoord'}],
    buteurs: [{nom:'Robert Vittek',buts:23},{nom:'Marek Hamšík',buts:26},{nom:'Szilveszter Stúber',buts:12}],
    passeurs: [{nom:'Marek Hamšík',passes:35},{nom:'Vladimír Weiss',passes:18},{nom:'Milan Škriniar',passes:12}]
  },
  'Albanie': {
    stars: [{nom:'Armando Broja',club:'Chelsea'},{nom:'Klaus Gjasula',club:'Schalke'},{nom:'Kristjan Asllani',club:'Inter Milan'}],
    buteurs: [{nom:'Erjon Bogdani',buts:18},{nom:'Alban Bushi',buts:12},{nom:'Armando Broja',buts:8}],
    passeurs: [{nom:'Lorik Cana',passes:15},{nom:'Erjon Bogdani',passes:14},{nom:'Kristjan Asllani',passes:10}]
  },
  'Géorgie': {
    stars: [{nom:'Khvicha Kvaratskhelia',club:'PSG'},{nom:'Giorgi Mamardashvili',club:'Valencia'},{nom:'Georges Mikautadze',club:'Ajax'}],
    buteurs: [{nom:'Shota Arveladze',buts:26},{nom:'Georges Mikautadze',buts:18},{nom:'Levan Kobiashvili',buts:12}],
    passeurs: [{nom:'Levan Kobiashvili',passes:20},{nom:'Khvicha Kvaratskhelia',passes:18},{nom:'Jaba Kankava',passes:15}]
  },
  'Slovénie': {
    stars: [{nom:'Jan Oblak',club:'Atlético Madrid'},{nom:'Benjamin Šeško',club:'RB Leipzig'},{nom:'Adam Gnezda Čerin',club:'Panathinaikos'}],
    buteurs: [{nom:'Zlatko Zahovič',buts:35},{nom:'Benjamin Šeško',buts:15},{nom:'Valter Birsa',buts:12}],passeurs: [{nom:'Zlatko Zahovič',passes:30},{nom:'Jan Oblak',passes:5},{nom:'Robert Koren',passes:18}]
  },
  'Rép. Tchèque': {
    stars: [{nom:'Patrik Schick',club:'Bayer Leverkusen'},{nom:'Tomáš Souček',club:'West Ham'},{nom:'Vladimír Coufal',club:'West Ham'}],
    buteurs: [{nom:'Jan Koller',buts:55},{nom:'Patrik Berger',buts:18},{nom:'Patrik Schick',buts:30}],
    passeurs: [{nom:'Pavel Nedvěd',passes:35},{nom:'Tomáš Rosický',passes:30},{nom:'Karel Poborský',passes:25}]
  },
  'Bosnie-Herzégovine': {
    stars: [{nom:'Edin Džeko',club:'Fenerbahçe'},{nom:'Miralem Pjanić',club:'retraité'},{nom:'Sead Kolašinac',club:'Marseille'}],
    buteurs: [{nom:'Edin Džeko',buts:63},{nom:'Elvir Bolić',buts:22},{nom:'Vedad Ibišević',buts:20}],
    passeurs: [{nom:'Miralem Pjanić',passes:38},{nom:'Edin Džeko',passes:28},{nom:'Hasan Salihamidžić',passes:18}]
  },
  'Qatar': {
    stars: [{nom:'Akram Afif',club:'Al-Sadd'},{nom:'Almoez Ali',club:'Al-Duhail'},{nom:'Hassan Al-Haydos',club:'Al-Sadd'}],
    buteurs: [{nom:'Almoez Ali',buts:42},{nom:'Hassan Al-Haydos',buts:38},{nom:'Sebastián Soria',buts:28}],
    passeurs: [{nom:'Hassan Al-Haydos',passes:30},{nom:'Akram Afif',passes:25},{nom:'Khalfan Ibrahim',passes:20}]
  },
  'Nouvelle-Zélande': {
    stars: [{nom:'Chris Wood',club:'Nottingham Forest'},{nom:'Clayton Lewis',club:'Udinese'},{nom:'Joe Bell',club:'Nashville SC'}],
    buteurs: [{nom:'Vaughan Coveny',buts:28},{nom:'Chris Wood',buts:32},{nom:'Steve Sumner',buts:22}],
    passeurs: [{nom:'Ryan Nelsen',passes:20},{nom:'Chris Wood',passes:15},{nom:'Simon Elliott',passes:14}]
  },
  'Jordanie': {
    stars: [{nom:'Yazan Al-Naimat',club:'Al-Faisaly'},{nom:'Ahmad Hayel',club:'Al-Wehdat'},{nom:'Musa Al-Taamari',club:'Montpellier'}],
    buteurs: [{nom:'Hassan Abdel-Fattah',buts:18},{nom:'Ahmad Hayel',buts:15},{nom:'Musa Al-Taamari',buts:12}],
    passeurs: [{nom:'Hatem Aqel',passes:20},{nom:'Ahmad Hayel',passes:15},{nom:'Musa Al-Taamari',passes:14}]
  },
  'Ouzbékistan': {
    stars: [{nom:'Eldor Shomurodov',club:'Roma'},{nom:'Jasur Yaxshiboyev',club:'AGMK'},{nom:'Otabek Shukurov',club:'Pakhtakor'}],
    buteurs: [{nom:'Maxim Shatskikh',buts:34},{nom:'Eldor Shomurodov',buts:22},{nom:'Server Djeparov',buts:18}],
    passeurs: [{nom:'Server Djeparov',passes:25},{nom:'Eldor Shomurodov',passes:18},{nom:'Timur Kapadze',passes:15}]
  },
  'Panama': {
    stars: [{nom:'Rolando Blackburn',club:'LD Alajuelense'},{nom:'Adalberto Carrasquilla',club:'Houston Dynamo'},{nom:'Édgar Bárcenas',club:'LD Alajuelense'}],
    buteurs: [{nom:'Luis Tejada',buts:43},{nom:'Rolando Fonseca',buts:28},{nom:'Blas Pérez',buts:42}],
    passeurs: [{nom:'Alberto Gaitán',passes:18},{nom:'Amílcar Henríquez',passes:15},{nom:'Adalberto Carrasquilla',passes:12}]
  },
  'RD Congo': {
    stars: [{nom:'Dieumerci Mbokani',club:'retraité'},{nom:'Chancel Mbemba',club:'Marseille'},{nom:'Yannick Bolasie',club:'Millwall'}],
    buteurs: [{nom:'Shabani Nonda',buts:22},{nom:'Dieumerci Mbokani',buts:23},{nom:'Trésor Luntadila',buts:15}],
    passeurs: [{nom:'Youssouf Mulumbu',passes:18},{nom:'Chancel Mbemba',passes:12},{nom:'Yannick Bolasie',passes:15}]
  },
  'Colombie': {
    stars: [{nom:'James Rodríguez',club:'Rayo Vallecano'},{nom:'Luis Díaz',club:'Liverpool'},{nom:'Juan Cuadrado',club:'retraité'}],
    buteurs: [{nom:'Radamel Falcao',buts:36},{nom:'Arnoldo Iguarán',buts:25},{nom:'Carlos Bacca',buts:23}],
    passeurs: [{nom:'Carlos Valderrama',passes:45},{nom:'James Rodríguez',passes:38},{nom:'Freddy Rincón',passes:28}]
  }
};

let data = fs.readFileSync('data.js', 'utf8');

for (const [team, extras] of Object.entries(teamExtras)) {
  const starsStr = JSON.stringify(extras.stars);
  const buteursStr = JSON.stringify(extras.buteurs);
  const passeursStr = JSON.stringify(extras.passeurs);// Cherche le pattern de l'équipe et ajoute les nouveaux champs avant la fermeture }
  const escapedTeam = team.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/'/g, "\\'");
  const regex = new RegExp("('" + escapedTeam + "'\\s*:\\s*\\{[^}]+)(\\})", 'g');
  data = data.replace(regex, function(match, p1, p2) {
    if (match.includes('stars:')) return match;
    return p1 + ', stars:' + starsStr + ', buteurs:' + buteursStr + ', passeurs:' + passeursStr + p2;
  });
}

fs.writeFileSync('data.js', data);
console.log('data.js mis à jour avec succès!');