function obliczanie_dowozu(){
let kilometry = document.getElementById('kilometry').value
let zadarmo = document.getElementById('gdansk')
let cena = document.getElementById('cena')

if (kilometry <= 0) {
    cenaElement.innerText = "Proszę wprowadzić prawidłową liczbę kilometrów!";
} else {
    if (zadarmo.checked) {
        cena.innerText = "Dowieziemy Twoją pizzę za darmo :)";
    } else {
        let koszt = kilometry * 2;
        cena.innerText = "Dowóz będzie Cię kosztował: " + koszt.toFixed(2) + " PLN";
    }
}
}
document.getElementById('kilometry').addEventListener('input', obliczanie_dowozu);

