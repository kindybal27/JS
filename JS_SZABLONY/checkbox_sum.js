function sumuj() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        const poleTekstowe = document.getElementById('pole' + i);
        const checkbox = document.getElementById('checkbox' + i);

        if (checkbox.checked && Number.isInteger(Number(poleTekstowe.value))) {
            suma += parseInt(poleTekstowe.value, 10);
        }
    }
    document.getElementById('wynik').innerText = "Suma zaznaczonych liczb: " + suma;
}

window.onload = function() {
     for (let i = 1; i <= 5; i++) {
        document.getElementById('pole' + i).addEventListener('input', sumuj);
        document.getElementById('checkbox' + i).addEventListener('change', sumuj);
    }}