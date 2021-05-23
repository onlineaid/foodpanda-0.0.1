// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".header").style.top = "0";
//   } else {
//     document.querySelector(".header").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// apply
function apply() {
  var apply = document.getElementById("apply");
  apply.style.display = "none";
  document.querySelector(".header").style.top = "0";
}
