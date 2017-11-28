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

win=0;
lose=0;
var choiceValue=false;
var wrongness=false;
var correctWord="";
var currentQuestion;
var j=0;


$("#start-button").on("click", function(){
    $("#question").css("font-size", "14px");
    $("#start-button").detach(".start-div");
    newQuestion();
    //shows gif of tardis traveling
    //function for adding a question and answers
})


$("#answer-box").on("click", ".answer-button", function(){
    //store the click word
    console.log("working");
    choiceValue = $(this).attr("Value");
    var choice=$(this).attr("Title"); 
    correctWord = triviaQs.Questions[j][0].A;
    console.log(choiceValue);
    console.log(correctWord); 
    //get the value
    //run for loop to check stored value against the trivia Question Answer
        if(choiceValue==="true"){
            congrats(correctWord);
            console.log(correctWord);
    }
        else if (choiceValue==="false"){
            wrongness=true;
            console.log("wrongness", wrongness);
        }
    if(wrongness===true){
        wrong(correctWord);
        console.log("wrong", correctWord);
    }
});

function congrats(correctAnswer){
    $("#question").empty();
    $("#question").html('<p>Correct! The right answer was '+correctAnswer+'.</p>');
    win++;
    console.log("win counter", win);
    setTimeout(newQuestion, 3000);
    $("body").css("background", "url(assets/images/doctor_who_gif.webp");
    j++
}

function wrong(correctAnswer){
    $("#question").html('<p>Oh no! The Daleks win again! The correct answer was '+correctAnswer+'.</p>');
    lose++;
    setTimeout(newQuestion, 3000);
    $("body").css("background", "url(assets/images/doctor_who_gif.webp");
    j++
}

function start(){
    //win and loss tallies
    win=0;
    lose=0;
    //starting screen
    $("#question").html("<div>Help the Doctor save the Universe! Click start to begin.</div>");
    $("#question").css("font-size", "20px");
    //reset the timer
}

function newQuestion(){
    //emptying out starting screen;
    $("#question").empty();
    $(".answers").empty();
    $("body").css("background", "url(assets/images/pd1_background.jpg)");
    //adding the new question to the DOM
    currentQuestion=triviaQs.Questions[j][1];
    $("#question").html(triviaQs.Questions[j][0].Q);
    $("#answer1").html('<button class="btn btn-default answer-button answers" value='+currentQuestion[0].Value+'>'+currentQuestion[0].Title+'</button>');
    $("#answer2").html('<button class="btn btn-default answer-button answers" value=' +currentQuestion[1].Value+ '>'+currentQuestion[1].Title+'</button>');
    $("#answer3").html('<button class="btn btn-default answer-button answers" value='+currentQuestion[2].Value+'>'+currentQuestion[2].Title+'</button>');
    $("#answer4").html('<button class="btn btn-default answer-button answers" value='+currentQuestion[3].Value+'>'+currentQuestion[3].Title+'</button>');
    
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