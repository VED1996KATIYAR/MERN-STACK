const students=[
 {id:"001",name:"ONE",sports:"CRICKET"},
 {id:"002",name:"TWO",sports:"BASKETBALL"},
 {id:"003",name:"THREE",sports:"TENNIS"},
 {id:"004",name:"FOUR",sports:"HOCKEY"},
 {id:"005",name:"FIVE",sports:"FOOTBALL"}   
]

console.log(students)

const filterRes=students.filter((data)=>{
    return data.id %2==0
})
console.log("Filter Res: ",filterRes)

const newArr=[]
for(let i=0;i<students.length;i++){
    if(students[i].id%2==0){
        newArr.push(students[i]);
    }
}
console.log(newArr)

const name=students.filter((curr)=>curr.sports=="CRICKET")
.map((data)=>{
    return `<li>${data.name}</li>`
})
console.log(name)

const div=document.getElementById('container')
div.innerHTML=`<ul>${name.join(' ')}</ul>`