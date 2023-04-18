/**  loader function start */

document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
        document.body.style.display = 'block';   
     }, 3000);
  });
  

/** loader function end  */



/** footer year start */

let year = document.getElementById('year')
year.innerText = new Date ().getFullYear()

/** footer year end  */

