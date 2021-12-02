/*
=========================================================
Javscript for index.html
=========================================================
*/
window.addEventListener("scroll", () =>{
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 300){
      opacity = 0 + currentScroll/300;
    }else{ opacity = 1; }
    document.querySelector(".contactSection").style.opacity = opacity;
  })  

//This function alerts the user after submitting the form and resets input 
function SubmitForm() {
    alert("Thank you for submitting the form! I will reach out to you soon! :)");
    }    

/*
=========================================================
Javscript for About Me - Personality page
=========================================================
*/
window.addEventListener("scroll", () =>{
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 300){
      opacity = 0 + currentScroll/300;
    }else{ opacity = 1; }
    document.querySelector(".hobbies").style.opacity = opacity;
  })

/*
=========================================================
Javscript for About Me - Education page
=========================================================
*/
window.addEventListener("scroll", () =>{
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 300){
      opacity = 0.5 + currentScroll/300;
    }else{ opacity = 1; }
    document.getElementById("element2").style.opacity = opacity;
  })  

  window.addEventListener("scroll", () =>{
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 1300){
      opacity = 0.35 + currentScroll/1300;
    }else{ opacity = 1; }
    document.getElementById("element3").style.opacity = opacity;
  })

/*
=========================================================
Javscript for About Me - Work & Skills page
=========================================================
*/
window.addEventListener("scroll", () =>{
    var currentScroll = window.pageYOffset;
    if (currentScroll <= 1000){
      opacity = 0.5 + currentScroll/1000;
    }else{ opacity = 1; }
    document.querySelector(".skillsAwards").style.opacity = opacity;
  })