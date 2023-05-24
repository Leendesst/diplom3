import {Component, createRef} from "react";
import {Animated} from "react-animated-css";
import {Input, TextArea} from "../layout/Input"
import Button from "../layout/Button";
import {LOAD_SERVICES_NAME} from "../../redux/lindicator-reducer";
import {connect} from "react-redux";
import API from "../../api/API";


// const models_data = JSON.parse('{"AC": ["378 GT Zagato","Ace","Aceca","Cobra"],"Acura": ["CL","CSX","EL","ILX","Integra","Legend","MDX","NSX","RDX","RL","RLX","RSX","SLX","TL","TLX","TSX","ZDX"],"Adler": ["Diplomat","Trumpf Junior"],"Alfa Romeo": ["105/115","145","146","147","155","156","159","164","166","1900","2600","33","4C","6","6C","75","8C Competizione","90","Alfasud","Alfetta","Arna","Brera","Disco Volante","Giulia","Giulietta","GT","GTA Coupe","GTV","MiTo","Montreal","RZ","Spider","Sprint","Stelvio","SZ"],"Alpina": ["B10","B11","B12","B3","B4","B5","B6","B7","B8","B9","C1","C2","D10","D3","D4","D5","Roadster","XD3","XD4"],"Alpine": ["A110","A310","A610","GTA"],"AM General": ["HMMWV (Humvee)"],"AMC": ["Eagle","Hornet"],"Apal": ["21541 Stalker"],"Ariel": ["Atom"],"Aro": ["10","24"],"Asia": ["Retona","Rocsta","Topic","Towner"],"Aston Martin": ["Bulldog","Cygnet","DB AR1","DB11","DB5","DB7","DB9","DBS","DBX","Lagonda","One-77","Rapide","Tickford Capri","V12 Vantage","V12 Zagato","V8 Vantage","V8 Zagato","Vanquish","Virage"],"Auburn": ["Speedster"],"Audi": ["100","200","50","80","90","920","A1","A2","A3","A4","A4 allroad","A5","A6","A6 allroad","A7","A8","Cabriolet","Coupe","e-tron","e-tron GT","e-tron S","e-tron S Sportback","e-tron Sportback","NSU RO 80","Q2","Q3","Q3 Sportback","Q4 e-tron","Q4 Sportback e-tron","Q5","Q5 Sportback","Q7","Q8","Quattro","R8","R8 LMP","RS 2","RS 3","RS 4","RS 5","RS 6","RS 7","RS e-tron GT","RS Q3","RS Q3 Sportback","RS Q8","S1","S2","S3","S4","S5","S6","S7","S8","SQ2","SQ5","SQ5 Sportback","SQ7","SQ8","TT","TT RS","TTS","Typ R","V8"],"Aurus": ["Senat"],"Austin": ["Allegro","Ambassador","FL2","FX4","Maestro","Maxi","Metro","Mini","Montego","Princess","Sprite"],"Austin Healey": ["100","3000"],"Autobianchi": ["A 112"],"BAIC": ["A1","BJ2020","BJ2026","BJ212","EU260","EU5","Jeep 2500","Luba (XB624)"],"Bajaj": ["Qute"],"Baltijas Dzips": ["BD-1322"],"Batmobile": ["1989","2018"],"Bentley": ["Arnage","Azure","Bentayga","Brooklands","Continental","Continental Flying Spur","Continental GT","Eight","Flying Spur","Mark VI","Mulsanne","R Type","S","T-Series","Turbo R"],"Bertone": ["Freeclimber"],"Bilenkin": ["Vintage"],"Bio auto": ["evA-4"],"Bitter": ["CD","Type 3"],"BMW": ["02 (E10)","1 серии","1M","2 серии","2 серии Active Tourer","2 серии Gran Tourer","2000 C/CS","3 серии","3/15","315","3200","321","326","327","340","4 серии","5 серии","501","502","503","507","6 серии","600","7 серии","700","8 серии","E3","E9","i3","i4","i8","iX","iX3","M2","M3","M4","M5","M6","M8","New Class","X1","X2","X3","X3 M","X4","X4 M","X5","X5 M","X6","X6 M","X7","Z1","Z3","Z3 M","Z4","Z4 M","Z8"],"Borgward": ["2000","Hansa 1100"],"Brabus": ["7.3S","M V12","ML 63 Biturbo","SV12"],"Brilliance": ["FRV (BS2)","H230","H530","M1 (BS6)","M2 (BS4)","M3 (BC3)","V3","V5"],"Bristol": ["Blenheim","Blenheim Speedster","Fighter"],"Bufori": ["Geneva","La Joya"],"Bugatti": ["Chiron","EB 110","EB 112","EB Veyron 16.4","Type 55"],"Buick": ["Cascada","Century","Electra","Enclave","Encore","Envision","Estate Wagon","Excelle","GL8","GS","LaCrosse","LeSabre","Limited","Lucerne","Park Avenue","Rainer","Reatta","Regal","Rendezvous","Riviera","Roadmaster","Skyhawk","Skylark","Special","Super","Terraza","Verano","Wildcat"],"BYD": ["E6","F0","F3","F5","F6","F8 (S8)","Flyer","G3","G6","L3","M6","S6","Song EV","Yuan"],"Byvin": ["BD132J (CoCo)","BD326J (Moca)"],"Cadillac": ["Allante","ATS","ATS-V","BLS","Brougham","Catera","CT4","CT4-V","CT5","CT5-V","CT6","CTS","CTS-V","DeVille","DTS","Eldorado","ELR","Escalade","Fleetwood","LSE","Series 62","Seville","Sixty Special","SRX","STS","XLR","XT4","XT5","XT6","XTS"],"Callaway": ["C12"],"Carbodies": ["FX4"],"Caterham": ["21","CSR","Seven"],"Chana": ["Benni"],"Changan": ["Alsvin V7","Benni","Benni EC/EV","CM-8","CS35","CS35PLUS","CS55","CS75","CX20","Eado","Raeton","UNI-K","Z-Shine"],"ChangFeng": ["Flying","SUV (CS6)"],"Changhe": ["Ideal"],"Chery": ["Amulet (A15)","Arrizo 3","Arrizo 7","B13","Bonus (A13)","Bonus 3 (E3/A19)","CrossEastar (B14)","E5","Fora (A21)","IndiS (S18D)","Karry","Kimo (A1)","M11 (A3)","Oriental Son (B11)","QQ6 (S21)","QQme","Sweet (QQ)","Tiggo (T11)","Tiggo 2","Tiggo 3","Tiggo 4","Tiggo 5","Tiggo 7","Tiggo 7 Pro","Tiggo 8","Tiggo 8 Pro","Very (A13)","Windcloud (A11)"],"CHERYEXEED": ["TXL"],"Chevrolet": ["3000-Series","Alero","Apache","Astra","Astro","Avalanche","Aveo","Bel Air","Beretta","Blazer","Blazer K5","Bolt","C-10","C/K","Camaro","Caprice","Captiva","Captiva Sport","Cavalier","Celebrity","Celta","Chevelle","Chevette","Citation","Cobalt","Colorado","Corsa","Corsica","Corvair","Corvette","Cruze","Cruze (HR)","CSV CR8","Deluxe","El Camino","Epica","Equinox","Evanda","Express","Fleetmaster","HHR","Impala","Kalos","Lacetti","Lanos","Lumina","Lumina APV","LUV D-MAX","Malibu","Master","Matiz","Metro","Monte Carlo","Monza","MW","Nexia","Niva","Nova","Nubira","Omega","Orlando","Prizm","Rezzo","S-10 Pickup","Sail","Silverado","Sonic","Spark","Special DeLuxe","Spin","SS","SSR","Starcraft","Suburban","Tacuma","Tahoe","Tavera","Tracker","TrailBlazer","Trans Sport","Traverse","Trax","Uplander","Van","Vectra","Venture","Viva","Volt","Zafira"],"Chrysler": ["180","200","300","300 Letter Series","300C","300M","Aspen","Cirrus","Concorde","Cordoba","Crossfire","Daytona","Dynasty","ES","Fifth Avenue","Imperial","Imperial Crown","Intrepid","LeBaron","LHS","Nassau","Neon","New Yorker","Newport","Pacifica","Prowler","PT Cruiser","Saratoga","Sebring","Stratus","TC by Maserati","Town & Country","Viper","Vision","Voyager","Windsor"],"Citroen": ["2 CV","AMI","AX","Berlingo","BX","C-Crosser","C-Elysee","C-Quatre","C-Triomphe","C-ZERO","C1","C2","C3","C3 Aircross","C3 Picasso","C4","C4 Aircross","C4 Cactus","C4 Picasso","C4 SpaceTourer","C5","C5 Aircross","C6","C8","CX","DS","DS3","DS4","DS5","Dyane","E-Mehari","Evasion","GS","Jumpy","LN","Nemo","Saxo","SM","SpaceTourer","Traction Avant","Visa","Xantia","XM","Xsara","Xsara Picasso","ZX"],"Cizeta": ["V16t"],"Coggiola": ["T Rex"],"Cord": ["L-29"],"Cupra": ["Ateca","Formentor","Leon"],"Dacia": ["1300","1310","1325","1410","Dokker","Duster","Lodgy","Logan","Nova","Pick-Up","Sandero","Solenza","Spring","SuperNova"],"Dadi": ["City Leading","Shuttle","Smoothing"],"Daewoo": ["Alpheon","Arcadia","Chairman","Damas","Espero","Evanda","G2X","Gentra","Kalos","Korando","Lacetti","Lacetti Premiere","Lanos","Leganza","LeMans","Magnus","Matiz","Matiz Creative","Musso","Nexia","Nubira","Prince","Racer","Rezzo","Royale","Sens","Tacuma","Tico","Tosca","Winstorm"],"Daihatsu": ["Altis","Applause","Atrai","Be-go","Bee","Boon","Boon Luminas","Cast","Ceria","Charade","Charmant","Coo","Copen","Cuore","Delta Wagon","Esse","Extol","Fellow","Feroza","Gran Move","Hijet","Hijet Caddie","Leeza","Materia","MAX","Mebius","Midget","Mira","Mira e:S","Mira Gino","Move","Move Canbus","Move Conte","Move Latte","Naked","Opti","Pyzar","Rocky","Rugger","Sirion","Sonica","Storia","Taft","Tanto","Tanto Exe","Terios","Thor","Trevis","Wake","Wildcat","Xenia","YRV"],"Daimler": ["DS420","Sovereign (XJ6)","SP250","X300","X308","X350","XJ40","XJS"],"Dallara": ["Stradale"],"Datsun": ["240Z","280Z","280ZX","720","Bluebird","Cherry","GO","GO+","Laurel","mi-DO","on-DO","Stanza","Sunny","Urvan","Violet"],"De Tomaso": ["Bigua","Guara","Longchamp","Mangusta","Pantera","Vallelunga"],"Deco Rides": ["Zephyr"],"Delage": ["D6"],"DeLorean": ["DMC-12"],"Derways": ["Antelope","Aurora","Cowboy","Land Crown","Plutus","Saladin","Shuttle"],"DeSoto": ["Custom","Firedome","Fireflite"],"DKW": ["3=6"],"Dodge": ["600","Aries","Avenger","Caliber","Caravan","Challenger","Charger","Charger Daytona","Colt","Custom Royal","D/W Series","D8","Dakota","Dart","Daytona","Diplomat","Durango","Dynasty","Intrepid","Journey","Lancer","Magnum","Mayfair","Monaco","Neon","Nitro","Omni","Polara","Raider","RAM","RAM Van","Ramcharger","Shadow","Spirit","Stealth","Stratus","Viper","WC series"],"DongFeng": ["370","580","A30","A9","AX7","H30 Cross","MPV","Oting","Rich","S30"],"Doninvest": ["Assol","Kondor","Orion"],"Donkervoort": ["D8","D8 Cosworth","D8 GT","D8 GTO","D8 Zetec"],"DS": ["3","3 Crossback","4","5","7 Crossback"],"DW Hower": ["H3","H5"],"E-Car": ["GD04B"],"Eagle": ["Premier","Summit","Talon","Vision","Vista"],"Eagle Cars": ["SS"],"Excalibur": ["Series IV","Series V"],"FAW": ["Bestune T99","Besturn B30","Besturn B50","Besturn B70","Besturn X40","Besturn X80","D60","Jinn","Oley","V2","V5","Vita"],"Ferrari": ["250 GTO","296 GTB","328","348","360","400","412","456","458","488","512 BB","512 M","512 TR","550","575M","599","612","812","California","Dino 206 GT","Dino 208/308 GT4","Dino 246 GT","Enzo","F12berlinetta","F355","F40","F430","F50","F8","FF","FXX K","GTC4Lusso","LaFerrari","Mondial","Monza SP","Portofino","Roma","SF90 Stradale","Testarossa"],"Fiat": ["124","124 Spider","124 Sport Spider","125","126","127","128","130","131","132","2300","238","500","500L","500X","508","600","900T","Albea","Argenta","Barchetta","Brava","Bravo","Cinquecento","Coupe","Croma","Doblo","Duna","Fiorino","Freemont","Fullback","Idea","Linea","Marea","Multipla","Palio","Panda","Punto","Qubo","Regata","Ritmo","Scudo","Sedici","Seicento","Siena","Stilo","Strada","Tempra","Tipo","Ulysse","Uno","X 1/9"],"Fisker": ["Karma"],"Flanker": ["F"],"Ford": ["Aerostar","Aspire","B-MAX","Bronco","Bronco Sport","Bronco-II","C-MAX","Capri","Consul","Contour","Cortina","Cougar","Crown Victoria","Custom","Econoline","EcoSport","Edge","Escape","Escort","Escort (North America)","Everest","Excursion","Expedition","Explorer","Explorer Sport Trac","F-150","F-2","Fairlane","Fairmont","Falcon","Festiva","Fiesta","Fiesta ST","Five Hundred","Flex","Focus","Focus (North America)","Focus RS","Focus ST","Freda","Freestar","Freestyle","Fusion","Fusion (North America)","Galaxie","Galaxy","GPA","Granada","Granada (North America)","GT","GT40","Ikon","Ixion","KA","Kuga","Laser","LTD Crown Victoria","M151","Mainline","Maverick","Model A","Model T","Mondeo","Mondeo ST","Mustang","Mustang Mach-E","Orion","Probe","Puma","Ranchero","Ranger","Ranger (North America)","S-MAX","Scorpio","Sierra","Spectron","Taunus","Taurus","Taurus X","Telstar","Tempo","Territory","Thunderbird","Torino","Tourneo Connect","Tourneo Courier","Tourneo Custom","Transit Connect","V8","Windstar","Zephyr"],"Foton": ["Midi","Sauvana","Tunland"],"FSO": ["125p","126p","127p","132p","Polonez","Warszawa"],"Fuqi": ["6500 (Land King)"],"GAC": ["GN8","GS5","GS8"],"Geely": ["Atlas","Atlas Pro","Beauty Leopard","CK (Otaka)","Coolray","Emgrand 7","Emgrand EC7","Emgrand EC8","Emgrand GT","Emgrand X7","FC (Vision)","GC6","GC9","GS","Haoqing","LC (Panda)","LC (Panda) Cross","MK","MK Cross","MR","SC7","Tugella","TX4"],"Genesis": ["G70","G80","G90","GV70","GV80"],"Geo": ["Metro","Prizm","Spectrum","Storm","Tracker"],"GMC": ["100","Acadia","Canyon","Envoy","Jimmy","Safari","Savana","Sierra","Sonoma","Suburban","Syclone","Terrain","Typhoon","Vandura","Yukon"],"Gonow": ["Troy"],"Gordon": ["Roadster"],"GP": ["Madison"],"Great Wall": ["Coolbear","Cowry (V80)","Deer","Florid","Hover","Hover H3","Hover H5","Hover H6","Hover M1 (Peri 4x4)","Hover M2","Hover M4","Hover Pi","Pegasus","Peri","Poer","Safe","Sailor","Sing RUV","Socool","Voleex C10 (Phenom)","Voleex C30","Wingle","Wingle 7"],"Hafei": ["Brio","Princip","Saibao","Sigma","Simbo"],"Haima": ["2","3","7","Family","Family F7","Freema","M3","S5"],"Hanomag": ["Rekord","Typ 13"],"Haval": ["F7","F7x","H2","H5","H6","H6 Coupe","H8","H9","Jolion"],"Hawtai": ["B21","Boliger","Laville"],"Heinkel": ["Typ 154"],"Hennessey": ["Venom F5"],"Hindustan": ["Ambassador","Contessa"],"Hispano-Suiza": ["K6"],"Holden": ["Apollo","Astra","Barina","Calais","Caprice","Commodore","Cruze","Frontera","Jackaroo","Monaro","Rodeo","Statesman","UTE","Vectra","Zafira"],"Honda": ["145","Accord","Acty","Airwave","Ascot","Ascot Innova","Avancier","Ballade","Beat","Brio","Capa","City","Civic","Civic Ferio","Civic Type R","Clarity","Concerto","CR-V","CR-X","CR-Z","Crossroad","Crosstour","Domani","e","Edix","Element","Elysion","Fit","Fit Aria","Fit Shuttle","FR-V","Freed","Grace","Horizon","HR-V","Insight","Inspire","Integra","Integra SJ","Jade","Jazz","Lagreat","Legend","Life","Logo","MDX","Mobilio","Mobilio Spike","N-BOX","N-BOX Slash","N-One","N-WGN","N360","NSX","Odyssey","Odyssey (North America)","Orthia","Partner","Passport","Pilot","Prelude","Quint","Rafaga","Ridgeline","S-MX","S2000","S500","S600","S660","Saber","Shuttle","Stepwgn","Stream","Street","That\'S","Today","Torneo","Vamos","Vezel","Vigor","Z","Zest"],"Horch": ["830","853"],"HuangHai": ["Antelope","Landscape","Plutus"],"Hudson": ["Deluxe Eight","Super Six"],"Hummer": ["H1","H2","H3"],"Hyundai": ["Accent","Aslan","Atos","Avante","Azera","Bayon","Centennial","Click","Coupe","Creta","Dynasty","Elantra","Entourage","EON","Equus","Excel","Galloper","Genesis","Genesis Coupe","Getz","Grace","Grand Starex","Grandeur","H-1","H200","i10","i20","i20 N","i30","i30 N","i40","IONIQ","IONIQ 5","ix20","ix35","ix55","Kona","Lantra","Lavita","Marcia","Matrix","Maxcruz","Palisade","Pony","Santa Fe","Santamo","Scoupe","Solaris","Sonata","Starex","Staria","Stellar","Terracan","Tiburon","Trajet","Tucson","Tuscani","Veloster","Venue","Veracruz","Verna","XG"],"Infiniti": ["EX","FX","G","I","J","JX","M","Q","Q30","Q40","Q50","Q60","Q70","QX30","QX4","QX50","QX55","QX56","QX60","QX70","QX80"],"Innocenti": ["Elba","Mille","Mini"],"International": ["Travelall"],"Invicta": ["S1"],"Iran Khodro": ["Dena","Paykan","Runna","Sahra","Samand","Sarir","Soren"],"Isdera": ["Commendatore 112i","Imperator 108i","Spyder"],"Isuzu": ["117","Amigo","Ascender","Aska","Axiom","Bellett","Bighorn","D-Max","Fargo","Fargo Filly","Florian","Gemini","Hombre","Impulse","KB","Midi","MU","MU-7","MU-X","Oasis","Piazza","Rodeo","Stylus","TF (Pickup)","Trooper","VehiCross","Wizard"],"IVECO": ["Massif"],"JAC": ["iEV7L","iEV7S","J2 (Yueyue)","J3 (Tongyue,Tojoy)","J4 (Heyue A30)","J5 (Heyue)","J6 (Heyue RS)","J7","J7 (Binyue)","M1 (Refine)","M5","S1 (Rein)","S3","S5 (Eagle)","S7","T6"],"Jaguar": ["E-Pace","E-type","F-Pace","F-Type","I-Pace","Mark 2","Mark IX","S-Type","X-Type","XE","XF","XFR","XJ","XJ220","XJR","XJS","XK","XKR"],"Jeep": ["Cherokee","CJ","Commander","Compass","Gladiator","Grand Cherokee","Grand Wagoneer","Liberty (North America)","Liberty (Patriot)","Renegade","Wrangler"],"Jensen": ["Interceptor","S-V8"],"Jinbei": ["Haise"],"JMC": ["Baodian"],"Kia": ["Avella","Borrego","Cadenza","Capital","Carens","Carnival","Carstar","Ceed","Ceed GT","Cerato","Clarus","Concord","Elan","Enterprise","EV6","Forte","Joice","K3","K5","K7","K9","K900","Lotze","Magentis","Mentor","Mohave","Morning","Niro","Opirus","Optima","Picanto","Potentia","Pregio","Pride","Proceed","Quanlima","Quoris","Ray","Retona","Rio","Sedona","Seltos","Sephia","Shuma","Sorento","Soul","Soul EV","Spectra","Sportage","Stinger","Stonic","Telluride","Towner","Venga","Visto","X-Trek","XCeed"],"Koenigsegg": ["Agera","CC8S","CCR","CCX","One:1","Regera"],"KTM AG": ["X-Bow"],"LADA (ВАЗ)": ["1111 Ока","2101","2102","2103","2104","2105","2106","2107","2108","2109","21099","2110","2111","2112","2113","2114","2115","2120 Надежда","2121 (4x4)","2123","2129","2131 (4x4)","2328","2329","EL Lada","Granta","Kalina","Largus","Niva","Niva Legend","Priora","Revolution","Vesta","XRAY"],"Lamborghini": ["350/400 GT","Aventador","Centenario","Countach","Diablo","Egoista","Espada","Gallardo","Huracán","Islero","Jalpa","Jarama","LM001","LM002","Miura","Murcielago","Reventon","Sesto Elemento","Silhouette","Sián","Urraco","Urus","Veneno"],"Lancia": ["A 112","Appia","Aurelia","Beta","Dedra","Delta","Flaminia","Flavia","Fulvia","Gamma","Hyena","Kappa","Lambda","Lybra","Monte Carlo","Musa","Phedra","Prisma","Rally 037","Stratos","Thema","Thesis","Trevi","Voyager","Y10","Ypsilon","Zeta"],"Land Rover": ["Defender","Discovery","Discovery Sport","Freelander","Range Rover","Range Rover Evoque","Range Rover Sport","Range Rover Velar","Series I","Series II","Series III"],"Landwind": ["Fashion (CV9)","Forward","X5","X6","X7","Х9"],"Lexus": ["CT","ES","GS","GS F","GX","HS","IS","IS F","LC","LFA","LM","LS","LX","NX","RC","RC F","RX","SC","UX"],"Liebao Motor": ["Leopard"],"Lifan": ["650 EV","Breez (520)","Cebrium (720)","Celliya (530)","Murman (820)","Myway","Smily","Solano","X50","X60","X70"],"Ligier": ["JS 51"],"Lincoln": ["Aviator","Blackwood","Capri","Continental","Corsair","LS","Mark III","Mark IV","Mark LT","Mark VII","Mark VIII","MKC","MKS","MKT","MKX","MKZ","Nautilus","Navigator","Premiere","Town Car","Versailles","Zephyr"],"LiXiang": ["One"],"Logem": ["EC30"],"Lotus": ["340R","Eclat","Elan","Elise","Elite","Esprit","Europa","Europa S","Evora","Excel","Exige"],"LTI": ["TX"],"Lucid": ["Air"],"Luxgen": ["Luxgen5","Luxgen7 MPV","Luxgen7 SUV","U6 Turbo","U7 Turbo"],"Mahindra": ["Armada","Bolero","CJ-3","CL","Commander","Marshal","MM","NC 640 DP","Scorpio","Verito","Voyager","Xylo"],"Marcos": ["GTS","LM 400","LM 500","Mantis","Marcasite"],"Marlin": ["5EXi","Sportster"],"Marussia": ["B1","B2"],"Maruti": ["1000","800","Alto","Baleno","Esteem","Gypsy","Omni","Versa","Wagon R","Zen"],"Maserati": ["228","3200 GT","420","4200 GT","Barchetta Stradale","Biturbo","Bora","Chubasco","Ghibli","GranTurismo","Indy","Karif","Khamsin","Kyalami","Levante","MC12","MC20","Merak","Mexico","Quattroporte","Royale","Shamal"],"Maybach": ["57","62","Exelero"],"Mazda": ["1000","121","1300","2","3","3 MPS","323","5","6","6 MPS","616","626","818","929","Atenza","Autozam AZ-3","Axela","AZ-1","AZ-Offroad","AZ-Wagon","B-series","Biante","Bongo","Bongo Friendee","BT-50","Capella","Carol","Chantez","Cosmo","Cronos","CX-3","CX-30","CX-5","CX-7","CX-8","CX-9","Demio","Efini MS-6","Efini MS-8","Efini MS-9","Etude","Eunos 100","Eunos 300","Eunos 500","Eunos 800","Eunos Cosmo","Familia","Flair","Flair Crossover","Flair Wagon","Lantis","Laputa","Luce","Millenia","MPV","MX-3","MX-30","MX-5","MX-6","Navajo","Persona","Premacy","Proceed","Proceed Levante","Proceed Marvie","Protege","R360","Revue","Roadster","RX-7","RX-8","Scrum","Sentia","Spiano","Tribute","Verisa","Xedos 6","Xedos 9"],"McLaren": ["540C","570GT","570S","600LT","650S","675LT","720S","Artura","F1","GT","MP4-12C","P1","Senna"],"Mega": ["Club","Monte Carlo","Track"],"Mercedes-Benz": ["190 (W201)","190 SL","220 (W187)","A-Класс","A-Класс AMG","AMG GT","B-Класс","C-Класс","C-Класс AMG","Citan","CL-Класс","CL-Класс AMG","CLA","CLA AMG","CLC-Класс","CLK-Класс","CLK-Класс AMG","CLS","CLS AMG","E-Класс","E-Класс AMG","EQA","EQC","EQS","EQV","G-Класс","G-Класс AMG","G-Класс AMG 6x6","GL-Класс","GL-Класс AMG","GLA","GLA AMG","GLB","GLB AMG","GLC","GLC AMG","GLC Coupe","GLC Coupe AMG","GLE","GLE AMG","GLE Coupe","GLE Coupe AMG","GLK-Класс","GLS","GLS AMG","M-Класс","M-Класс AMG","Maybach G 650 Landaulet","Maybach GLS","Maybach S-Класс","Metris","R-Класс","R-Класс AMG","S-Класс","S-Класс AMG","Simplex","SL-Класс","SL-Класс AMG","SLC","SLC AMG","SLK-Класс","SLK-Класс AMG","SLR McLaren","SLS AMG","V-Класс","Vaneo","Viano","Vito","W100","W105","W108","W110","W111","W114","W115","W120","W121","W123","W124","W128","W136","W142","W186","W188","W189","W191","W29","X-Класс"],"Mercury": ["Capri","Colony Park","Cougar","Eight","Grand Marquis","Marauder","Mariner","Marquis","Milan","Montego","Monterey","Mountaineer","Mystique","Sable","Topaz","Tracer","Villager"],"Metrocab": ["Metrocab I","Metrocab II (TTT)"],"MG": ["3","350","5","550","6","750","F","GS","Maestro","Metro","MGA","MGB","Midget","Montego","RV8","TD Midget","TF","Xpower SV","ZR","ZS","ZT"],"Microcar": ["F8C","M.Go","M8","MC","Virgo"],"Minelli": ["TF 1800"],"MINI": ["Cabrio","Clubman","Countryman","Coupe","Hatch","Paceman","Roadster"],"Mitsubishi": ["3000 GT","500","Airtrek","Aspire","ASX","Attrage","Bravo","Carisma","Celeste","Challenger","Chariot","Colt","Cordia","Debonair","Delica","Delica D:2","Delica D:3","Delica D:5","Diamante","Dignity","Dingo","Dion","Eclipse","Eclipse Cross","eK Active","eK Classic","eK Custom","eK Space","eK Sport","eK Wagon","Emeraude","Endeavor","Eterna","Freeca","FTO","Galant","Galant Fortis","Grandis","GTO","i","i-MiEV","Jeep J","L200","L300","L400","Lancer","Lancer Cargo","Lancer Evolution","Lancer Ralliart","Legnum","Libero","Minica","Minicab","Mirage","Montero","Montero Sport","Outlander","Pajero","Pajero iO","Pajero Junior","Pajero Mini","Pajero Pinin","Pajero Sport","Pistachio","Proudia","Raider","RVR","Sapporo","Savrin","Sigma","Space Gear","Space Runner","Space Star","Space Wagon","Starion","Strada","Toppo","Town Box","Tredia","Triton","Xpander"],"Mitsuoka": ["Galue","Galue 204","Himiko","Le-Seyde","Like","MC-1","Nouera","Orochi","Ray","Rock Star","Ryoga","Ryugi","Viewt","Yuga","Zero 1"],"Morgan": ["3 Wheeler","4 Seater","4/4","Aero 8","Aero Coupe","Aero SuperSports","AeroMax","Plus 4","Plus 8","Roadster"],"Morris": ["Eight","Marina"],"Nash": ["Ambassador"],"Nio": ["ES8"],"Nissan": ["100NX","180SX","200SX","240SX","280ZX","300ZX","350Z","370Z","AD","Almera","Almera Classic","Almera Tino","Altima","Ariya","Armada","Auster","Avenir","Bassara","BE-1","Bluebird","Bluebird Maxima","Bluebird Sylphy","Caravan","Cedric","Cefiro","Cherry","Cima","Clipper Rio","Crew","Cube","Datsun","Dayz","Dayz Roox","Dualis","Elgrand","Exa","Expert","Fairlady Z","Figaro","Fuga","Gloria","GT-R","Homy","Hypermini","Juke","Juke Nismo","Kicks","Kix","Lafesta","Langley","Largo","Latio","Laurel","Leaf","Leopard","Liberta Villa","Liberty","Livina","Lucino","March","Maxima","Micra","Mistral","Moco","Murano","Navara (Frontier)","Note","NP300","NV100 Clipper","NV200","NV300","NV350 Caravan","NX Coupe","Otti","Pao","Pathfinder","Patrol","Pino","Pixo","Prairie","Presage","Presea","President","Primastar","Primera","Pulsar","Qashqai","Qashqai+2","Quest","R\'nessa","Rasheen","Rogue","Roox","Safari","Sentra","Serena","Silvia","Skyline","Skyline Crossover","Stagea","Stanza","Sunny","Teana","Terra","Terrano","Terrano Regulus","Tiida","Tino","Titan","Urvan","Vanette","Versa","Wingroad","X-Trail","Xterra"],"Noble": ["M12 GTO","M15","M600"],"Oldsmobile": ["Achieva","Alero","Aurora","Bravada","Cutlass","Cutlass Calais","Cutlass Ciera","Cutlass Supreme","Eighty-Eight","Firenza","Intrigue","Ninety-Eight","Omega","Series 60","Series 70","Silhouette","Starfire","Toronado","Vista Cruiser"],"Opel": ["Adam","Admiral","Agila","Ampera","Antara","Ascona","Astra","Astra OPC","Calibra","Campo","Cascada","Combo","Commodore","Corsa","Corsa OPC","Crossland X","Diplomat","Frontera","Grandland X","GT","Insignia","Insignia OPC","Kadett","Kapitan","Karl","Manta","Meriva","Meriva OPC","Mokka","Monterey","Monza","Olympia","Omega","P4","Rekord","Senator","Signum","Sintra","Speedster","Super Six","Tigra","Vectra","Vectra OPC","Vita","Vivaro","Zafira","Zafira Life","Zafira OPC"],"Osca": ["2500 GT"],"Packard": ["200/250","Clipper","Custom Eight","One-Twenty","Six","Twelve"],"Pagani": ["Huayra","Zonda"],"Panoz": ["Esperante","Roadster"],"Perodua": ["Alza","Kancil","Kelisa","Kembara","Kenari","MyVi","Nautica","Viva"],"Peugeot": ["1007","104","106","107","108","2008","201","202","203","204","205","205 GTi","206","207","208","208 GTi","3008","301","304","305","306","307","308","308 GTi","309","4007","4008","402","403","404","405","406","407","408","5008","504","505","508","604","605","607","806","807","Bipper","Expert","iOn","Partner","RCZ","Rifter","Traveller"],"PGO": ["Cevennes","Hemera","Speedster II"],"Piaggio": ["Porter"],"Plymouth": ["Acclaim","Barracuda","Breeze","Caravelle","Fury","Horizon","Laser","Neon","Prowler","Reliant","Road Runner","Satellite","Sundance","Turismo","Valiant","Volare","Voyager"],"Polestar": ["1","2"],"Pontiac": ["6000","Aztek","Bonneville","Catalina","Fiero","Firebird","G4","G5","G6","G8","Grand AM","Grand Prix","GTO","Laurentian","LeMans","Montana","Parisienne","Phoenix","Solstice","Sunbird","Sunfire","Tempest","Torpedo","Torrent","Trans Sport","Vibe","Wave"],"Porsche": ["356","718 Spyder","911","911 GT2","911 GT3","911 R","912","914","918 Spyder","924","928","944","959","968","Boxster","Carrera GT","Cayenne","Cayenne Coupe","Cayman","Cayman GT4","Macan","Panamera","Taycan"],"Premier": ["118NE","Padmini"],"Proton": ["Arena","Exora","Gen-2","Inspira","Juara","Perdana","Persona","Preve","Putra","Saga","Satria","Savvy","Tiara","Waja","Wira (400 Series)"],"PUCH": ["G-modell","Pinzgauer"],"Puma": ["GTB","GTE"],"Qoros": ["3","5"],"Qvale": ["Mangusta"],"RAM": ["1500","ProMaster City"],"Rambler": ["Ambassador"],"Ravon": ["Gentra","Matiz","Nexia R3","R2","R4"],"Reliant": ["Scimitar Sabre"],"Renaissance": ["Tropica Roadster"],"Renault": ["10","11","12","14","15","16","17","18","19","20","21","25","30","4","4CV","5","6","8","9","Alaskan","Arkana","Avantime","Captur","Caravelle","Clio","Clio RS","Clio V6","Dauphine","Dokker","Duster","Espace","Floride","Fluence","Fregate","Fuego","Kadjar","Kangoo","Kaptur","Koleos","KWID","Laguna","Latitude","Lodgy","Logan","Megane","Megane RS","Modus","Rodeo","Safrane","Sandero","Sandero RS","Scenic","Sport Spider","Symbol","Talisman","Trafic","Twingo","Twizy","Vel Satis","Vivastella","Wind","ZOE"],"Renault Samsung": ["QM5","QM6","SM3","SM5","SM7"],"Rezvani": ["Beast","Tank"],"Rimac": ["C Two","Concept_One"],"Rinspeed": ["Chopster"],"Roewe": ["E50","Ei5"],"Rolls-Royce": ["20/25","Camargue","Corniche","Cullinan","Dawn","Ghost","Park Ward","Phantom","Silver Cloud","Silver Ghost","Silver Seraph","Silver Shadow","Silver Spirit","Silver Spur","Silver Wraith","Wraith"],"Ronart": ["Lightning"],"Rover": ["100","14","200","25","400","45","600","75","800","Maestro","Metro","Mini","Montego","P3","P4","P6","SD1","Streetwise"],"Saab": ["600","9-2X","9-3","9-4X","9-5","9-7X","90","900","9000","93","95","96","99","Sonett"],"Saipa": ["Saina","Tiba"],"Saleen": ["S7"],"Santana": ["PS-10"],"Saturn": ["Astra","Aura","ION","LS","LW","Outlook","Relay","SC","Sky","SL","SW","VUE"],"Scion": ["FR-S","iA","iM","iQ","tC","xA","xB","xD"],"Sears": ["Model J"],"SEAT": ["133","Alhambra","Altea","Arona","Arosa","Ateca","Cordoba","Exeo","Fura","Ibiza","Ibiza Cupra","Inca","Leon","Leon Cupra","Malaga","Marbella","Mii","Ronda","Tarraco","Toledo"],"Shanghai Maple": ["C31","C32","C51","C52","C61","C81"],"ShuangHuan": ["Noble","Sceo"],"Simca": ["1300/1500","1307"],"Skoda": ["100 Series","105, 120","1200","Citigo","Enyaq","Fabia","Fabia RS","Favorit","Felicia","Forman","Kamiq","Karoq","Kodiaq","Kodiaq RS","Octavia","Octavia RS","Popular","Rapid","Roomster","Scala","Superb","Yeti"],"Smart": ["Forfour","Fortwo","Roadster"],"Soueast": ["Lioncel"],"Spectre": ["R42"],"Spyker": ["C12","C8"],"SsangYong": ["Actyon","Actyon Sports","Chairman","Istana","Kallista","Korando","Korando Family","Korando Sports","Korando Turismo","Kyron","Musso","Nomad","Rexton","Rodius","Stavic","Tivoli","XLV"],"Steyr": ["1500"],"Studebaker": ["Golden Hawk"],"Subaru": ["1000","360","Alcyone","Ascent","Baja","Bighorn","Bistro","Brat","BRZ","Dex","Dias Wagon","Domingo","Exiga","Forester","Impreza","Impreza WRX","Impreza WRX STi","Justy","Legacy","Legacy Lancaster","Leone","Levorg","Libero","Lucra","Outback","Pleo","Pleo Plus","R1","R2","Rex","Sambar","Stella","SVX","Traviq","Trezia","Tribeca","Vivio","WRX","WRX STi","XT","XV"],"Suzuki": ["Aerio","Alto","Alto Lapin","APV","Baleno","Cappuccino","Cara","Carry","Celerio","Cervo","Cultus","Equator","Ertiga","Escudo","Esteem","Every","Forenza","Fronte","Grand Vitara","Hustler","Ignis","Jimny","Kei","Kizashi","Landy","Liana","MR Wagon","Palette","Reno","Samurai","Sidekick","Solio","Spacia","Splash","Swift","SX4","Twin","Verona","Vitara","Wagon R","Wagon R+","X-90","Xbee","XL7"],"Talbot": ["1510","Avenger","Horizon","Rancho","Samba","Solara","Tagora"],"TATA": ["Aria","Estate","Indica","Indigo","Nano","Safari","Sierra","Sumo","Sumo Grande","Telcoline","Xenon"],"Tatra": ["57","77","80","87","T600","T603","T613","T700"],"Tazzari": ["Zero"],"Tesla": ["Cybertruck","Model 3","Model S","Model X","Model Y","Roadster"],"Think": ["City"],"Tianma": ["Century"],"Tianye": ["Admiral"],"Tofas": ["Kartal","Murat 124","Murat 131","Sahin","Serce"],"Toyota": ["2000GT","4Runner","Allex","Allion","Alphard","Altezza","Aqua","Aristo","Aurion","Auris","Avalon","Avanza","Avensis","Avensis Verso","Aygo","bB","Belta","Blade","Blizzard","Brevis","C-HR","Caldina","Cami","Camry","Camry Solara","Carina","Carina E","Carina ED","Cavalier","Celica","Celsior","Century","Chaser","Classic","Comfort","COMS","Corolla","Corolla Cross","Corolla II","Corolla Levin","Corolla Rumion","Corolla Spacio","Corolla Verso","Corona","Corona EXiV","Corsa","Cressida","Cresta","Crown","Crown Majesta","Curren","Cynos","Duet","Echo","Esquire","Estima","Etios","FJ Cruiser","Fortuner","FunCargo","Gaia","Grand HiAce","Granvia","GT86","Harrier","HiAce","Highlander","Hilux","Hilux Surf","Innova","Ipsum","iQ","ISis","Ist","Kluger","Land Cruiser","Land Cruiser Prado","Lite Ace","Mark II","Mark X","Mark X ZiO","MasterAce Surf","Matrix","Mega Cruiser","Mirai","Model F","MR-S","MR2","Nadia","Noah","Opa","Origin","Paseo","Passo","Passo Sette","Picnic","Pixis Epoch","Pixis Joy","Pixis Mega","Pixis Space","Pixis Van","Platz","Porte","Premio","Previa","Prius","Prius Alpha","Prius c","Prius v (+)","ProAce","ProAce City","Probox","Progres","Pronard","Publica","Ractis","Raize","Raum","RAV4","Regius","RegiusAce","Roomy","Rush","Sai","Scepter","Sequoia","Sera","Sienna","Sienta","Soarer","Soluna","Spade","Sparky","Sports 800","Sprinter","Sprinter Carib","Sprinter Marino","Sprinter Trueno","Starlet","Succeed","Supra","Tacoma","Tank","Tercel","Touring HiAce","Town Ace","Tundra","Urban Cruiser","Vanguard","Vellfire","Venza","Verossa","Verso","Verso-S","Vios","Vista","Vitz","Voltz","Voxy","WiLL","WiLL Cypha","Windom","Wish","Yaris","Yaris Verso"],"Trabant": ["1.1","600","P 601","P50"],"Tramontana": ["Tramontana"],"Triumph": ["Acclaim","Spitfire","Stag","TR4","TR6","TR7","TR8"],"TVR": ["280","350","390","400","420","450","Cerbera","Chimaera","Griffith","S-Series","Sagaris","Taimar","Tamora","Tasmin","Tuscan"],"Ultima": ["GTR"],"Vauxhall": ["Adam","Ampera","Astra","Carlton","Cavalier","Chevette","Corsa","Firenza","Frontera","Insignia","Meriva","Mokka","Monaro","Omega","Royale","Tigra","Vectra","Velox","Ventora","Viceroy","Victor","Viva","VXR8","Zafira"],"Vector": ["M12","W8 Twin Turbo"],"Venturi": ["210","260 LM","300 Atlantique","400 GT"],"Volkswagen": ["181","Amarok","Arteon","Arteon R","Atlas","Atlas Cross Sport","Beetle","Bora","Caddy","California","Caravelle","Corrado","Derby","Eos","EuroVan","Fox","Gol","Golf","Golf Country","Golf GTI","Golf Plus","Golf R","Golf R32","Golf Sportsvan","ID.3","ID.4","Iltis","Jetta","K70","Karmann-Ghia","Lavida","Lupo","Lupo GTI","Multivan","Parati","Passat","Passat (North America)","Passat CC","Phaeton","Pointer","Polo","Polo GTI","Polo R WRC","Quantum","Routan","Santana","Scirocco","Scirocco R","Sharan","T-Cross","T-Roc","T-Roc R","Taos","Taro","Teramont","Tiguan","Tiguan R","Touareg","Touran","Transporter","Type 1","Type 166","Type 2","Type 3","Type 4","Type 82","up!","Vento","XL1"],"Volvo": ["120 Series","140 Series","164","240 Series","260 Series","300 Series","440","460","480","66","740","760","780","850","940","960","C30","C40","C70","Laplander","P1800","P1900","S40","S60","S60 Cross Country","S70","S80","S90","V40","V40 Cross Country","V50","V60","V60 Cross Country","V70","V90","V90 Cross Country","XC40","XC60","XC70","XC90"],"Vortex": ["Corda","Estina","Tingo"],"W Motors": ["Fenyr Supersport","Lykan Hypersport"],"Wanderer": ["W23","W50"],"Wartburg": ["1.3","353"],"Weltmeister": ["EX5"],"Westfield": ["SEi & Sport","SEiGHT"],"Wiesmann": ["GT","Roadster"],"Willys": ["CJ","Jeepster","Knight Model 20","MB"],"Xin Kai": ["Pickup X3","SR-V X3","SUV X3"],"Xpeng": ["G3","P7"],"Yulon": ["Feeling"],"Zastava": ["10","Florida","Skala","Yugo"],"Zenos": ["E10"],"Zenvo": ["ST1"],"Zibar": ["MK2"],"Zotye": ["Coupa","E200","Nomad (RX6400)","SR9","T600","Z100","Z300"],"ZX": ["Admiral","Grand Tiger","Landmark"],"Автокам": ["2160","2163","3101"],"ГАЗ": ["12 ЗИМ","13 «Чайка»","14 «Чайка»","18","21 «Волга»","22 «Волга»","2308 «Атаман»","2330 «Тигр»","24 «Волга»","3102 «Волга»","31022 «Волга»","310221 «Волга»","31029 «Волга»","3103 «Волга»","3105 «Волга»","3110 «Волга»","31105 «Волга»","3111 «Волга»","46","61","64","69","Volga Siber","А","ГАЗ 67","М-20 «Победа»","М-72","М1"],"ЗАЗ": ["1102 «Таврия»","1103 «Славута»","1105 «Дана»","965","966","968","Chance","Forza","Lanos","Sens","Vida"],"ЗИЛ": ["111","114","117","4104"],"ЗиС": ["101","110"],"ИЖ": ["2125 «Комби»","2126 «Ода»","21261 «Фабула»","2715","2717","27175","Москвич-412"],"Канонир": ["2317"],"Комбат": ["Т98"],"ЛуАЗ": ["1302 Волынь","967","969"],"Москвич": ["2136","2137","2138","2140","2141","2142","400","401","402","403","407","408","410","411","412","423","424","426","427","430","434П","Дуэт","Иван Калита","Князь Владимир","Святогор","Юрий Долгорукий"],"СМЗ": ["С-1Л","С-3А","С-3Д","С-3Л"],"Спортивные авто и Реплики": ["GT & Touring","Offroad","Багги Type 1","Драгстер","Дрифт-кар","Реплики и Самоделки","Спортпрототип","Формула","Хот-род и Кастом"],"ТагАЗ": ["Aquila","C-30","C10","C190","Road Partner","Tager","Vega"],"УАЗ": ["3151","3153","3159","3160","3162 Simbir","469","Hunter","Patriot","Pickup","Астеро"],"Ё-мобиль": ["Ё-Кроссовер"]}');

