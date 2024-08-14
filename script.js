const calculate = () => {
    let a = parseInt(document.getElementById('n1').value);
    let b = parseInt(document.getElementById('n2').value);
    let op = document.getElementById('operator').value;

    let result;

    switch (op) {
        case 'Addition':
            result = a + b;
            break;
        case 'Minus':
            result = a - b;
            break;
        case 'Multiplication':
            result = a * b;
            break;
        case 'Divison':
            result = a / b;
            break;
        default:
            result = 'ERROR!'
    }
    // alert(`Result: ${result}`);
    document.getElementById("result").innerText= "Result: " + result;
};