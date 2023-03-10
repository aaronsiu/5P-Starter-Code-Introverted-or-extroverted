let button=document.querySelector(".submit");
let book = false; 
let bookelement=document.querySelector(".Book");
let familyelement=document.querySelector(".Family");
let calmelement=document.querySelector(".CalmMusic");
let mediaelement=document.querySelector(".SocialMedia");
let family = false;
let calm = false;
let media = false;
bookelement.onclick=function () {
      book = true;
};

familyelement.onclick=function () {
    family = true;
};

calmelement.onclick=function () {
    calm = true;
};

mediaelement.onclick=function () {
    media = true;
};

button.onclick=function() {
    let result=document.querySelector(".result");
    let answer=document.querySelector(".answer").value;  
 if (answer <= 18 && book === true ) 
 { result.innerHTML = ("Introverted");} 
    else if (answer <= 18 && family === true )
    {result.innerHTML = ("Extroverted");}
    else if ( answer <= 18 && calm === true)
    {result.innerHTML = ("Introverted");}
    else if (answer <=18 && media === true)
    {result.innerHTML = ("Extroverted");}
};
        