// const models_list = Object.keys(models_data);


class RequestPage extends Component {
    state = {
        validated: false,
        // selectedMarkId: -1,

        send_number: 0,
        send_success: false,
    }
    constructor(props) {
        super(props);
        this.onSelectMark = this.onSelectMark.bind(this);
        this.onSelectModel = this.onSelectModel.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.testForm = this.testForm.bind(this);

        this.fieldName = createRef();
        this.fieldPhone = createRef();
        this.fieldAutoMark = createRef();
        this.fieldAutoVIN = createRef();
        this.fieldAutoNumber = createRef();
        this.fieldWorks = createRef();
    }

    onSelectMark(id, value) {
        this.setState({selectedMark: id});
    }

    onSelectModel(id, value) {
        this.setState({selectedModel: id});
    }

    testForm() {
        const fields = [
            this.fieldName, this.fieldPhone, this.fieldAutoMark, this.fieldAutoVIN, this.fieldAutoNumber, this.fieldWorks
        ]

        this.setState({
            validated: !fields.find(value => !(value.current && value.current.isValid()))
        });
    }

    sendForm() {
        // name, email, phone, auto_mark, auto_model, description
        let data = {
            name:        this.fieldName.current.value(),
            phone:       this.fieldPhone.current.value(),
            auto_mark:   this.fieldAutoMark.current.value(),
            auto_vin:    this.fieldAutoVIN.current.value(),
            auto_number: this.fieldAutoNumber.current.value(),
            works:       this.fieldWorks.current.value(),
        }
        API.subscribe(data).then(({data: {id}}) => {
            this.setState({
                send_number: id,
                send_success: true,
            });
        }).catch(err => {
            console.log(err);
        });
        // console.log(data);
    }

