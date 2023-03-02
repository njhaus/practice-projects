
// Opening modal open on page load 

$(document).ready(function(){        
   $('#openingModal').modal('show');
  console.log("it works");
    }); 

// HIDE TOOLTIPS ON CLICK:
 $(document).ready(function(){
       $('[data-bs-toggle="tooltip"]').click(function () {
          $('[data-bs-toggle="tooltip"]').tooltip("hide");

       });
   });


// MAKE FORM CONTROL SMALL ON SMALL SCREENS AND BIG AGAIN IF SCREEN IS RESIZED

// on document open
$(document).ready(function(){
  let formSize = document.querySelectorAll(".guess-input");
     
       if (window.innerWidth < 375) {
         formSize.forEach(slide => slide.classList.remove("form-control"));
         formSize.forEach(element => element.classList.add("form-control-sm"));
        
       } 
    else {
      formSize.forEach(slide => slide.classList.add("form-control"));
         formSize.forEach(element => element.classList.remove("form-control-sm"));
      
    }
       });

// on window resize
addEventListener("resize", (event) => {
       let formSize = document.querySelectorAll(".guess-input");
     
       if (window.innerWidth < 375) {
         formSize.forEach(slide => slide.classList.remove("form-control"));
         formSize.forEach(element => element.classList.add("form-control-sm"));
        
       } 
    else {
      formSize.forEach(slide => slide.classList.add("form-control"));
         formSize.forEach(element => element.classList.remove("form-control-sm"));
      
    }
  });


  
// RIDDLE ANSWERS AND SCOREBOARD 

 let score = parseInt(document.getElementById('score-digit').innerHTML);

let answerChooser = 1;

let answersList = [null, 
                  "question mark",
                  "reflection",
                  "circle",
                  "what",
                  "corn",
                  "eyes",
                  "treasure",
                  "sentence",
                  "muffin",
                  "words",
                  "misspelled",
                  "tongue"];


  

  let guess = function () {
    let riddleNumber = answerChooser.toString();
    
    let yourGuess = document.getElementById('guess-box-' + riddleNumber).value.trim().toLowerCase();
    
  if (yourGuess == answersList[answerChooser]) {
    document.getElementById('score-digit').innerHTML = score + 1;
    score++;
    answersList[answerChooser] = "answered";
    $("#correctToast").toast("show");
    if (score === 12) {
      $('#winModal').modal('show')
    }
  }
    else if (answersList[answerChooser] == "answered") {
      $("#againToast").toast("show");
    }
  else {
    $("#incorrectToast").toast("show");
  }
};



// SCROLLSPY MADE BY ME NOT BOOTSTRAP, GET IT TOGETHER BOOTSTRAP -- this function also controls the variable answerChooser so that the function guess() knows which riddle is being guessed and which button is being clicked.

const carousel = document.querySelector("#carousel");

carousel.onscroll = event => {
         let carouselWidth =  document.getElementById("carousel").offsetWidth;
  
         let carouselScroll = function() {
            var target = document.getElementById("carousel");
            return Math.round(document.getElementById("carousel").scrollLeft - 7.272727012634277);
         }
         
          let slideNumber = (Math.round(carouselScroll() / (carouselWidth + 15)) + 1).toString();
  
          let slideLink = document.querySelectorAll(".slide-link");
  
            slideLink.forEach(slide => slide.classList.remove("active"));
  
           document.getElementById("sl-" + slideNumber).classList.add("active");
  
  answerChooser = parseInt(slideNumber);
        };   

