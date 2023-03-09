let aubreyBtn = document.getElementById("AUBREY");
let omoriBtn = document.getElementById("OMORI");
let kelBtn = document.getElementById("KEL");
let heroBtn = document.getElementById("HERO");
let mariBtn = document.getElementById("MARI");
let basilBtn = document.getElementById("BASIL");
let imgchange = document.getElementById("imgchange");
const fulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");

omoriBtn.onclick = function(){
    imgchange.src = "../IMAGENES/Omori_Fullbody.png";
    document.getElementById("NAME").innerHTML = "OMORI";
    document.getElementById("INFO").innerHTML = "This is OMORI. He's been living in WHITE SPACE for as long as he <br> can remember, but it seems like he can't remember much else.";
    document.getElementById("GENDER").innerHTML = "MALE";
    document.getElementById("AGE").innerHTML = "12";
    document.getElementById("BIRTHDAY").innerHTML = "JULY 20TH";
    document.getElementById("LEADSKILL").innerHTML = "CUT OBSTACLES";
    document.getElementById("LOCATION").innerHTML = "WHITE SPACE";
    document.getElementById("RELATIVES").innerHTML = "MARI (OLDER SISTER)";
    document.getElementById("RELATIONS").innerHTML = "HERO (FRIEND) <br> KEL (FRIEND) <br>AUBREY (FRIEND) <br> BASIL (BEST FRIEND)";
}
aubreyBtn.onclick = function(){
    imgchange.src = "../IMAGENES/Aubrey_Fullbody.png";
    document.getElementById("NAME").innerHTML = "AUBREY";
    document.getElementById("INFO").innerHTML = "The sweet and strong-willed AUBREY stands up for her <br> friends in battle and is their constant source of morale.";
    document.getElementById("GENDER").innerHTML = "FEMALE";
    document.getElementById("AGE").innerHTML = "12";
    document.getElementById("BIRTHDAY").innerHTML = "MAY 23RD";
    document.getElementById("LEADSKILL").innerHTML = "SMASH OBSTACLES";
    document.getElementById("LOCATION").innerHTML = "NEIGHBOR'S ROOM";
    document.getElementById("RELATIVES").innerHTML = "NONE";
    document.getElementById("RELATIONS").innerHTML = "OMORI (FRIEND) <br> HERO (FRIEND) <br> KEL (FRIEND) <br>MARI (FRIEND) <br> BASIL (FRIEND)";
}
kelBtn.onclick = function(){
    imgchange.src = "../IMAGENES/Kel_Fullbody.png";
    document.getElementById("NAME").innerHTML = "KEL";
    document.getElementById("INFO").innerHTML = "Though he's got an impulsive and competitive streak, KEL is an <br> ever loyal companion. You can count on his athletic talent and his dexterity with a ball to knock down foes."
    document.getElementById("GENDER").innerHTML = "MALE";
    document.getElementById("AGE").innerHTML = "12";
    document.getElementById("BIRTHDAY").innerHTML = "NOVEMBER 11TH";
    document.getElementById("LEADSKILL").innerHTML = "THROW BALL";
    document.getElementById("LOCATION").innerHTML = "NEIGHBOR'S ROOM";
    document.getElementById("RELATIVES").innerHTML = "HERO (OLDER BROTHER)";
    document.getElementById("RELATIONS").innerHTML = "OMORI (FRIEND) <br> AUBREY (FRIEND) <br>MARI (FRIEND) <br> BASIL (FRIEND)";
}
heroBtn.onclick = function(){
    imgchange.src = "../IMAGENES/Hero_Fullbody.png";
    document.getElementById("NAME").innerHTML = "HERO";
    document.getElementById("INFO").innerHTML = "As the eldest, wisest, and most winsome, HERO often plays <br> peacemaker within the gang and settles spats between <br> AUBREY and KEL. "
    document.getElementById("GENDER").innerHTML = "MALE";
    document.getElementById("AGE").innerHTML = "15";
    document.getElementById("BIRTHDAY").innerHTML = "JANUARY 1ST";
    document.getElementById("LEADSKILL").innerHTML = "CHARM";
    document.getElementById("LOCATION").innerHTML = "NEIGHBOR'S ROOM";
    document.getElementById("RELATIVES").innerHTML = "KEL (YOUNGER BROTHER)";
    document.getElementById("RELATIONS").innerHTML = "OMORI (FRIEND) <br> AUBREY (FRIEND) <br> BASIL (FRIEND) <br> MARI (LOVE INTEREST) ";
}
mariBtn.onclick = function(){
    imgchange.src = "../IMAGENES/Mari_Fullbody.png";
    document.getElementById("NAME").innerHTML = "MARI";
    document.getElementById("INFO").innerHTML = "Big sister MARI is the glue that holds everyone together. <br> She is always around with her warm smile and a word of advice."
    document.getElementById("GENDER").innerHTML = "FEMALE";
    document.getElementById("AGE").innerHTML = "15";
    document.getElementById("BIRTHDAY").innerHTML = "MARCH 1ST";
    document.getElementById("LEADSKILL").innerHTML = "NONE";
    document.getElementById("LOCATION").innerHTML = "HEAD SPACE";
    document.getElementById("RELATIVES").innerHTML = "OMORI (YOUNGER BROTHER)";
    document.getElementById("RELATIONS").innerHTML = "KEL (FRIEND) <br> AUBREY (FRIEND) <br> BASIL (FRIEND) <br> HERO (LOVE INTEREST) ";
}
basilBtn.onclick = function(){
    imgchange.src = "../IMAGENES/Basil_Fullbody.png";
    document.getElementById("NAME").innerHTML = "BASIL";
    document.getElementById("INFO").innerHTML = "BASIL is a gentle soul and would rather tend to his plants than <br> fight. He holds many things in his life dear, especially his friends."
    document.getElementById("GENDER").innerHTML = "MALE";
    document.getElementById("AGE").innerHTML = "12";
    document.getElementById("BIRTHDAY").innerHTML = "FEBRUARY 18TH";
    document.getElementById("LEADSKILL").innerHTML = "NONE";
    document.getElementById("LOCATION").innerHTML = "OLD SHOE";
    document.getElementById("RELATIVES").innerHTML = "GRANDMOTHER";
    document.getElementById("RELATIONS").innerHTML = "OMORI (BEST FRIEND) <br> HERO (FRIEND) <br> KEL (FRIEND) <br> AUBREY (FRIEND) <br> MARI (FRIEND)";
}



function openFullImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}

function closeImg(){
    fulImgBox.style.display = "none";
}