    render() {
        const {
            validated,
            send_success,
            send_number = 0,
        } = this.state;
        const {
            indicators: {
                [LOAD_SERVICES_NAME]: loading = false
            }
        } = this.props;
        if(send_success) {
            return (<>
                <Animated
                    className="request__form"
                    animationInDelay={0}
                    animationInDuration={500}
                    animationIn="fadeInUp"
                    isVisible={true}
                >
                    <div className="forms">
                        Ваше обращение отправлено. Ему присвоен номер <b>#{send_number}</b>. В ближайшее время с Вами свяжется специалист, ожидайте.
                    </div>
                </Animated>
            </>);
        } else {
            return (<>
                <Animated
                    className="request__form"
                    animationInDelay={0}
                    animationInDuration={500}
                    animationIn="fadeInUp"
                    isVisible={true}
                >
                    <div className="forms">
                        <Input ref={this.fieldName} name="name" title="Имя" onChange={this.testForm} />
                        <Input ref={this.fieldPhone} name="phone" title="Номер телефона" onChange={this.testForm} />
                        <Input ref={this.fieldAutoMark} name="auto_mark" title="Марка автомобиля" onChange={this.testForm} />
                        <Input ref={this.fieldAutoVIN} name="auto_vin" title="VIN-номер" validator={() => false} onChange={this.testForm} />
                        <Input ref={this.fieldAutoNumber} name="auto_number" title="Номер автомобиля" validator={() => false} onChange={this.testForm} />
                        <TextArea ref={this.fieldWorks} name="works" title="Описание работ" validator={(value) => {
                            if(!value)
                                return 'Поле должно быть заполнено.';
                            if(value.length < 6)
                                return 'Описание должно быть длиннее 6 символов.';
                            if(value.length > 1000)
                                return 'Описание не должно быть длиннее 1000 символов.';
                            return false;
                        }} onChange={this.testForm} />
                        <Button enabled={!loading && validated} onClick={this.sendForm}>Отправить</Button>
                    </div>
                </Animated>
            </>);
        }
    }
}


const mapStateToProps = state => ({
    services: state.services,
    indicators: state.indicators.falgs,
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(RequestPage);
