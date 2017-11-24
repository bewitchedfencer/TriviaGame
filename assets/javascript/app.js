var triviaQs={
    Questions:[[["Where is the Doctor from?", "Gallifrey"], ["Gallifrey", "Earth", "Mars", "New Earth"]],
        [["Who was the most recent doctor?", "Peter Capaldi"], ["David Tenant", "Matt Smith", "Peter Capaldi", "William Hartnell"]],
        [["Who will be the next doctor?", "Jodie Whittaker"], ["David Tenant", "Ian McKellan", "Iris O'Bannon", "Jodie Whittaker"]],
        [["Who was the Tenth Doctor?", "David Tenant"], ["David Tenant", "Matt Smith", "Christopher Eccleston", "Patrick Stewart"]],
        [["When did the Doctor meet River Song for the first time?", "Silence in the Library"], ["Rose", "Blink", "Silence in the Library", "Let's Kill Hitler"]],
        [["Who are River Song's parents?", "Amelia and Rory Pond"], ["Amelia and Rory Pond", "The Doctor and Romana", "The Doctor and Sarah Jane Smith", "We don't know"]],
        [["What is the band that writes and performs songs about the Doctor?", "Chameleon Circuit"], ["Blink-182", "Chameleon Circuit", "Green Day", "Weird Sisters"]],
        [["Who is 'the Doctor's Wife'?", "The TARDIS"], ["River Song", "The TARDIS", "Rose Tyler", "Donna Noble"]],
        [["What does TARDIS stand for?", "Time and Relative Dimensions in Space"], ["Time and Raging Daleks in Space", "Time and Relative Dimensions in Space", "Theories and Returned Deposits in Sofas", "Time and Raunchy Dimensions in Scenes"]],
        [["What species fights the Time Lords in the Time War?", "The Daleks"], ["The Daleks", "The Cybermen", "Humans", "The Cat Nurses"]],
        [["Who is the Doctor's nemesis?", "The Master"], ["Romana", "Rose Tyler", "The Master", "Donna Noble"]],
        [["Who does Rose Tyler bring back from the dead?", "Capt. Jack Harkness"], ["The Doctor", "The Master", "her mother", "Capt. Jack Harkness"]],
        [["Which comedian was a companion of the Doctor for a season?", "Catherine Tate"], ["Billy Piper", "Robin Williams", "Jimmy Savile", "Catherine Tate"]],
        [["What spin-off featured John Barrow as leader, Captain Jack Harkness?", "Torchwood"], ["Doctor Companions in Space", "Queen Victoria's Revenge", "Torchwood", "Teachingwood"]],
        [["who started Torchwood?", "Queen Victoria"], ["The Doctor", "Queen Victoria", "Rose Tyler", "Capt. Jack Harkness"]],
        [["What kid spin-off show ended with the death of its titular character?", "The Sarah Jane Smith Chronicles"], ["Torchwood", "Doctor Companions in Space", "The Sarah Jane Smith Chronicles", "Doctor Who"]],
        [["What was the name of the Doctor's robot dog?", "K-9"], ["Spot", "K-9", "Kellog", "Super Dog"]],
        [["What actor played the first Doctor?", "William Hartnell"], ["William Hartnell", "Tom Baker", "Matt Smith", "John Barrow"]],
        [["What disease prevented William Hartnell from continuing his role as the Doctor?", "Multiple Sclerosis"], ["Syphilis", "Multiple Sclerosis", "Lupus", "cancer"]],
        [["Which actor played the Doctor wearing an outrageously long scarf?", "Tom Baker"], ["William Hartnell", "Jodie Whittaker", "Tom Baker", "Matt Smith"]],

]

}

win=0;
lose=0;
var correct


$("#start-button").on("click", function(){
    $("#question").css("font-size", "14px");
    $("#start-button").detach(".start-div");
    newQuestion();
    //shows gif of tardis traveling
    //function for adding a question and answers
})


// $(".answer-button").on("click", function(){
//     if(===)
//     else{//run wrong answer function}
// });

function congrats(correct){
    $("#question").empty();
    $("#question").html('<p>Correct! The right answer was '+correct+'.</p>');
    win++;
    setTimeout(newQuestion(),5000);
    $("body").css("background", "url(../images/doctor_who_gif.webp");
}

function wrong(){
    $("#question").empty();
    $("#question").html('<p>Oh no! The Daleks win again! The correct answer was '+correct+'.</p>')
    lose++;
    setTimeout(newQuestion(), 5000);
    $("body").css("background", "url(../images/doctor_who_gif.webp");
}

function start(){
    //win and loss tallies
    win=0;
    lose=0;
    //starting screen
    $("#question").append("<div>Help the Doctor save the Universe! Click start to begin.</div>");
    $("#question").css("font-size", "20px");
    //reset the timer
}

function newQuestion(){
    //emptying out starting screen;
    $("#question").empty();
    $(".answer-button").empty();
    $("body").css("background", "url(../images/pd_background1.jpg");
    //adding the new question to the DOM
    $("#question").append(triviaQs.Questions[0][0][0]);
    correct = triviaQs.Questions[0][0][1];
    $("#answer1").html('<button class="btn btn-default answer-button">'+triviaQs.Questions[0][1][0]+'</button>');
    $("#answer2").html('<button class="btn btn-default answer-button">'+triviaQs.Questions[0][1][1]+'</button>');
    $("#answer3").html('<button class="btn btn-default answer-button">'+ triviaQs.Questions[0][1][2]+'</button>');
    $("#answer4").html('<button class="btn btn-default answer-button">'+triviaQs.Questions[0][1][3]+'</button>');
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