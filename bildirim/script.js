const btn = document.querySelector(".btn");
const kartlar = document.querySelector(".kartlar");

btn.addEventListener("click", kartyarat)

let index = 0;

function kartyarat(){ 
    index++;

    let yarat = document.createElement("div");
    yarat.classList.add("kutu")
    yarat.innerHTML = `${index} Message`;
    kartlar.appendChild(yarat);

    setTimeout(()=>{
        yarat.remove()
        index = 0;
    }, 4000)
}