const REZYMES=document.querySelector('.REZYMES')

const ussers=[
    {Img:'https://b.fssta.com/uploads/application/soccer/headshots/24527.png',name:'Dybala',club:'AS Roma',age:'30',country:'Argentina',Professia:'Footballer',position:'Правый Вингер'},
    {Img:'https://b.fssta.com/uploads/application/soccer/headshots/40670.png',name:'Mbappe',club:'PSG',age:'24',country:'France',Professia:'Footballer',position:'Левый Вингер'},
    {Img:'https://b.fssta.com/uploads/application/soccer/headshots/113.png',name:'Giroud',club:'Milan',age:'37',country:'France',Professia:'Footballer',position:'Нападающий'},
    {Img:'https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png',name:'C.Ronaldo',club:'Al Naser',age:'38',country:'Portugal',Professia:'Footballer',position:'Нападающий'},
    {Img:'https://a.espncdn.com/i/headshots/nhl/players/full/3042037.png',name:'Ovechkin',club:'Washington',age:'38',country:'Rossian',Professia:'Hockey Striker',position:'Нападающий'},
    {Img:'https://e00-marca.uecdn.es/assets/sports/headshots/football/156/png/144x144/55634.png',name:'Muller',club:'Bayern Munchen',age:'34',country:'Germany',Professia:'Footballer',position:'Полузащитник'},
    {Img:'https://cdn-headshots.theathletic.com/soccer/7xEUjiSaEQPDdGFz_200x200.png',name:'Sane',club:'',age:'27',country:'Germany',Professia:'Footballer',position:'Правый Вингер'},
    {Img:'https://b.fssta.com/uploads/application/soccer/headshots/68549.png',name:'Saka',club:'Arsenal',age:'22',country:'England',Professia:'Footballer',position:'Полузащитник'},
    {Img:'https://a.espncdn.com/i/headshots/soccer/players/full/11001.png',name:' Ibragimovich',club:'Milan',age:'42',country:'Sweden',Professia:'Footballer',position:'Нападающий'},
    {Img:'https://assets.laliga.com/squad/2023/t179/p17861/2048x2225/p17861_t179_2023_1_001_000.png',name:'Sergio Ramos',club:'Sevilla',age:'37',country:'Spain',Professia:'Footballer',position:'Защитник'},
]

function ussernames(array) {
    for (const ussernames of array){
    REZYMES.innerHTML+=`
    <div class = "names">
    <img width '200px' src='${ussernames.Img}'/>
    <h4> Имя: ${ussernames.name}</h4>
    <h5> Клуб ${ussernames.club}</h5>
    <h5> ${ussernames.age} Жаш   </h5>
    <h5> Страна ${ussernames.country}</h5>
    <h5> Профессия ${ussernames.Professia}</h5>
    <h5> Позиция ${ussernames.position}</h5>
    </div>
    `
    }
}
ussernames(ussers)