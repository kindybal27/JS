function obliczKoszt() {
    // Pobierz liczbę ogłoszeń
    const liczbaOgloszen = parseInt(document.getElementById('ogloszenia').value);
    // Sprawdź, czy zaznaczono checkbox "Stały klient"
    const stalyKlient = document.getElementById('staly').checked;
    
    let koszt = 0;

    // Oblicz koszt na podstawie liczby ogłoszeń
    if (liczbaOgloszen <= 50) {
        koszt = liczbaOgloszen * 2;
    } else if (liczbaOgloszen <= 100) {
        koszt = (50 * 2) + ((liczbaOgloszen - 50) * 1.5);
    } else {
        koszt = (50 * 2) + (50 * 1.5) + ((liczbaOgloszen - 100) * 1);
    }

    // Jeśli stały klient, nalicz rabat 20%
    if (stalyKlient) {
        koszt *= 0.8;
    }

    // Wyświetl wynik
    document.getElementById('wynik').innerText = `Koszt ogłoszeń: ${koszt.toFixed(2)} zł`;
}
