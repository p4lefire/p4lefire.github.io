document.addEventListener('DOMContentLoaded', postData);
console.log(document.location.search); 

const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get('fname');
const amount = params.get('amount');
const specialties = params.getAll('specialties');
const dhall = params.get('dhall');
const stucen = params.get('stucen');
const college = params.get('college');
const bunk = params.get('bunk');

/*
tator tots: you're very elusive and don't get a lot of attention outside of certain groups. 
you're not quite like the others, but you persevere regardless. 
wait, why are you here? this is a quiz on fries...

sidewinders: everyone loves you. people look forward to seeing you and will fight one another to simply lay eyes on you.

shoestring fries: you like following the crowd. 
you're not sure what you want to be, but you're doing your best to get there. you work well in groups.

waffle fries: you should apply for a job at chick-fil-a.
*/

//and &&, or ||, in , not !
let tator = 0;
let sidewinders = 0;
let shoestring = 0;
let waffle = 0;
let character;
let image;
let desc;


if (specialties == "eggpizza"){
    waffle += 1;
}
if (specialties == "playdoh"){
    sidewinders += 1;
}

if (specialties == "rice"){
    tator += 1;
}

if (specialties == "corn"){
    shoestring += 1;
}

///

if (dhall == "nave"){
    sidewinders += 1;
}

else if (dhall == "brittain"){
    waffle += 1;
}

else if (dhall == "willage"){
    shoestring += 1;
}

else if (dhall == "woodies"){
    tator += 1;
}

////

if (stucen == "cfa"){
    waffle += 1;
}

else if (stucen == "sluttyvegan"){
    sidewinders +=1;
}

else if (stucen == "testkitchen"){
    shoestring +=1;
}

else if (stucen == "depoe"){
    tator +=1;
}

////

if (college == "coc"){
    shoestring +=1;
}

else if (college == "cos"){
    sidewinders += 1;
}

else if (college == "coe"){
    waffle += 1;
}

else if (college == "scheller"){
    tator += 1;
}

else if (college == "cod"){
    waffle += 1;
}

else if (college == "ivanallen"){
    shoestring += 1;
}

////

if (bunk == "top"){
    sidewinders += 1;
}

else if (bunk == "bottom"){
    shoestring +=1;
}

else if (bunk == "switch"){
    waffle +=1;
}

else if (bunk == "donotbunk"){
    tator +=1;
}

////

 //defines what u are for var based on if statement

if (waffle > tator && waffle > shoestring && waffle > sidewinders){
    character = "waffle fries";
    image = 'images/wafflefries.jpg';
    desc = "You should apply for a job at Chick-Fil-A.";
}

else if (shoestring > waffle && shoestring > sidewinders && shoestring > tator){
    character = "shoestring fries";
    image = 'images/shoestringfries.jpg';
    desc = "You like following the crowd.\nYou're not sure what you want to be, but you're doing your best to get there.\nYou work well in groups.";
}

else if (sidewinders > waffle && sidewinders > shoestring && sidewinders > tator){
    character = "sidewinders";
    image = 'images/sidewinders.jpg';
    desc = "Everyone loves you. People look forward to seeing you and will fight one another to simply lay eyes on you.";
}

else{
    character = "tator tots";
    image = 'images/tatortots.jpg'
    desc = "You're very elusive and don't get a lot of attention outside of certain groups.\nYou're not quite like the others, but you persevere regardless.\nWait, why are you here? This is a quiz on fries...";
}
 //writing html code
function postData(){
    const container = document.getElementById('results');
    container.innerHTML = `<h1>${name}, you are ${character}!</h1>
                            <img src = ${image}></img>
                            <p>${desc}</p>
                            <a class="back" href="form.html">Back to Quiz</a>`
                            ; 
                            // be careful about syntax in innerhtml bc vsc doesn't autocomplete
                            
}
