
















//  elm.classList.add("prince")
//  elm.innerText = ("welcome")
//  ab.setAttribute("class", "prince");




const ab = document.querySelector(".bleve")
const elm = document.createElement("h1")
const sec = document.querySelector(".sec")
const buy = document.getElementById("buy")
const click = document.querySelector(".click")
sec.append(elm);
console.log("click");

// ab.remove()

// setTimeout(() => {
// elm.classList.add("prince")
// elm.innerText =("wlcome funciton")
// ab.setAttribute("class", "prince")
// buy.style.backgroundColor=("red");

// }
// , 1000 )

 const vaa = () => {

    elm.classList.add("prince")
    elm.innerText = ("welcome")
    ab.setAttribute("class", "prince");
   
   
}

vaa ()
click.addEventListener(  "click" , () => {

    click.classList.add("bc")
    
})