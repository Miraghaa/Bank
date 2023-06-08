let a = document.querySelector('a')
let btn = document.getElementById('btn')
let cls = document.getElementById('cls')
let mth = document.getElementById('mth')
let bg = document.getElementById('aaq')
let rh = document.getElementById('rf')

let num =0;
let num1 =0;
let num3 = 0;

btn.onclick = () => {
let d = parseFloat(document.getElementById('as').value)
let b = parseFloat(document.getElementById('as1').value)
let c = parseFloat(document.getElementById('as2').value)

let v =Math.floor(Math.random()*256)
let f =Math.floor(Math.random()*256)
let g =Math.floor(Math.random()*256)

document.body.style.backgroundColor = `rgb(${v},${f},${g})`

num=(d*c)/100
num1=d+num;
num3=num1/b


mth.innerHTML = `${num3} AZN`
cls.innerHTML = `${num1} AZN`

setInterval(() => {
    btn.onclick();
}, 1000);


setTimeout(() => {
    bg.style.display = 'none'
}, 5000);

setTimeout(() => {
    rh.style.display = 'inline-block'
}, 5000);
}

rh.onclick=()=>{
    location.reload();
}

