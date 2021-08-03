var nine = document.querySelector(".nine");
var ten = document.querySelector(".ten");
var eleven = document.querySelector(".eleven");
var twelve = document.querySelector(".twelve");
var thirteen = document.querySelector(".thirteen");
var fourteen = document.querySelector(".fourteen");
var fifteen = document.querySelector(".fifteen");
var sixteen = document.querySelector(".sixteen");
var seventeen = document.querySelector(".seventeen");
var comment = document.querySelectorAll("textarea");
var saveButton = document.querySelectorAll("button");
var timeBlocks = document.querySelectorAll(".time-block")
var todos = JSON.parse(localStorage.getItem("todoInput")) || []

for (let i = 0; i < timeBlocks.length; i++) {
  console.log(timeBlocks[i]);
  saveButton[i].addEventListener("click", function(event) {
    event.preventDefault();
    var todoInput = {
        comment: comment[i].value.trim()
      }; 
      todos.push(todoInput);
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem("todoInput", JSON.stringify(todos));
    // Use JSON.parse() to convert text to JavaScript object
    var lastTodo = JSON.parse(localStorage.getItem("todoInput"));
    // Check if data is returned, if not exit out of the function
    console.log(lastTodo);
    if (lastTodo[i] !== null) {
        comment[i].innerHTML = lastTodo[i].comment;
    } else {
        return; 
    }

  });

    

}


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

// function saveLast() {
//     // Save related form data as an object
//     var todoInput = {
//       comment: comment[i].value.trim()
//     };
//     // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
//     localStorage.setItem("todoInput", JSON.stringify(todoInput));
//   }

// function renderLast() {
//     // Use JSON.parse() to convert text to JavaScript object
//     var lastTodo = JSON.parse(localStorage.getItem("todoInput"));
//     // Check if data is returned, if not exit out of the function
//     if (lastTodo !== null) {
//         document.querySelector("textarea").innerHTML = lastTodo.comment;
//     } else {
//       return;
//     }
//   }

// saveButton[0].addEventListener("click", function(event) {
//     event.preventDefault();
//     saveLast();
//     renderLast();

//   });

//   function init() {
//     // When the init function is executed, the code inside renderLastGrade function will also execute
//     renderLast();
//   }
//   init();

