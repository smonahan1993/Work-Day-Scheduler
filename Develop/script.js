var nine = document.querySelector(".nine");
var ten = document.querySelector(".ten");
var eleven = document.querySelector(".eleven");
var twelve = document.querySelector(".twelve");
var thirteen = document.querySelector(".thirteen");
var fourteen = document.querySelector(".fourteen");
var fifteen = document.querySelector(".fifteen");
var sixteen = document.querySelector(".sixteen");
var seventeen = document.querySelector(".seventeen");



var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));



var time = moment().format("HH");

console.log(time);

function isNine (){
   
if (time === 9) {
    nine.style.backgroundColor = "red";
    console.log('red');
} else if (time < 9) {
    nine.style.backgroundColor = "green";
    console.log('green');
} else if (time > 9) {
    nine.style.backgroundColor = "gray";
    console.log('gray');
}
}



function isTen (){
   
    if (time === 10) {
        ten.style.backgroundColor = "red";
        console.log('red');
    } else if (time < 10) {
        ten.style.backgroundColor = "green";
        console.log('green');
    } else if (time > 10) {
        ten.style.backgroundColor = "gray";
        console.log('gray');
    }
    }
    
function isEleven (){
   
        if (time === 11) {
            eleven.style.backgroundColor = "red";
            console.log('red');
        } else if (time < 11) {
            eleven.style.backgroundColor = "green";
            console.log('green');
        } else if (time > 11) {
            eleven.style.backgroundColor = "gray";
            console.log('gray');
        }
        }
function isTwelve (){
   
        if (time === 12) {
                twelve.style.backgroundColor = "red";
                console.log('red');
        } else if (time < 12) {
                twelve.style.backgroundColor = "green";
                console.log('green');
        } else if (time > 12) {
                twelve.style.backgroundColor = "gray";
                console.log('gray');
        }
        }
function isThirteen (){
   
         if (time === 13) {
                    thirteen.style.backgroundColor = "red";
                    console.log('red');
        } else if (time < 13) {
                    thirteen.style.backgroundColor = "green";
                    console.log('green');
        } else if (time > 13) {
                    thirteen.style.backgroundColor = "gray";
                    console.log('gray');
        }
        }

function isFourteen (){
   
        if (time === 14) {
                       fourteen.style.backgroundColor = "red";
                       console.log('red');
        } else if (time < 14) {
                       fourteen.style.backgroundColor = "green";
                       console.log('green');
        } else if (time > 14) {
                       fourteen.style.backgroundColor = "gray";
                       console.log('gray');
        }
        }
 function isFifteen (){
   
         if (time === 15) {
                           fifteen.style.backgroundColor = "red";
                           console.log('red');
        } else if (time < 15) {
                           fifteen.style.backgroundColor = "green";
                           console.log('green');
        } else if (time > 15) {
                           fifteen.style.backgroundColor = "gray";
                           console.log('gray');
        }
        }

function isSixteen (){
   
        if (time === 16) {
                              sixteen.style.backgroundColor = "red";
                              console.log('red');
        } else if (time < 16) {
                              sixteen.style.backgroundColor = "green";
                              console.log('green');
        } else if (time > 16) {
                              sixteen.style.backgroundColor = "gray";
                              console.log('gray');
        }
        }
function isSeventeen (){
   
        if (time === 17) {
                                  seventeen.style.backgroundColor = "red";
                                  console.log('red');
        } else if (time < 17) {
                                  seventeen.style.backgroundColor = "green";
                                  console.log('green');
        } else if (time > 17) {
                                  seventeen.style.backgroundColor = "gray";
                                  console.log('gray');
        }
        }
        
         
isTen ();
isNine ();
isEleven ();
isTwelve ();
isThirteen ();
isFourteen ();
isFifteen ();
isSixteen ();
isSeventeen ();