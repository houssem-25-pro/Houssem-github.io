//scroll effects function
window.addEventListener('scroll', reveal);
function reveal(){
   let reveals= document.querySelectorAll('.reveal'); 
   for(let  i = 0 ; i < reveals.length;i++){
    let windowheight= window.innerHeight;
    let revealtop= reveals [i].getBoundingClientRect().top;
    let revealpoint= 50;
    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
      else{
        reveals[i].classList.remove('active');
      }
   }
}



const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});




function handleSubmit() {
  // Redirect to the desired URL
  window.location.href = 'medcine/index.html';
  // Prevent the form from actually submitting
  return false;
}