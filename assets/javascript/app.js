//Object with question arrays
var triviaQs={
    Questions:[[{Q:"Where is the Doctor from?", A:"Gallifrey"}, [{Title:"Gallifrey", Value:true}, {Title:"Earth", Value:false}, {Title: "Mars", Value:false}, {Title:"New Earth", Value:false}]],
        [{Q:"Who was the most recent doctor?", A:"Peter Capaldi"}, [{Title:"David Tenant", Value:false}, {Title:"Matt Smith", Value:false}, {Title:"Peter Capaldi", Value:true}, {Title:"William Hartnell", Value:false}]],
        [{Q:"Who will be the next doctor?", A:"Jodie Whittaker"}, [{Title:"David Tenant", Value:false}, {Title:"Ian McKellan", Value:false}, {Title:"Iris O'Bannon", Value:false}, {Title:"Jodie Whittaker", Value:true}]],
        [{Q:"Who was the Tenth Doctor?", A:"David Tenant"}, [{Title:"David Tenant", Value:true}, {Title:"Matt Smith", Value:false}, {Title:"Christopher Eccleston", Value:false}, {Title:"Patrick Stewart", Value:false}]],
        [{Q:"When did the Doctor meet River Song for the first time?", A:"Silence in the Library"}, [{Title:"Rose", Value:false}, {Title:"Blink", Value:false}, {Title:"Silence in the Library", Value:true}, {Title:"Let's Kill Hitler", Value:false}]],
        [{Q:"Who are River Song's parents?", A:"Amelia and Rory Pond"}, [{Title:"Amelia and Rory Pond", Value:true}, {Title:"The Doctor and Romana", Value:false}, {Title:"The Doctor and Sarah Jane Smith", Value:false}, {Title:"We don't know", Value:false}]],
        [{Q:"What is the band that writes and performs songs about Doctor Who?", A:"Chameleon Circuit"}, [{Title:"Blink-182", Value:false}, {Title:"Chameleon Circuit", Value:true}, {Title:"Green Day", Value:false}, {Title:"Weird Sisters", Value:false}]],
        [{Q:"Who is 'the Doctor's Wife'?", A:"The TARDIS"}, [{Title:"River Song", Value:false}, {Title:"The TARDIS", Value:true}, {Title:"Rose Tyler", Value:false}, {Title:"Donna Noble", Value:false}]],
        [{Q:"What does TARDIS stand for?", A:"Time and Relative Dimensions in Space"}, [{Title:"Time and Raging Daleks in Space", Value:false}, {Title:"Time and Relative Dimensions in Space", Value:true}, {Title:"Theories and Returned Deposits in Sofas", Value:false}, {Title:"Time and Raunchy Dimensions in Scenes", Value:false}]],
        [{Q:"What species fights the Time Lords in the Time War?", A:"The Daleks"}, [{Title:"The Daleks", Value:true}, {Title:"The Cybermen", Value:false}, {Title:"Humans", Value:false}, {Title:"The Cat Nurses", Value:false}]],
        [{Q:"Who is the Doctor's nemesis?", A:"The Master"}, [{Title:"Romana", Value:false}, {Title:"Rose Tyler", Value:false}, {Title:"The Master", Value:false}, {Title:"Donna Noble", Value:false}]],
        [{Q:"Who does Rose Tyler bring back from the dead?", A:"Capt. Jack Harkness"}, [{Title:"The Doctor", Value:false}, {Title:"The Master", Value:false}, {Title:"her mother", Value:false}, {Title:"Capt. Jack Harkness", Value:true}]],
        [{Q:"Which comedian was a companion of the Doctor for a season?", A:"Catherine Tate"}, [{Title:"Billy Piper", Value:false}, {Title:"Robin Williams", Value:false}, {Title:"Jimmy Savile", Value:false}, {Title:"Catherine Tate", Value:true}]],
        [{Q:"What spin-off featured John Barrow as leader, Captain Jack Harkness?", A:"Torchwood"}, [{Title:"Doctor Companions in Space", Value:false}, {Title:"Queen Victoria's Revenge", Value:false}, {Title:"Torchwood", Value:true}, {Title:"Teachingwood", Value:false}]],
        [{Q:"who started Torchwood?", A:"Queen Victoria"}, [{Title:"The Doctor", Value:false}, {Title:"Queen Victoria", Value:true}, {Title:"Rose Tyler", Value:false}, {Title:"Capt. Jack Harkness", Value:false}]],
        [{Q:"What kid spin-off show ended with the death of its titular character?", A:"The Sarah Jane Smith Chronicles"}, [{Title:"Torchwood", Value:false}, {Title:"Doctor Companions in Space", Value:false}, {Title:"The Sarah Jane Smith Chronicles", Value:true}, {Title:"Doctor Who", Value:false}]],
        [{Q:"What was the name of the Doctor's robot dog?", A:"K-9"}, [{Title:"Spot", Value:false}, {Title:"K-9", Value:true}, {Title:"Kellog", Value:false}, {Title:"Super Dog", Value:false}]],
        [{Q:"What actor played the first Doctor?", A:"William Hartnell"}, [{Title:"William Hartnell", Value:true}, {Title:"Tom Baker", Value:false}, {Title:"Matt Smith", Value:false}, {Title:"John Barrow", Value:false}]],
        [{Q:"What disease prevented William Hartnell from continuing his role as the Doctor?", A:"Multiple Sclerosis"}, [{Title:"Syphilis", Value:false}, {Title:"Multiple Sclerosis", Value:true}, {Title:"Lupus", Value:false}, {Title:"cancer", Value:false}]],
        [{Q:"Which actor played the Doctor wearing an outrageously long scarf?", A:"Tom Baker"}, [{Title:"William Hartnell", Value:false}, {Title:"Jodie Whittaker", Value:false}, {Title:"Tom Baker", Value:true}, {Title:"Matt Smith", Value:false}]],

]

}
//win and lose counters
win=0;
lose=0;
//the boolean variable for choice value. Ended up being a stirng
var choiceValue=false;
//boolean for determining whether or not to run wrong function
var wrongness=false;
//the correct answer
var correctWord="";
//variable solely for less typing in newQuestion function
var currentQuestion;
//counter for running through the array of questions
var j=0;
//the timer
var timeLeft=11;
//var that will check to see if all of the questions have been answered
var t=1;

