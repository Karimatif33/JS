const uploud = document.querySelector("button");
const input = document.querySelector("input");
const container = document.getElementById("container");

// const text = document.getElementByClassName("text-text");

uploud.addEventListener("click", (eo) => {
  eo.preventDefault();
  const upt = ` <div class="task task1" >
    <span><i class="fa-solid fa-star ops"></i></span>
    <p>${input.value} </p>
  <!-- <span><i class="fa-solid fa-heart"></i></span>  -->

  <div class="icon">
      <span><i class="fa-solid fa-trash-can"></i></span> 
      <span><i class="fa-solid fa-face-angry"></i></span> 
  </div>  
    
  </div>`;

  container.innerHTML += upt;
});

container.addEventListener("click", (eo) => {
  if (eo.target.className == "fa-solid fa-trash-can") {
    eo.target.parentElement.parentElement.parentElement.remove();
  } else if (eo.target.className == "fa-solid fa-face-angry") {
    eo.target.classList.add("unactive");
    const heart = `<span><i class="fa-solid fa-heart"></i></span> `;

    eo.target.parentElement.parentElement.parentElement
      .getElementsByClassName("text-text")[0]
      .classList.add("text-e");

      eo.target.parentElement.innerHTML += heart;
  }
});
