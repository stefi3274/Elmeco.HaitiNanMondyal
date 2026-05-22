const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

const fixes = {
  'Mexique': {
    stars: [{nom:'Santiago Giménez',club:'AC Milan'},{nom:'Raúl Jiménez',club:'Fulham'},{nom:'Edson Álvarez',club:'West Ham'}],
    buteurs: [{nom:'Javier Hernandez',buts:52},{nom:'Jared Borgetti',buts:46},{nom:'Cuauhtémoc Blanco',buts:38}],
    passeurs: [{nom:'Andrés Guardado',passes:31},{nom:'Cuauhtémoc Blanco',passes:22},{nom:'Giovani dos Santos',passes:18}]
  },
  'Afrique du Sud': {
    stars: [{nom:'Percy Tau',club:'Al Ahly'},{nom:'Ronwen Williams',club:'Mamelodi Sundowns'},{nom:'Themba Zwane',club:'Mamelodi Sundowns'}],
    buteurs: [{nom:'Benni McCarthy',buts:31},{nom:'Shaun Bartlett',buts:28},{nom:'Phil Masinga',buts:18}],
    passeurs: [{nom:'Steven Pienaar',passes:25},{nom:'Siyabonga Nomvethe',passes:18},{nom:'Quinton Fortune',passes:15}]
  },
  'Corée du Sud': {
    stars: [{nom:'Son Heung-min',club:'LAFC'},{nom:'Lee Kang-in',club:'PSG'},{nom:'Kim Min-jae',club:'Bayern Munich'}],
    buteurs: [{nom:'Cha Bum-kun',buts:58},{nom:'Hwang Sun-hong',buts:50},{nom:'Son Heung-min',buts:48}],
    passeurs: [{nom:'Son Heung-min',passes:22},{nom:'Ki Sung-yueng',passes:16},{nom:'Lee Chung-yong',passes:14}]
  },
  'Rép. Tchèque': {
    stars: [{nom:'Patrik Schick',club:'Bayer Leverkusen'},{nom:'Tomáš Souček',club:'West Ham'},{nom:'Ladislav Krejčí',club:'Bologna'}],
    buteurs: [{nom:'Jan Koller',buts:55},{nom:'Patrik Schick',buts:30},{nom:'Patrik Berger',buts:18}],
    passeurs: [{nom:'Pavel Nedvěd',passes:14},{nom:'Tomáš Rosický',passes:14},{nom:'Karel Poborský',passes:10}]
  },
  'Canada': {
    stars: [{nom:'Alphonso Davies',club:'Bayern Munich'},{nom:'Jonathan David',club:'LOSC Lille'},{nom:'Tajon Buchanan',club:'Inter Milan'}],
    buteurs: [{nom:'Cyle Larin',buts:29},{nom:'Jonathan David',buts:26},{nom:'Dwayne De Rosario',buts:22}],
    passeurs: [{nom:'Alphonso Davies',passes:18},{nom:'Junior Hoilett',passes:16},{nom:'Jonathan Osorio',passes:9}]
  },
  'Bosnie-Herzégovine': {
    stars: [{nom:'Edin Džeko',club:'Fenerbahçe'},{nom:'Ermedin Demirović',club:'Stuttgart'},{nom:'Sead Kolašinac',club:'Marseille'}],
    buteurs: [{nom:'Edin Džeko',buts:65},{nom:'Elvir Bolić',buts:22},{nom:'Vedad Ibišević',buts:20}],
    passeurs: [{nom:'Miralem Pjanić',passes:29},{nom:'Edin Džeko',passes:20},{nom:'Hasan Salihamidžić',passes:12}]
  },
  'Qatar': {
    stars: [{nom:'Akram Afif',club:'Al-Sadd'},{nom:'Almoez Ali',club:'Al-Duhail'},{nom:'Hassan Al-Haydos',club:'Al-Sadd'}],
    buteurs: [{nom:'Almoez Ali',buts:54},{nom:'Mansoor Muftah',buts:42},{nom:'Akram Afif',buts:38}],
    passeurs: [{nom:'Akram Afif',passes:41},{nom:'Hassan Al-Haydos',passes:28},{nom:'Boualem Khoukhi',passes:12}]
  },
  'Suisse': {
    stars: [{nom:'Granit Xhaka',club:'Bayer Leverkusen'},{nom:'Breel Embolo',club:'Monaco'},{nom:'Yann Sommer',club:'Inter Milan'}],
    buteurs: [{nom:'Alexander Frei',buts:42},{nom:'Max Abegglen',buts:34},{nom:'Kubilay Türkyilmaz',buts:34}],
    passeurs: [{nom:'Xherdan Shaqiri',passes:31},{nom:'Granit Xhaka',passes:12},{nom:'Hakan Yakin',passes:12}]
  },
  'Brésil': {
    stars: [{nom:'Neymar Jr.',club:'Santos'},{nom:'Vinícius Jr.',club:'Real Madrid'},{nom:'Raphinha',club:'FC Barcelona'}],
    buteurs: [{nom:'Neymar Jr.',buts:79},{nom:'Pelé',buts:77},{nom:'Ronaldo',buts:62}],
    passeurs: [{nom:'Neymar Jr.',passes:59},{nom:'Pelé',passes:47},{nom:'Zico',passes:35}]
  },
  'Maroc': {
    stars: [{nom:'Achraf Hakimi',club:'PSG'},{nom:'Hakim Ziyech',club:'Galatasaray'},{nom:'Youssef En-Nesyri',club:'Fenerbahçe'}],
    buteurs: [{nom:'Ahmed Faras',buts:36},{nom:'Hakim Ziyech',buts:25},{nom:'Youssef En-Nesyri',buts:21}],
    passeurs: [{nom:'Hakim Ziyech',passes:19},{nom:'Achraf Hakimi',passes:11},{nom:'Mbark Boussoufa',passes:10}]
  },'Haïti': {
    stars: [{nom:'Jean-Ricner Bellegarde',club:'Strasbourg'},{nom:'Wilson Isidor',club:'Lokomotiv Moscou'},{nom:'Duckens Nazon',club:'Sint-Truiden'}],
    buteurs: [{nom:'Emmanuel Sanon',buts:47},{nom:'Duckens Nazon',buts:28},{nom:'Frantzdy Pierrot',buts:21}],
    passeurs: [{nom:'Wilde-Donald Guerrier',passes:8},{nom:'Duckens Nazon',passes:7},{nom:'Derrick Etienne Jr',passes:6}]
  },
  'Écosse': {
    stars: [{nom:'Andrew Robertson',club:'Liverpool'},{nom:'Scott McTominay',club:'Napoli'},{nom:'Kieran Tierney',club:'Real Sociedad'}],
    buteurs: [{nom:'Kenny Dalglish',buts:30},{nom:'Denis Law',buts:30},{nom:'Hughie Gallacher',buts:24}],
    passeurs: [{nom:'Andrew Robertson',passes:15},{nom:'Barry Ferguson',passes:12},{nom:'John McGinn',passes:10}]
  },
  'États-Unis': {
    stars: [{nom:'Christian Pulisic',club:'AC Milan'},{nom:'Weston McKennie',club:'Juventus'},{nom:'Yunus Musah',club:'AC Milan'}],
    buteurs: [{nom:'Clint Dempsey',buts:57},{nom:'Landon Donovan',buts:57},{nom:'Jozy Altidore',buts:42}],
    passeurs: [{nom:'Landon Donovan',passes:58},{nom:'Michael Bradley',passes:23},{nom:'Christian Pulisic',passes:18}]
  },
  'Paraguay': {
    stars: [{nom:'Miguel Almirón',club:'Atlanta United'},{nom:'Julio Enciso',club:'Brighton'},{nom:'Antony Silva',club:'Libertad'}],
    buteurs: [{nom:'Roque Santa Cruz',buts:32},{nom:'José Cardozo',buts:25},{nom:'Cristian Riveros',buts:16}],
    passeurs: [{nom:'Miguel Almirón',passes:10},{nom:'Roque Santa Cruz',passes:9},{nom:'Aureliano Torres',passes:8}]
  },
  'Australie': {
    stars: [{nom:'Mat Ryan',club:'Real Sociedad'},{nom:'Harry Souttar',club:'Leicester City'},{nom:'Mathew Leckie',club:'Melbourne City'}],
    buteurs: [{nom:'Tim Cahill',buts:50},{nom:'Damian Mori',buts:29},{nom:'Archie Thompson',buts:28}],
    passeurs: [{nom:'Mathew Leckie',passes:16},{nom:'Robbie Kruse',passes:15},{nom:'Brett Emerton',passes:12}]
  },
  'Türkiye': {
    stars: [{nom:'Hakan Çalhanoğlu',club:'Inter Milan'},{nom:'Arda Güler',club:'Real Madrid'},{nom:'Kenan Yıldız',club:'Juventus'}],
    buteurs: [{nom:'Hakan Şükür',buts:51},{nom:'Tuncay Şanlı',buts:32},{nom:'Burhan Emir',buts:20}],
    passeurs: [{nom:'Hakan Çalhanoğlu',passes:15},{nom:'Hakan Şükür',passes:12},{nom:'İlhan Mansız',passes:10}]
  },
  'Allemagne': {
    stars: [{nom:'Florian Wirtz',club:'Bayer Leverkusen'},{nom:'Jamal Musiala',club:'Bayern Munich'},{nom:'Kai Havertz',club:'Arsenal'}],
    buteurs: [{nom:'Miroslav Klose',buts:71},{nom:'Gerd Müller',buts:68},{nom:'Lukas Podolski',buts:49}],
    passeurs: [{nom:'Thomas Müller',passes:40},{nom:'Mesut Özil',passes:40},{nom:'Bastian Schweinsteiger',passes:37}]
  },
  'Côte d\'Ivoire': {
    stars: [{nom:'Sébastien Haller',club:'Borussia Dortmund'},{nom:'Simon Adingra',club:'Brighton'},{nom:'Franck Kessié',club:'Al Ahli'}],
    buteurs: [{nom:'Didier Drogba',buts:65},{nom:'Salomon Kalou',buts:28},{nom:'Abdoulaye Traoré',buts:27}],
    passeurs: [{nom:'Max-Alain Gradel',passes:17},{nom:'Yaya Touré',passes:15},{nom:'Gervinho',passes:14}]
  },
  'Égypte': {
    stars: [{nom:'Mohamed Salah',club:'Liverpool'},{nom:'Mohamed Elneny',club:'Arsenal'},{nom:'Omar Marmoush',club:'Manchester City'}],
    buteurs: [{nom:'Hossam Hassan',buts:68},{nom:'Mohamed Salah',buts:57},{nom:'Hassan El-Shazly',buts:42}],
    passeurs: [{nom:'Mohamed Salah',passes:33},{nom:'Mohamed Aboutrika',passes:21},{nom:'Ahmed Fathi',passes:15}]
  },
  'Nigeria': {
    stars: [{nom:'Victor Osimhen',club:'Galatasaray'},{nom:'Ademola Lookman',club:'Atalanta'},{nom:'William Troost-Ekong',club:'Watford'}],
    buteurs: [{nom:'Rashidi Yekini',buts:37},{nom:'Segun Odegbami',buts:23},{nom:'Yakubu Aiyegbeni',buts:21}],
    passeurs: [{nom:'Ahmed Musa',passes:14},{nom:'Alex Iwobi',passes:11},{nom:'Kelechi Iheanacho',passes:10}]},
  'Ghana': {
    stars: [{nom:'Mohammed Kudus',club:'West Ham'},{nom:'Thomas Partey',club:'Arsenal'},{nom:'Jordan Ayew',club:'Leicester'}],
    buteurs: [{nom:'Asamoah Gyan',buts:51},{nom:'Edward Acquah',buts:45},{nom:'Kwasi Owusu',buts:36}],
    passeurs: [{nom:'André Ayew',passes:15},{nom:'Jordan Ayew',passes:12},{nom:'Sulley Muntari',passes:11}]
  },
  'Cameroun': {
    stars: [{nom:'André Onana',club:'Manchester United'},{nom:'Vincent Aboubakar',club:'Al Qadsiah'},{nom:'Bryan Mbeumo',club:'Brentford'}],
    buteurs: [{nom:'Samuel Eto\'o',buts:56},{nom:'Vincent Aboubakar',buts:41},{nom:'François Omam-Biyik',buts:26}],
    passeurs: [{nom:'Vincent Aboubakar',passes:12},{nom:'Eric Maxim Choupo-Moting',passes:9},{nom:'Samuel Eto\'o',passes:7}]
  },
  'Tunisie': {
    stars: [{nom:'Wahbi Khazri',club:'retraité'},{nom:'Youssef Msakni',club:'Al-Arabi'},{nom:'Ali Maâloul',club:'Al Ahly'}],
    buteurs: [{nom:'Issam Jemâa',buts:36},{nom:'Wahbi Khazri',buts:25},{nom:'Youssef Msakni',buts:23}],
    passeurs: [{nom:'Wahbi Khazri',passes:14},{nom:'Youssef Msakni',passes:12},{nom:'Ali Maâloul',passes:11}]
  },
  'RD Congo': {
    stars: [{nom:'Chancel Mbemba',club:'Marseille'},{nom:'Meschack Elia',club:'Young Boys'},{nom:'Gaël Kakuta',club:'Lens'}],
    buteurs: [{nom:'Dieumerci Mbokani',buts:22},{nom:'Cédric Bakambu',buts:16},{nom:'Shabani Nonda',buts:14}],
    passeurs: [{nom:'Chancel Mbemba',passes:6},{nom:'Meschack Elia',passes:6},{nom:'Gaël Kakuta',passes:5}]
  },
  'Sénégal': {
    stars: [{nom:'Sadio Mané',club:'Al Nassr'},{nom:'Édouard Mendy',club:'Al Ahli'},{nom:'Ismaïla Sarr',club:'Crystal Palace'}],
    buteurs: [{nom:'Sadio Mané',buts:43},{nom:'Henri Camara',buts:29},{nom:'El-Hadji Diouf',buts:24}],
    passeurs: [{nom:'Sadio Mané',passes:26},{nom:'Ismaila Sarr',passes:12},{nom:'El-Hadji Diouf',passes:10}]
  },
  'Algérie': {
    stars: [{nom:'Riyad Mahrez',club:'Al Ahli'},{nom:'Islam Slimani',club:'retraité'},{nom:'Youcef Atal',club:'Nice'}],
    buteurs: [{nom:'Islam Slimani',buts:47},{nom:'Abdelhafid Tasfaout',buts:36},{nom:'Riyad Mahrez',buts:31}],
    passeurs: [{nom:'Riyad Mahrez',passes:30},{nom:'Islam Slimani',passes:24},{nom:'Sofiane Feghouli',passes:15}]
  },
  'France': {
    stars: [{nom:'Kylian Mbappé',club:'Real Madrid'},{nom:'Aurélien Tchouaméni',club:'Real Madrid'},{nom:'Ousmane Dembélé',club:'PSG'}],
    buteurs: [{nom:'Olivier Giroud',buts:57},{nom:'Thierry Henry',buts:51},{nom:'Kylian Mbappé',buts:48}],
    passeurs: [{nom:'Antoine Griezmann',passes:38},{nom:'Thierry Henry',passes:27},{nom:'Kylian Mbappé',passes:23}]
  },
  'Argentine': {
    stars: [{nom:'Lionel Messi',club:'Inter Miami'},{nom:'Julián Álvarez',club:'Atlético Madrid'},{nom:'Alejandro Garnacho',club:'Chelsea'}],
    buteurs: [{nom:'Lionel Messi',buts:106},{nom:'Gabriel Batistuta',buts:56},{nom:'Sergio Agüero',buts:41}],
    passeurs: [{nom:'Lionel Messi',passes:56},{nom:'Diego Maradona',passes:30},{nom:'Ángel Di María',passes:29}]
  },
  'Uruguay': {
    stars: [{nom:'Darwin Núñez',club:'Liverpool'},{nom:'Federico Valverde',club:'Real Madrid'},{nom:'Ronald Araújo',club:'FC Barcelona'}],
    buteurs: [{nom:'Luis Suárez',buts:68},{nom:'Edinson Cavani',buts:58},{nom:'Diego Forlán',buts:36}],
    passeurs: [{nom:'Luis Suárez',passes:39},{nom:'Álvaro Recoba',passes:26},{nom:'Diego Forlán',passes:22}]
  },
  'Colombie': {
    stars: [{nom:'James Rodríguez',club:'Rayo Vallecano'},{nom:'Luis Díaz',club:'Liverpool'},{nom:'Richard Ríos',club:'Palmeiras'}],
    buteurs: [{nom:'Radamel Falcao',buts:36},{nom:'James Rodríguez',buts:27},{nom:'Arnoldo Iguarán',buts:25}],
    passeurs: [{nom:'James Rodríguez',passes:27},{nom:'Carlos Valderrama',passes:20},{nom:'Juan Cuadrado',passes:19}]
  },
  'Équateur': {
    stars: [{nom:'Moisés Caicedo',club:'Chelsea'},{nom:'Enner Valencia',club:'Internacional'},{nom:'Jeremy Sarmiento',club:'Brighton'}],buteurs: [{nom:'Enner Valencia',buts:40},{nom:'Agustín Delgado',buts:31},{nom:'Eduardo Hurtado',buts:26}],
    passeurs: [{nom:'Walter Ayoví',passes:19},{nom:'Antonio Valencia',passes:17},{nom:'Edison Méndez',passes:13}]
  },
  'Panama': {
    stars: [{nom:'Adalberto Carrasquilla',club:'Houston Dynamo'},{nom:'Édgar Bárcenas',club:'LD Alajuelense'},{nom:'Rolando Blackburn',club:'LD Alajuelense'}],
    buteurs: [{nom:'Luis Tejada',buts:43},{nom:'Blas Pérez',buts:42},{nom:'Luis Concepcion',buts:18}],
    passeurs: [{nom:'Alberto Quintero',passes:14},{nom:'Gabriel Torres',passes:11},{nom:'Yoel Bárcenas',passes:10}]
  },
  'Curaçao': {
    stars: [{nom:'Cuco Martina',club:'retraité'},{nom:'Leandro Bacuna',club:'FC Den Bosch'},{nom:'Gevaro Nepomuceno',club:'Go Ahead Eagles'}],
    buteurs: [{nom:'Leandro Bacuna',buts:14},{nom:'Rangelo Janga',buts:14},{nom:'Felitciano Zschusschen',buts:9}],
    passeurs: [{nom:'Gevaro Nepomuceno',passes:8},{nom:'Jarchinio Antonia',passes:6},{nom:'Cuco Martina',passes:5}]
  },
  'Japon': {
    stars: [{nom:'Takefusa Kubo',club:'Real Sociedad'},{nom:'Kaoru Mitoma',club:'Brighton'},{nom:'Ritsu Doan',club:'Freiburg'}],
    buteurs: [{nom:'Kunishige Kamamoto',buts:75},{nom:'Kazuyoshi Miura',buts:55},{nom:'Shinji Okazaki',buts:50}],
    passeurs: [{nom:'Shunsuke Nakamura',passes:24},{nom:'Keisuke Honda',passes:23},{nom:'Shinji Kagawa',passes:16}]
  },
  'Iran': {
    stars: [{nom:'Sardar Azmoun',club:'Bayer Leverkusen'},{nom:'Mehdi Taremi',club:'Inter Milan'},{nom:'Alireza Jahanbakhsh',club:'Feyenoord'}],
    buteurs: [{nom:'Ali Daei',buts:108},{nom:'Sardar Azmoun',buts:53},{nom:'Mehdi Taremi',buts:51}],
    passeurs: [{nom:'Mehdi Mahdavikia',passes:19},{nom:'Mehdi Taremi',passes:17},{nom:'Ehsan Hajsafi',passes:16}]
  },
  'Arabie Saoudite': {
    stars: [{nom:'Salem Al-Dawsari',club:'Al-Hilal'},{nom:'Mohammed Al-Owais',club:'Al-Hilal'},{nom:'Firas Al-Buraikan',club:'Al-Fateh'}],
    buteurs: [{nom:'Majed Abdullah',buts:71},{nom:'Sami Al-Jaber',buts:46},{nom:'Yasser Al-Qahtani',buts:42}],
    passeurs: [{nom:'Sami Al-Jaber',passes:14},{nom:'Salem Al-Dawsari',passes:10},{nom:'Nawaf Al-Abed',passes:8}]
  },
  'Irak': {
    stars: [{nom:'Ayman Hussein',club:'Al-Shorta'},{nom:'Amjad Attwan',club:'Al-Zawraa'},{nom:'Humam Tariq',club:'Erbil SC'}],
    buteurs: [{nom:'Hussein Saeed',buts:78},{nom:'Ahmed Radhi',buts:62},{nom:'Younis Mahmoud',buts:57}],
    passeurs: [{nom:'Ali Adnan',passes:9},{nom:'Humam Tariq',passes:8},{nom:'Amjad Attwan',passes:7}]
  },
  'Ouzbékistan': {
    stars: [{nom:'Eldor Shomurodov',club:'Cagliari'},{nom:'Abdukodir Khusanov',club:'Manchester City'},{nom:'Abbosbek Fayzullaev',club:'Pakhtakor'}],
    buteurs: [{nom:'Eldor Shomurodov',buts:41},{nom:'Maxim Shatskikh',buts:34},{nom:'Mirjalol Qosimov',buts:31}],
    passeurs: [{nom:'Server Djeparov',passes:15},{nom:'Jaloliddin Masharipov',passes:14},{nom:'Eldor Shomurodov',passes:9}]
  },
  'Jordanie': {
    stars: [{nom:'Mousa Al-Tamari',club:'Montpellier'},{nom:'Hamza Al-Dardour',club:'Al-Wehdat'},{nom:'Yazan Al-Naimat',club:'Al-Faisaly'}],
    buteurs: [{nom:'Hamza Al-Dardour',buts:35},{nom:'Hassan Abdel-Fattah',buts:30},{nom:'Badran Al-Shaqran',buts:29}],
    passeurs: [{nom:'Amer Deeb',passes:11},{nom:'Mousa Al-Tamari',passes:9},{nom:'Mahmoud Al-Mardi',passes:7}]
  },
  'Nouvelle-Zélande': {
    stars: [{nom:'Chris Wood',club:'Nottingham Forest'},{nom:'Clayton Lewis',club:'Udinese'},{nom:'Joe Bell',club:'Nashville SC'}],
    buteurs: [{nom:'Chris Wood',buts:36},{nom:'Vaughan Coveny',buts:28},{nom:'Shane Smeltz',buts:24}],
    passeurs: [{nom:'Marco Rojas',passes:8},{nom:'Kosta Barbarouses',passes:7},{nom:'Chris Wood',passes:6}]
  },
  'Portugal': {
    stars: [{nom:'Cristiano Ronaldo',club:'Al Nassr'},{nom:'Bruno Fernandes',club:'Manchester United'},{nom:'Bernardo Silva',club:'Manchester City'}],buteurs: [{nom:'Cristiano Ronaldo',buts:128},{nom:'Pauleta',buts:47},{nom:'Eusébio',buts:41}],
    passeurs: [{nom:'Cristiano Ronaldo',passes:46},{nom:'Luís Figo',passes:35},{nom:'João Moutinho',passes:26}]
  },
  'Espagne': {
    stars: [{nom:'Lamine Yamal',club:'FC Barcelona'},{nom:'Pedri',club:'FC Barcelona'},{nom:'Rodri',club:'Manchester City'}],
    buteurs: [{nom:'David Villa',buts:59},{nom:'Raúl González',buts:44},{nom:'Fernando Torres',buts:38}],
    passeurs: [{nom:'Xavi Hernández',passes:30},{nom:'Cesc Fàbregas',passes:24},{nom:'David Silva',passes:22}]
  },
  'Pays-Bas': {
    stars: [{nom:'Virgil van Dijk',club:'Liverpool'},{nom:'Cody Gakpo',club:'Liverpool'},{nom:'Xavi Simons',club:'RB Leipzig'}],
    buteurs: [{nom:'Robin van Persie',buts:50},{nom:'Memphis Depay',buts:46},{nom:'Klaas-Jan Huntelaar',buts:42}],
    passeurs: [{nom:'Wesley Sneijder',passes:33},{nom:'Memphis Depay',passes:30},{nom:'Arjen Robben',passes:29}]
  },
  'Belgique': {
    stars: [{nom:'Kevin De Bruyne',club:'Manchester City'},{nom:'Romelu Lukaku',club:'Napoli'},{nom:'Jeremy Doku',club:'Manchester City'}],
    buteurs: [{nom:'Romelu Lukaku',buts:85},{nom:'Eden Hazard',buts:33},{nom:'Bernard Voorhoof',buts:30}],
    passeurs: [{nom:'Kevin De Bruyne',passes:49},{nom:'Eden Hazard',passes:36},{nom:'Dries Mertens',passes:29}]
  },
  'Croatie': {
    stars: [{nom:'Luka Modrić',club:'Real Madrid'},{nom:'Mateo Kovačić',club:'Manchester City'},{nom:'Joško Gvardiol',club:'Manchester City'}],
    buteurs: [{nom:'Davor Šuker',buts:45},{nom:'Ivan Perišić',buts:33},{nom:'Mario Mandžukić',buts:33}],
    passeurs: [{nom:'Luka Modrić',passes:29},{nom:'Ivan Perišić',passes:27},{nom:'Darijo Srna',passes:23}]
  },
  'Italie': {
    stars: [{nom:'Gianluigi Donnarumma',club:'PSG'},{nom:'Federico Chiesa',club:'Liverpool'},{nom:'Nicolò Barella',club:'Inter Milan'}],
    buteurs: [{nom:'Luigi Riva',buts:35},{nom:'Giuseppe Meazza',buts:33},{nom:'Silvio Piola',buts:30}],
    passeurs: [{nom:'Francesco Totti',passes:24},{nom:'Andrea Pirlo',passes:23},{nom:'Roberto Baggio',passes:14}]
  },
  'Danemark': {
    stars: [{nom:'Christian Eriksen',club:'Manchester United'},{nom:'Rasmus Højlund',club:'Manchester United'},{nom:'Pierre-Emile Højbjerg',club:'Atletico Madrid'}],
    buteurs: [{nom:'Poul Nielsen',buts:52},{nom:'Jon Dahl Tomasson',buts:52},{nom:'Christian Eriksen',buts:42}],
    passeurs: [{nom:'Christian Eriksen',passes:30},{nom:'Michael Laudrup',passes:17},{nom:'Dennis Rommedahl',passes:14}]
  },
  'Autriche': {
    stars: [{nom:'David Alaba',club:'Real Madrid'},{nom:'Marcel Sabitzer',club:'Borussia Dortmund'},{nom:'Marko Arnautović',club:'Red Star Belgrade'}],
    buteurs: [{nom:'Toni Polster',buts:44},{nom:'Hans Krankl',buts:34},{nom:'Anton Schall',buts:27}],
    passeurs: [{nom:'David Alaba',passes:21},{nom:'Andreas Herzog',passes:18},{nom:'Marko Arnautović',passes:15}]
  },
  'Angleterre': {
    stars: [{nom:'Harry Kane',club:'Bayern Munich'},{nom:'Jude Bellingham',club:'Real Madrid'},{nom:'Bukayo Saka',club:'Arsenal'}],
    buteurs: [{nom:'Harry Kane',buts:68},{nom:'Wayne Rooney',buts:53},{nom:'Bobby Charlton',buts:49}],
    passeurs: [{nom:'David Beckham',passes:42},{nom:'Wayne Rooney',passes:21},{nom:'Raheem Sterling',passes:17}]
  },
  'Norvège': {
    stars: [{nom:'Erling Haaland',club:'Manchester City'},{nom:'Martin Ødegaard',club:'Arsenal'},{nom:'Alexander Sørloth',club:'Atlético Madrid'}],
    buteurs: [{nom:'Erling Haaland',buts:35},{nom:'Jørgen Juve',buts:33},{nom:'Ole Gunnar Solskjær',buts:23}],
    passeurs: [{nom:'Martin Ødegaard',passes:12},{nom:'Morten Gamst Pedersen',passes:11},{nom:'John Carew',passes:8}]
  },
  'Suède': {
    stars: [{nom:'Viktor Gyökeres',club:'Arsenal'},{nom:'Alexander Isak',club:'Liverpool'},{nom:'Lucas Bergvall',club:'Tottenham'}],buteurs: [{nom:'Zlatan Ibrahimović',buts:62},{nom:'Sven Rydell',buts:49},{nom:'Gunnar Nordahl',buts:43}],
    passeurs: [{nom:'Zlatan Ibrahimović',passes:25},{nom:'Sebastian Larsson',passes:14},{nom:'Emil Forsberg',passes:11}]
  },
  'Serbie': {
    stars: [{nom:'Dušan Vlahović',club:'Juventus'},{nom:'Aleksandar Mitrović',club:'Al-Hilal'},{nom:'Dušan Tadić',club:'Fenerbahçe'}],
    buteurs: [{nom:'Aleksandar Mitrović',buts:58},{nom:'Dušan Tadić',buts:23},{nom:'Aleksandar Prijović',buts:21}],
    passeurs: [{nom:'Dušan Tadić',passes:40},{nom:'Filip Kostić',passes:12},{nom:'Aleksandar Mitrović',passes:10}]
  },
  'Pologne': {
    stars: [{nom:'Robert Lewandowski',club:'FC Barcelona'},{nom:'Piotr Zieliński',club:'Inter Milan'},{nom:'Wojciech Szczęsny',club:'FC Barcelona'}],
    buteurs: [{nom:'Robert Lewandowski',buts:84},{nom:'Jakub Błaszczykowski',passes:21},{nom:'Kamil Grosicki',passes:20}]
  },
  'Roumanie': {
    stars: [{nom:'Radu Drăgușin',club:'Tottenham'},{nom:'Nicușor Stanciu',club:'Wuhan'},{nom:'Dennis Man',club:'Parma'}],
    buteurs: [{nom:'Gheorghe Hagi',buts:35},{nom:'Adrian Mutu',buts:35},{nom:'Iuliu Bodola',buts:31}],
    passeurs: [{nom:'Gheorghe Hagi',passes:24},{nom:'Adrian Mutu',passes:11},{nom:'Nicolae Stanciu',passes:8}]
  },
  'Hongrie': {
    stars: [{nom:'Dominik Szoboszlai',club:'Liverpool'},{nom:'Roland Sallai',club:'Freiburg'},{nom:'Péter Gulácsi',club:'RB Leipzig'}],
    buteurs: [{nom:'Ferenc Puskás',buts:84},{nom:'Sándor Kocsis',buts:75},{nom:'Imre Schlosser',buts:59}],
    passeurs: [{nom:'Balázs Dzsudzsák',passes:24},{nom:'Dominik Szoboszlai',passes:11},{nom:'Roland Sallai',passes:7}]
  },
  'Ukraine': {
    stars: [{nom:'Mykhailo Mudryk',club:'Chelsea'},{nom:'Viktor Tsyhankov',club:'Girona'},{nom:'Artem Dovbyk',club:'AS Roma'}],
    buteurs: [{nom:'Andriy Shevchenko',buts:48},{nom:'Andriy Yarmolenko',buts:46},{nom:'Roman Yaremchuk',buts:16}],
    passeurs: [{nom:'Andriy Yarmolenko',passes:31},{nom:'Yevhen Konoplyanka',passes:15},{nom:'Ruslan Malinovskyi',passes:8}]
  },
  'Slovaquie': {
    stars: [{nom:'Milan Škriniar',club:'PSG'},{nom:'Dávid Hancko',club:'Feyenoord'},{nom:'Lukáš Haraslín',club:'Lazio'}],
    buteurs: [{nom:'Marek Hamšík',buts:26},{nom:'Róbert Vittek',buts:23},{nom:'Szilárd Németh',buts:22}],
    passeurs: [{nom:'Marek Hamšík',passes:20},{nom:'Vladimir Weiss',passes:16},{nom:'Robert Mak',passes:11}]
  },
  'Albanie': {
    stars: [{nom:'Armando Broja',club:'Chelsea'},{nom:'Kristjan Asllani',club:'Inter Milan'},{nom:'Elseid Hysaj',club:'Lazio'}],
    buteurs: [{nom:'Erjon Bogdani',buts:18},{nom:'Alban Bushi',buts:14},{nom:'Sokol Cikalleshi',buts:13}],
    passeurs: [{nom:'Ledian Memushaj',passes:8},{nom:'Elseid Hysaj',passes:7},{nom:'Odise Roshi',passes:6}]
  },
  'Géorgie': {
    stars: [{nom:'Khvicha Kvaratskhelia',club:'PSG'},{nom:'Giorgi Mamardashvili',club:'Valencia'},{nom:'Georges Mikautadze',club:'Ajax'}],
    buteurs: [{nom:'Shota Arveladze',buts:26},{nom:'Khvicha Kvaratskhelia',buts:17},{nom:'Temur Ketsbaia',buts:17}],
    passeurs: [{nom:'Khvicha Kvaratskhelia',passes:10},{nom:'Jano Ananidze',passes:7},{nom:'Tornike Okriashvili',passes:5}]
  },
  'Slovénie': {
    stars: [{nom:'Jan Oblak',club:'Atlético Madrid'},{nom:'Benjamin Šeško',club:'RB Leipzig'},{nom:'Adam Gnezda Čerin',club:'Panathinaikos'}],
    buteurs: [{nom:'Zlatko Zahovič',buts:35},{nom:'Milivoje Novaković',buts:32},{nom:'Josip Iličić',buts:17}],
    passeurs: [{nom:'Zlatko Zahovič',passes:12},{nom:'Josip Iličić',passes:11},{nom:'Valter Birsa',passes:10}]
  },
  'Cap-Vert': {
    stars: [{nom:'Gelson Martins',club:'Monaco'},{nom:'Ryan Mendes',club:'retraité'},{nom:'Garry Rodrigues',club:'Al-Gharafa'}],
    buteurs: [{nom:'Ryan Mendes',buts:19},{nom:'Héldon Ramos',buts:15},{nom:'Garry Rodrigues',buts:10}],
    passeurs: [{nom:'Ryan Mendes',passes:9},{nom:'Garry Rodrigues',passes:7},{nom:'Jamiro Monteiro',passes:5}]
  }
};

for (const [team, extras] of Object.entries(fixes)) {
  const starsStr = JSON.stringify(extras.stars);
  const buteursStr = JSON.stringify(extras.buteurs);
  const passeursStr = JSON.stringify(extras.passeurs);
  const escapedTeam = team.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('("' + escapedTeam + '"\\s*:\\s*\\{[^}]*"stars":\\[[^\\]]*\\])', 'g');
  data = data.replace(regex, function(match) {
    let result = match.replace(/"stars":\[[^\]]*\]/, '"stars":' + starsStr);
    result = result.replace(/"buteurs":\[[^\]]*\]/, '"buteurs":' + buteursStr);
    result = result.replace(/"passeurs":\[[^\]]*\]/, '"passeurs":' + passeursStr);
    return result;
  });
}

fs.writeFileSync('data.js', data);
console.log('48 équipes mises à jour!');