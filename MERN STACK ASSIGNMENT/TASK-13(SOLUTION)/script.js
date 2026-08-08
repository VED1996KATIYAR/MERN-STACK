function checkEvenOdd() {
    let no = document.getElementById("number").value;
    let result=""
    if (no % 2 == 0) {
        result = `The number ${no} is Even.`;
    } else {
        result = `The number ${no} is Odd.`;
    }
    document.getElementById("result").innerText = result;
}
