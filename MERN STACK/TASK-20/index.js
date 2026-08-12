//do it in the inspect in browser//console.log(document.body)

// const background=document.body;
// background.style.backgroundColor="green"

// const div=document.getElementsByTagName('div')
// console.log(div)

// //Modifying HTML Elements
// const box1=document.getElementById('box-1')
// box1.innerText="Ved Katiyar"

// const box2=document.getElementById('box-2')
// box2.innerHTML="<h2>Ved Katiyar</h2>"

// const box3=document.getElementById('box-3')
// box3.style.borderRadius="50%"

// //turn all boxes into circle
// const allbox=document.getElementsByClassName('box')
// for(let i=0;i<allbox.length;i++){
//     allbox[i].style.borderRadius="50%"
// }



//3rd is append

const newpara=document.createElement('p')
newpara.innerText="vhjsvjbjvjkdbjvbjjv vvjkjkjkjvkjkvjk bsdvjkk"
const cont=document.getElementById('cont')
cont.appendChild(newpara)
