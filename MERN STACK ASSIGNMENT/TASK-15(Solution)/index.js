function all(...regg){
    let max=regg[0];
    for(let i=1;i<regg.length;i++){
        if(regg[i]>max){
            max=regg[i];
        }
    }
    console.log(`The maximum number is: ${max}`);
    let sum=0;
    for(let i=0;i<regg.length;i++){
        sum+=regg[i];
    }
    console.log(`The sum of the numbers is: ${sum}`);
    let count=0;
    for(let i=0;i<regg.length;i++){
        if(regg[i]%2!=0){
            count++;
        }
    }
    console.log(`The count of odd numbers is: ${count}`);
}

all(1,2,3,4,5,6,7,8,9);
all(4,8,2,11,6,7,10)