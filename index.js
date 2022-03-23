const express = require("express");
const app = express();
const path = require("path");
app.set("vie")




const pokedex = [{
    id:'126',
    nome:'Magmar',
    imagem:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
    description:'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.',
    type:'Spitfire'
},
{ id:'046',
nome:'Paras',
imagem:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
description:'Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.',
type:'Mushroom'
},
{ id:'343',
nome:'Baltoy',
imagem:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/343.png',
description:'It moves while spinning around on its single foot. Some Baltoy have been seen spinning on their heads.',
type:'Clay Doll'
}
];

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index",{pokedex});
});


app.listen(3000, ()=> console.log('Sevidor rodando em http://localhost:3000'));