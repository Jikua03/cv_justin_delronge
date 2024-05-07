if (navigator.userAgent.match(/samsung/i)) {
       alert("Your browser (Samsung Internet) may not show this website" + 
             "correctly. Please consider using a standards-compliant" + 
             "browser instead. \n\n" +
             "We recommend Firefox, Microsoft Edge, or Google Chrome.");
   }
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
	navBar = document.querySelector(".nav-bar");
	navBar.classList.toggle("active")
}
