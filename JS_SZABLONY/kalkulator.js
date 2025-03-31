function oblicz(dzialanie) {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    let wynik;

    if (isNaN(a) || isNaN(b)) {
        wynik = "Proszę wprowadzić obie liczby.";
    } else {
        switch(dzialanie) {
            case 'dodawanie':
                wynik = a + b;
                break;
            case 'odejmowanie':
                wynik = a - b;
                break;
            case 'mnozenie':
                wynik = a * b;
                break;
            case 'dzielenie':
                if (b === 0) {
                    wynik = "Dzielenie przez zero jest niemożliwe.";
                } else {
                    wynik = a / b;
                }
                break;
            case 'reszta':
                if (b === 0) {
                    wynik = "Dzielenie przez zero jest niemożliwe.";
                } else {
                    wynik = a % b;
                }
                break;
            case 'calkowite':
                if (b === 0) {
                    wynik = "Dzielenie przez zero jest niemożliwe.";
                } else {
                    wynik = Math.floor(a / b);
                }
                break;
            default:
                wynik = "Nieznane działanie.";
        }
    }

    document.getElementById('wynik').textContent = "Wynik: " + wynik;
}

document.getElementById('dodawanie').addEventListener('click', function() {
    oblicz('dodawanie');
});

document.getElementById('odejmowanie').addEventListener('click', function() {
    oblicz('odejmowanie');
});

document.getElementById('mnozenie').addEventListener('click', function() {
    oblicz('mnozenie');
});

document.getElementById('dzielenie').addEventListener('click', function() {
    oblicz('dzielenie');
});

document.getElementById('reszta').addEventListener('click', function() {
    oblicz('reszta');
});

document.getElementById('calkowite').addEventListener('click', function() {
    oblicz('calkowite');
});