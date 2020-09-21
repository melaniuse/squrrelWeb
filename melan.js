const getElem = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelector(id);
  }
};
const getElems = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};
function changeBg() {
  //to Top
  let toTop = getElem(".to-top");
  if (scrollY >= 280) { toTop.classList.add("scroll"); }
  if (scrollY === 0) { toTop.classList.remove("scroll"); }
  // header
  let header = getElem("header");
  let section = getElem("#works");
  var rect = section.getBoundingClientRect();
  // console.log(rect);
  if (rect.y <= 0 && rect.y > -rect.height) { header.style.background = "rgba(0,0,0,1)"; }
  else { header.style.background = "rgba(0,0,0,0.2)"; }
}

window.onscroll = changeBg;

