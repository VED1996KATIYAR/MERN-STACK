const students=[
    {"Student Name":"Salmaan Ahmed","Marks":"38%","Class":"3rd","Address":"India"},
    {"Student Name":"Riya Sharma","Marks":"85%","Class":"10th","Address":"123 ,ABC Colony ,Delhi"},
    {"Student Name":"Rohan Patel","Marks":"70%","Class":"12th","Address":"456 XYZ Street ,Mumbai"},
    {"Student Name":"Priya Singh","Marks":"95%","Class":"9th","Address":"101 ,LMN Road Kolkata"},
    {"Student Name":"Ankit Gupta","Marks":"95%","Class":"8th","Address":"789 ,pqr nagar Banglore"},
    {"Student Name":"Neha Verma","Marks":"80%","Class":"11th","Address":"222,DEF Avenue, Chennai"},
    {"Student Name":"Manoj Kumar","Marks":"75%","Class":"10th","Address":"333 , GHI LANE ,Hyderabad"},
    {"Student Name":"Pooja Mishra","Marks":"86%","Class":"12th","Address":"444,STU Colony ,Pune"},
    {"Student Name":"Rajesh Singhania","Marks":"92%","Class":"9th","Address":"555,VWX Street Jaipur"},
    {"Student Name":"Manoj Kumar","Marks":"86%","Class":"12th","Address":"STU COLONY Pune"},

]

console.log(students)

const container=document.getElementById("container")
for(let i=0;i<students.length;i++){
    const box1 = document.createElement("div");
    for(let key in students[i]){
        const box = document.createElement("p");
        box.innerText=`${key} : ${students[i][key]}`
        box1.appendChild(box)
    }
    container.appendChild(box1)
}

// function searchStudent() {
//     const value=document.getElementById("searchInput").value.toLowerCase();
//     const result=students.filter(function(student){
//         return student["Student Name"].toLowerCase().includes(value)
//     })
//     console.log(result)
//     const container=document.getElementById("container")
//     container.innerHTML="";
//     result.forEach(function(s){
//         const card=document.createElement("div");
//         for(let key in s){
//             const box=document.createElement("p");
//             box.innerText=`${key} : ${s[key]}`
//             card.appendChild(box)
//         }
//         container.appendChild(card)
//     })
// }

function searchStudent() {

    const value = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const result = students.filter(function(student) {

        return student["Student Name"]
            .toLowerCase()
            .includes(value);
    });

    const container = document.getElementById("container");

    container.innerHTML = "";

    result.forEach(function(student) {

        const card = document.createElement("div");

        for(let key in student) {

            const box = document.createElement("p");

            box.innerText = `${key} : ${student[key]}`;

            card.appendChild(box);
        }

        container.appendChild(card);
    });
}