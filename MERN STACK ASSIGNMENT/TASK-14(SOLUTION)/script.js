function checkSum(){
    let no=document.getElementById("n").value;
    let sum=0;
    while(no>0){
        let digit=no%10;
        sum+=digit;
        no=Math.floor(no/10);
    }
    document.getElementById("result").innerText = `The sum of digits is: ${sum}`
    document.getElementById("result").style.color="green";
   
}
function armstrong(){
    let no1=document.getElementById("n").value;
    let no=no1;
    let sum=0;
    let temp=no1;
    let count=0;
    while(temp>0){
        count++;
        temp=Math.floor(temp/10);
    }
    while(no>0){
        let digit=no%10;
        sum+=Math.pow(digit,count);
        no=Math.floor(no/10);
    }
    if(sum==no1){
        document.getElementById("armstrongResult").innerText = `${no1} is an Armstrong number`;
        document.getElementById("armstrongResult").style.color="green";
    }else{
        document.getElementById("armstrongResult").innerText = `${no1} is not an Armstrong number`;
        document.getElementById("armstrongResult").style.color="red";
    }

}

function prime(){
    let no=document.getElementById("n").value;
    let isPrime=true;
    if(no<=1){
        isPrime=false;
    }else{
        let counter=0;
        for(let i=2;i<=no;i++){
            if(no%i==0){
                counter++;
            }
        }
        if(counter==1){
            document.getElementById("primeResult").innerText = `${no} is a prime number`;
            document.getElementById("primeResult").style.color="green";
        }else{
            document.getElementById("primeResult").innerText = `${no} is not a prime number`;
            document.getElementById("primeResult").style.color="red";
        }    
    }
}
function factor(){
    let no=document.getElementById("n").value;
    let factors=[];
    for(let i=1;i<=no;i++){
        if(no%i==0){
            factors.push(i);
        }
    }
    document.getElementById("factorResult").innerText = `The factors of ${no} are: ${factors}`;
    document.getElementById("factorResult").style.color="green";    
}

