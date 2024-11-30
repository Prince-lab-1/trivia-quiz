// getting html elements
var question = document.getElementById('question');
var option1 = document.getElementById('choice1');
var option2 = document.getElementById('choice2');
var option3 = document.getElementById('choice3');
var option4 = document.getElementById('choice4');
var numerator = document.getElementById('numerator'); 
var numerator_int =  0;

console.log(numerator_int);


ending


function starting() {
      fetching();

      var title = document.getElementById('brandname');
      title.style.fontSize="3.5vh";

      var question_container = document.getElementById('question_container');
      question_container.style.display="block";


      var points_counter = document.getElementById('points_counter');
      points_counter.style.display='block';


      var options = document.getElementById('options');
      options.style.display="block";
      
      var nextbtn = document.getElementById('nextbtn');
      nextbtn.style.display="block";
      start_quiz.style.display="none";
      
}


// Select all buttons
const buttons = document.querySelectorAll('button[name="buttons]');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
     
        // Loop through all buttons
        buttons.forEach(btn => {
            if (btn == event.target) {
                btn.style.color="white";
                btn.disabled = true; // Disable all except the clicked one

            }
        });
        console.log(`${event.target.textContent} clicked, others disabled.`);
    });
});


function fetching() {
      
fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple')
.then(Response => Response.json())
.then(data => {

      button.forEach(btn => {
            btn.style.color="white";
            btn.disabled =null;
      })
         
      // -------making dynamic question vary btn 4 buttons  -------

      question.innerHTML = data.results[0].question;


      // -------------end --------


      // -------making dynamic multiple choice vary btn 4 buttons  -------
     
      var random_num = Math.floor(Math.random()*4)+1;

switch (random_num) {
      case 1:
            option1.innerHTML = data.results[0].correct_answer;
            option1.style.color= "green";
            option2.innerHTML = data.results[0].incorrect_answers[0];
            option3.innerHTML = data.results[0].incorrect_answers[1];
            option4.innerHTML = data.results[0].incorrect_answers[2];
            break;

            case 2:
                  option1.innerHTML = data.results[0].incorrect_answers[0];
                  option2.innerHTML = data.results[0].incorrect_answers[1];
                  option3.innerHTML = data.results[0].correct_answer;
                  option3.style.color= "green";
                  option4.innerHTML = data.results[0].incorrect_answers[2];
                  break;

                  case 3:
                        option1.innerHTML = data.results[0].incorrect_answers[0];
                        option2.innerHTML = data.results[0].incorrect_answers[1];
                        option3.innerHTML = data.results[0].incorrect_answers[2];
                        option4.innerHTML = data.results[0].correct_answer;
                        option4.style.color= "green";
                        break;

                        case 4:
                              option1.innerHTML = data.results[0].incorrect_answers[0];
                              option2.innerHTML = data.results[0].correct_answer;
                              option2.style.color= "green";
                              option3.innerHTML = data.results[0].incorrect_answers[1];
                              option4.innerHTML = data.results[0].incorrect_answers[2];
                              break;

      default:
            console.log(error);
            break;

            // -----------looping all buttons----------------

var button = document.querySelectorAll('button[name="buttons"]');
 
button.forEach(btn => {
      btn.addEventListener('click', ()=>{

            var a = event.target 

            if ( a.innerHTML == data.results[0].correct_answer) {
                 var a = ++numerator_int;
                 btn.style.color='green';
                 numerator.textContent = a;

                  console.log('corect answer');
            }

            if (btn == event.target) {
                  button.forEach(all_btns => {
                        all_btns.disabled = "true";
                  });
            }
            

      })
});


// - 
} 
})
.catch(error => console.error());


console.log(data.results[0])
}

fetching();