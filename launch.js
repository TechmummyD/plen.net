
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
   // Loop through tablinks and remove the "active-link" class
   for (var tablink of tablinks) {
       tablink.classList.remove("active-link");
   }

   // Loop through tabcontents and remove the "active-tab" class
   for (var tabcontent of tabcontents) {
       tabcontent.classList.remove("active-tab");
   }

   // Add the "active-link" class to the clicked tablink
   event.currentTarget.classList.add("active-link");

   // Show the corresponding tabcontent
   var selectedTab = document.getElementById(tabname);
   if (selectedTab) {
       selectedTab.classList.add("active-tab");
   }
}
//----------initialize mixitup
var mixer=mixitup('.portfolio-gallery',{
selectors: {
    target:'.portfolio-box'
},
animation: {
    duration: 500
}
});
const scriptURL = 'https://script.google.com/macros/s/AKfycby7PzTB6qcK6V0GUH1yFfw6hf3eosg2Pimp90zr1wSb/dev';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
//-------------------------smaller screen
// Function to open side menu
var sidemenu =document.getElementById("sidemenu")
function opensidemenu() {
    const sidemenu = document.querySelector("sidemenu");
    sidemenu.style.right = "-200px";
}

// Function to close side menu
function closesidemenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}


    

        

    
