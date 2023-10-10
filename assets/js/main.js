var coll = document.querySelectorAll(".collapsible");

// console.log(coll)
coll.forEach((coll) => {
  coll.addEventListener("click", ()=>{
    coll.classList.add("active")
    showhide=coll.nextElementSibling;
    if (showhide.style.display === "block") {
        showhide.style.display = "none";
      } else {
        showhide.style.display = "block";
      }
  });
});


