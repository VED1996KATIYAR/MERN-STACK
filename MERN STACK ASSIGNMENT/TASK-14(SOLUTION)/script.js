// function checkSum(){
//     let no=document.getElementById("n").value;
//     let sum=0;
//     while(no>0){
//         let digit=no%10;
//         sum+=digit;
//         no=Math.floor(no/10);
//     }
//     document.getElementById("result").innerText = `The sum of digits is: ${sum}`
//     document.getElementById("result").style.color="green";
   
// }
// function armstrong(){
//     let no1=document.getElementById("n").value;
//     let no=no1;
//     let sum=0;
//     let temp=no1;
//     let count=0;
//     while(temp>0){
//         count++;
//         temp=Math.floor(temp/10);
//     }
//     while(no>0){
//         let digit=no%10;
//         sum+=Math.pow(digit,count);
//         no=Math.floor(no/10);
//     }
//     if(sum==no1){
//         document.getElementById("armstrongResult").innerText = `${no1} is an Armstrong number`;
//         document.getElementById("armstrongResult").style.color="green";
//     }else{
//         document.getElementById("armstrongResult").innerText = `${no1} is not an Armstrong number`;
//         document.getElementById("armstrongResult").style.color="red";
//     }

// }

// function prime(){
//     let no=document.getElementById("n").value;
//     let isPrime=true;
//     if(no<=1){
//         isPrime=false;
//     }else{
//         let counter=0;
//         for(let i=2;i<=no;i++){
//             if(no%i==0){
//                 counter++;
//             }
//         }
//         if(counter==1){
//             document.getElementById("primeResult").innerText = `${no} is a prime number`;
//             document.getElementById("primeResult").style.color="green";
//         }else{
//             document.getElementById("primeResult").innerText = `${no} is not a prime number`;
//             document.getElementById("primeResult").style.color="red";
//         }    
//     }
// }
// function factor(){
//     let no=document.getElementById("n").value;
//     let factors=[];
//     for(let i=1;i<=no;i++){
//         if(no%i==0){
//             factors.push(i);
//         }
//     }
//     document.getElementById("factorResult").innerText = `The factors of ${no} are: ${factors}`;
//     document.getElementById("factorResult").style.color="green";    
// }


let n1=153
let n=n1;
let sum=0;
while(n>0){
    let digit=n%10;
    sum+=Math.pow(digit,3);
    n=Math.floor(n/10);
}
console.log(`Number is: ${n1}`);
console.log(`The sum of the digits of ${n1} is: ${sum}`);
let n2=n1;
let count=0;
let arm=true;
let temp=n2;
while(temp>0){
    count++;
    temp=Math.floor(temp/10);
}
while(n2>0){
    let digit=n2%10;
    sum+=Math.pow(digit,count);
    n2=Math.floor(n2/10);
}
if(sum==n1){
    console.log(`${n1} is an Armstrong number`);
}
else{
    console.log(`${n1} is not an Armstrong number`);
}

let n3=n1;
let isPrime=true;
if(n3<=1){
    isPrime=false;
}else{
    let counter=0;
    for(let i=2;i<=n3;i++){
        if(n3%i==0){
            counter++;
        }
    }
    if(counter==1){
        console.log(`${n3} is a prime number`);
    }else{
        console.log(`${n3} is not a prime number`);
    }
}

let n4=n1;
let factors=[];
for(let i=1;i<=n4;i++){
    if(n4%i==0){
        factors.push(i);
    }
}
console.log(`The factors of ${n4} are: ${factors}`);