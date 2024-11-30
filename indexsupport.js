// ---- making variables for our program-------
var start_quiz = document.getElementById('start_quiz');

var question = document.getElementById('question');
var option1 = document.getElementById('choice1');
var option2 = document.getElementById('choice2');
var option3 = document.getElementById('choice3');
var option4 = document.getElementById('choice4');
var numerator = document.getElementById('numerator'); 

var numerator_int =  0;
// ----------end---------------------
// console.log(numerator_int);
 
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

// -----------looping all buttons----------------

var button = document.querySelectorAll('button[name="buttons"]');
 
button.forEach(btn => {
      btn.addEventListener('click', ()=>{
            var a = event.target 
            if ( a.innerHTML == "corect answer") {
                 var a = ++numerator_int;
                 numerator.textContent = a;
                  btn.style.color='green';
                  console.log('corect answer');
            }

            if (btn == event.target) {
                  button.forEach(all_btns => {
                        all_btns.disabled = "true";
                  });
            }


      })
});


// ------------end ------------

function fetching() {

      button.forEach(btn => {
            btn.style.color="white";
            btn.disabled =null;
      })
                
var random_num = Math.floor(Math.random()*4)+1;

switch (random_num) {
      case 1:
            option1.innerHTML = "corect answer";
            
            option2.innerHTML = "incorect answer";
            option3.innerHTML = "incorect answer";
            option4.innerHTML = "incorect answer";
            break;

            case 2:
                  option1.innerHTML = "incorerect answer";
                  option2.innerHTML = "incorect answer";
                  option3.innerHTML = "corect answer";
                  
                  option4.innerHTML = "incorect answer";
                  break;

                  case 3:
                        option1.innerHTML = "incorerect answer";
                        option2.innerHTML = "incorect answer";
                        option3.innerHTML = "incorect answer";
                        option4.innerHTML = "corect answer";
                        
                        break;

                        case 4:
                              option1.innerHTML = "incorerect answer";
                              option2.innerHTML = "corect answer";
                              
                              option3.innerHTML = "incorect answer";
                              option4.innerHTML = "incorect answer";
                              break;

      default:
            console.log(error);
            break;
}



}


document.addEventListener('keydown',()=>{
      if (numerator_int == "1") {
            alert('you have completed the test \n \n thank you for participating');
            numerator.textContent= "0";
      }else{

      }
      var key = event.key;
      if (key == 'Enter') {

            fetching();
      }
})



