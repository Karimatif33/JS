const uploud = document.querySelector("button");
const input = document.querySelector("input");
const container = document.getElementById("container");

// const text = document.getElementByClassName("text-text");

uploud.addEventListener("click", (eo) => {
    eo.preventDefault();
    const upt = ` <div class="task task1" >
    <span><i class="fa-solid fa-star ops"></i></span>
    <p class="text-text" >${input.value} </p>
  <!-- <span><i class="fa-solid fa-heart"></i></span>  -->

  <div class="icon">
        <span><i class="fa-solid fa-trash-can"></i></span> 

      <span><i class="fa-solid fa-face-angry"></i></span> 
   </div> 
    
  </div>`;

    container.innerHTML += upt;
    input.value = ""
});

container.addEventListener("click", (eo) => {
    if (eo.target.className == "fa-solid fa-trash-can") {
        eo.target.parentElement.parentElement.parentElement.remove();
    } else if (eo.target.className == "fa-solid fa-face-angry") {
        eo.target.classList.add("unactive");
        const heart = `<i class="fa-solid fa-heart"></i> `;

        eo.target.parentElement.parentElement.parentElement
            .getElementsByClassName("text-text")[0]
            .classList.add("text-e");

        eo.target.parentElement.innerHTML += heart;
    }
    else if (eo.target.className == "fa-solid fa-heart") {
        eo.target.classList.remove("unactive");
        eo.target.parentElement.parentElement.parentElement
            .getElementsByClassName("text-text")[0]
            .classList.remove("text-e");
        eo.target.style.display = ("none")
        eo.target.parentElement
            .getElementsByClassName("fa-face-angry")[0]
            .classList.remove("unactive");

    }

    else if (eo.target.className == "fa-solid fa-star ops") {
        eo.target.classList.add("star");
        container.prepend(eo.target.parentElement.parentElement)

    }
    else if (eo.target.className == "fa-solid fa-star ops star") {
        eo.target.classList.remove("star");
        container.append(eo.target.parentElement.parentElement)

    }


});
