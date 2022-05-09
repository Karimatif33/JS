const card = document.querySelector(".card")
console.log("card")
const jsa = document.querySelector(".jsa")
console.log("jsa")
const jsaa = document.querySelector(".jsaa")
const btn = document.querySelector(".btn1")
const con = document.querySelector(".bigger-contaier")
const btnr = document.querySelector(".btn-primary1")

// card.addEventListener( "click" , (eo) => {
//     // con.style.display = ("block") 
//     con.classList.add("active")
//     eo.preventDefault()

// })

// btnr.addEventListener( "click" , (eo) => {
//     // con.style.display = ("none")
//     con.classList.remove("active")
// })

// card.addEventListener( "click" ,  (eo) => {
//     jsa.style.display=("block")
//     // jsa.setAttribute("class" , "jsaa")

// })


// btn.addEventListener ( "click" , (eo) => {
//     jsa.style.display=("none")

// })

// card.addEventListener("click" , (eo) => {
//     con.setAttribute ("open" ,"open")
// })
// btnr.addEventListener("click" , (eo) => {
//     con.renoveAttribute ("close" ,"a")
// })

card.addEventListener("click" , (eo) => {
    con.showModal()
    eo.preventDefault()
})

btnr.addEventListener("click" , (eo) => {
    con.close()
})