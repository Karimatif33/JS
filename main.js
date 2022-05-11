// const title = document.getElementsByTagName("h1")
// const tittleArray = Array.from(title)
// console.table(tittleArray)

// tittleArray.forEach((Item) => {
//     tittleArray[0].style.color ="royalblue"
//     tittleArray[2].style.color ="red"
//     Item.style.backgroundColor="pink"
// });

const btna = document.querySelectorAll(".btn-primary");
// const cardra = Array.from(btna)

// console.log(cardra)
const jsa = document.querySelector(".jsa");
console.log("jsa");
const jsaa = document.querySelector(".jsaa");
const btn = document.querySelector(".btn1");
const con = document.querySelector(".bigger-contaier");
const btnr = document.querySelector(".btn-primary1");
const kh = document.querySelector(".kh");
const container = document.querySelector(".container");
const body = document.querySelector(".body");
const mode = document.querySelector(".mode");
const mode1 = document.querySelector(".mode1");
const btnadd = document.querySelector(".btn-add");
const procon = document.querySelector("#idaa");

procon.style.border = "red 5px solid";

btnadd.addEventListener("click", (eo) => {
  const newprod = ` 
            <div class="card mycard" style="width: 18rem;">
              <img style="border-radius: 5px;" src="pexels-cottonbro-3826678.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">New  Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a id="buy" href="#"  class="btn btn-primary">buy</a>             
              </div>
            </div>  `;

  procon.innerHTML += newprod;
});

// console.log(cardr)

btna.forEach((item) => {
  item.addEventListener("click", (eo) => {
    con.classList.add("active");
    kh.style.display = "none";
    // eo.preventDefault()
  });
});

btnr.addEventListener("click", (eo) => {
  container.style.display = "none";
  kh.style.display = "block";

  setTimeout(() => {
    con.classList.remove("active");
    container.style.display = "block";
  }, 500);
});

mode.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
  // mode.style.display="none"
  // mode1.style.display="block"
});
// mode1.addEventListener("click" , (eo) => {
//     body.classList.remove("dark")
//     mode1.style.display="none"
//     mode.style.display="block"

// })
// card.addEventListener("click" , (eo) => {
//     con.classList.add("active")
//     kh.style.display="none"
//     eo.preventDefault()

// })

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
