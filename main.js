const uploud = document.querySelector("button")
const input = document.querySelector("input")
const container = document.getElementById("container")






uploud.addEventListener("click", (eo) => {
    eo.preventDefault()
    const upt = ` <div class="task task1" >
    <span><i class="fa-solid fa-star ops"></i></span>
    <p>${input.value} </p>
  <!-- <span><i class="fa-solid fa-heart"></i></span>  -->

  <div class="icon">
      <span><i class="fa-solid fa-trash-can ops"></i></span> 
      <span><i class="fa-solid fa-face-angry"></i></span> 
  </div>  
    
  </div>`

    container.innerHTML += (upt)

})

// container.addEventListener("click", (eo) => {
//     if (eo.target.className == "fa-solid fa-trash-can")
//      {
// eo.target.parentElement.parentElement.remove()

//     } else {

//     })