//when the start button is clicked
$("#start-button").on("click", function(){
    //the start button goes away
    $("#start-button").detach(".start-div");
     //function for adding a question and answers
    newQuestion();
})

//when the div that held the starter button hears the id startover-button and it is clicked
$(".start-div").on("click", "#startover-button", function(){
    //startover-button goes away
    $("#startover-button").detach();
    //the section that holds the timer goes away
    $("#timer").empty();
    //all the variables are reset
    win=0;
    lose=0;
    j=0;
    t=1;
    //used for debugging
    console.log("success");  
    //all the answer buttons reappear (hidden in end screen)  
    $(".answers").show();
    //function for adding question and answers
    newQuestion();
})

//when the answer button is clicked (answer box is listening for answer button? Not sure how this works)
$("#answer-box").on("click", ".answer-button", function(){
    console.log("working");
    //the value set up in the newQuestion function is attached to this variable
    choiceValue = $(this).attr("Value");
    //the choice the user picked
    var choice=$(this).attr("Title"); 
    //timer is stopped
    clearInterval(timer);
    console.log(choiceValue);
    console.log(correctWord); 
    //conditional checking the value of the button (if true)
        if(choiceValue==="true"){
            //run congrats function
            congrats(correctWord);
            console.log(correctWord);
    }
        //otherwise change the wrongness boolean to true
        else if (choiceValue==="false"){
            wrongness=true;
            console.log("wrongness", wrongness);
        }
        //if the wrongness boolean is true then 
    if(wrongness===true){
        //wrong function is called
        wrong(correctWord);
        console.log("wrong", correctWord);
        //wrong boolean reset
        wrongness=false;
    }
});
//timer function
function timerStarting(){
    //as long as timeLeft variable is greater than 0
    if(timeLeft>0){
        //timeLeft decreases by 1
        timeLeft--;
        //displayed in the timer div
    $("#timer").html(timeLeft);
    }
    //if timeLeft is 0 then the timer stops and wrong function is called
    if(timeLeft===0){
        clearInterval(timer);
        wrong(correctWord);
    }      
};

//function declaration for getting the right answer
function congrats(correctAnswer){
    $("#question").html('<p>Correct! The right answer was '+correctAnswer+'.</p>');
    win++;
    console.log("win counter", win);
    //displays what is on the screen for 2 seconds before running the newQuestion function
    setTimeout(newQuestion, 2000);
    //tardis traveling through space
    $("body").css("background", "url(assets/images/doctor_who_gif.webp");
    j++;
}

//function delcaration for getting wrong answer or running out of time
function wrong(correctAnswer){
    $("#question").html('<p>Oh no! The Daleks win again! The correct answer was '+correctAnswer+'.</p>');
    lose++;
    console.log("lose counter", lose);    
    setTimeout(newQuestion, 2000);
    $("body").css("background", "url(assets/images/doctor_who_gif.webp");
    j++
}

//this starts the game
function start(){
    //starting screen
    $("#question").html("<div>Help the Doctor save the Universe! Click start to begin.</div>");
    $("#question").css("font-size", "20px");
}

//function declaration for newQuestion()
function newQuestion(){
    //counter for the questions
    t++;
    console.log("t variable", t);
    if(t<triviaQs.Questions.length){
    timeLeft=11;
    $("body").css("background", "url(assets/images/pd1_background.jpg)");
    //adding the new question to the DOM
    currentQuestion=triviaQs.Questions[j][1];
    $("#question").html(triviaQs.Questions[j][0].Q);
    $("#answer1").html('<button class="btn btn-default answer-button answers" value='+currentQuestion[0].Value+'>'+currentQuestion[0].Title+'</button>');
    $("#answer2").html('<button class="btn btn-default answer-button answers" value=' +currentQuestion[1].Value+ '>'+currentQuestion[1].Title+'</button>');
    $("#answer3").html('<button class="btn btn-default answer-button answers" value='+currentQuestion[2].Value+'>'+currentQuestion[2].Title+'</button>');
    $("#answer4").html('<button class="btn btn-default answer-button answers" value='+currentQuestion[3].Value+'>'+currentQuestion[3].Title+'</button>');
    correctWord = triviaQs.Questions[j][0].A;  
    //this makes the timer work.  
    timer=setInterval(timerStarting, 1000);
    }
    else{
        // all the questions are done
        $("#question").html("Game Over!");
        $(".answers").hide();
        //displays the number correct and wrong
        $("#timer").html("<div>You have "+win+" questions correct and "+lose+" questions wrong.</div>");
        $(".start-div").html('<button class="btn btn-default" id="startover-button">Play again?</button>');
    }
    
    
    //tried to do answer appending via new JS backticks
//     for (var i=0; i<4; i++){
//         //need to figure out how to add the questions to each element.
//         //just select by ID?
//         document.getElementById(`"#answer${i}"`).innerHTML ="<div>`${triviaQs.Questions[0][1][i]}`</div>";
//     }
// }
//use the example of the time converter from stopwatch to help with the display of the timer here
}



start();