const coll = document.querySelectorAll(".vocab .collapsible");

// console.log(coll)
coll.forEach((coll) => {
  coll.addEventListener("click", () => {
    // coll.classList.toggle("active")
    var showhide = coll.nextElementSibling;
    // console.log(showhide)
    if (showhide.style.maxHeight) {
      // console.log(showhide.style.maxHeight)
      showhide.style.maxHeight = null;
    } else {
      // console.log(showhide.style.maxHeight)
      showhide.style.maxHeight = showhide.scrollHeight + "px";
    }
  });
});

const showhide = (acc) => {
  const showhide = acc.nextElementSibling;
  if (showhide.style.maxHeight) {
    showhide.style.maxHeight = null;
  } else {
    showhide.style.maxHeight = showhide.scrollHeight + "px";
  }
};

const hide = (acc) => {
  const showhide = acc.nextElementSibling;
  showhide.style.maxHeight = null;
};

const accordion = document.querySelectorAll(".accordion .collapsible");
console.log(accordion);

accordion.forEach((acc, index) => {
  acc.addEventListener("click", () => {
    accordion.forEach((acc, id) => {
      if (index === id) {
        showhide(accordion[index]);
      } else {
        hide(accordion[id]);
      }
    });
  });
});

const collapsible=document.querySelectorAll(".collapsible");
const icon = document.querySelectorAll("i");
// console.log(icon);
icon.forEach((icon,index) => {
  collapsible[index].addEventListener("click", () => {
    icon.classList.toggle("fa-caret-down")
    icon.classList.toggle("fa-caret-left")
  });
});
