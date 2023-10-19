let menuBtn = document.getElementById('menu-btn')
let closeBtn = document.getElementById('close-btn')


// Image change on mover
let ticket = document.getElementById('ticket')
let imgHover = document.getElementById('img-hover')


// DRY

menuBtn.addEventListener("click", function(){
    document.getElementById('menu').style.display = 'inline'
    document.getElementById('close-btn').style.display = 'inline'
    document.getElementById('menu-btn').style.display = 'none'
    document.getElementById('main-content').style.display = 'none'
});

closeBtn.addEventListener("click", function(){
    document.getElementById('menu').style.display = 'none'
    document.getElementById('close-btn').style.display = 'none'
    document.getElementById('menu-btn').style.display = 'inline'
    document.getElementById('main-content').style.display = 'inline'
});

var general = document.getElementById('general')
var payment = document.getElementById('payment')
var tickets = document.getElementById('tickets')
var coll = document.getElementsByClassName("faq-question");
var i;

general.addEventListener('click',function() {
// document.getElementById('faq-drops').style.display = 'none'
document.getElementById('faq-drop-general').style.display = 'block'
document.getElementById('faq-drop-payment').style.display = 'none'
document.getElementById('faq-drop-tickets').style.display = 'none'
general.style.background = '#fff'
general.style.color = '#000'
payment.style = 'none'
})

payment.addEventListener('click', function(){
    document.getElementById('faq-drop-general').style.display = 'none'
    document.getElementById('faq-drop-payment').style.display = 'block'
    document.getElementById('faq-drop-tickets').style.display = 'none'
    payment.style.background = '#fff'
    payment.style.color = '#000'
    general.style.background = 'none'
    general.style.color = '#fff'
    tickets.style = 'none'
    
})

tickets.addEventListener('click', function(){
    document.getElementById('faq-drop-general').style.display = 'none'
    document.getElementById('faq-drop-payment').style.display = 'none'
    document.getElementById('faq-drop-tickets').style.display = 'block'
    general.style.background = 'none'
    general.style.color = '#fff'
    payment.style = 'none'
    tickets.style.background = '#fff'
    tickets.style.color = '#000'

})


// general.addEventListener('click',function() {
//     document.getElementById('faq-drop-payment').style.display = 'block'
//     })
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }


// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }