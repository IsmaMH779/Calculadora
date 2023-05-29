var InputValue = document.getElementById('iValue')
var displayOperation = document.getElementById('cal')
var cal = '';
var resultado = '';

const addElement = (v) => {
    if (v == " + " || v == " - " || v == " * " || v == " / ") {
        if (InputValue.value == "") {

        }
        else if (resultado != '') {
            displayOperation.innerHTML = '';
            cal = document.createTextNode(InputValue.value + v)
            displayOperation.appendChild(cal)
            InputValue.value = ""

        }
        else {
            cal = document.createTextNode(InputValue.value + v)
            displayOperation.appendChild(cal)
            InputValue.value = ""
        }

    }
    else if (v == "C") {
        if (InputValue.value.length > 0) {
            InputValue.value = '';
        }
        else {

            displayOperation.innerHTML = '';
        }
    }
    else if (v == 'invert') {
        InputValue.value = InputValue.value * -1;
    }

    else {
        if (0 == v) {
            InputValue.value = ''
        }
        else if (v == "=") {
            cal = document.createTextNode(InputValue.value)
            displayOperation.appendChild(cal)
            resultado = eval(displayOperation.innerHTML);
            InputValue.value = eval(displayOperation.innerHTML)
        }
        else {
            InputValue.value = InputValue.value + v
        }
    }


}






