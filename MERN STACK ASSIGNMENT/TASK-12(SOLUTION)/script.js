function calculate() {
    let principal=document.getElementById("principal").value;
    let rate=document.getElementById("rate").value;
    let time=document.getElementById("time").value;
    let compounding=document.getElementById("Compounding").value;   

    let Amount=principal * (Math.pow(1+(rate/compounding), compounding * time));
    document.getElementById("result").innerText = `The compound interest after ${time} years is: ${Amount}`
}