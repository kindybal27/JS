function obliczKosztIWage() {
    // Pobranie wartości z formularza
    const iloscCegiel = parseInt(document.getElementById('ilosc').value);
    const ceglaPremium = document.getElementById('premium').checked;
    const iloscKilometrow = parseInt(document.getElementById('kilometry').value);

    // Sprawdzenie, czy wartość jest liczbą
    if (isNaN(iloscCegiel) || iloscCegiel <= 0 || isNaN(iloscKilometrow) || iloscKilometrow <= 0) {
        document.getElementById('wynik').innerText = 'Wprowadź prawidłową ilość cegieł i kilometrów.';
        return;
    }

    // Ustawienie kosztów i wag dla zwykłej i premium cegły
    const cenaCegla = 2; // 2zł za cegłę
    const cenaCeglaPremium = cenaCegla * 1.30; // 30% droższa cegła premium
    const wagaCegla = 1.5; // 1,5kg za cegłę
    const wagaCeglaPremium = 1.75; // 1,75kg za cegłę premium

    let koszt, waga;

    // Obliczanie kosztu i wagi na podstawie typu cegły
    if (ceglaPremium) {
        koszt = iloscCegiel * cenaCeglaPremium;
        waga = iloscCegiel * wagaCeglaPremium;
    } else {
        koszt = iloscCegiel * cenaCegla;
        waga = iloscCegiel * wagaCegla;
    }

    // Obliczenie kosztu transportu
    const wagaZaokraglona = Math.ceil(waga / 10) * 10; // Zaokrąglenie wagi do najbliższych 10kg
    const kosztTransportu = iloscKilometrow * (wagaZaokraglona / 10) * 0.50; // 50gr za każde 10kg na każdy kilometr

    // Wyświetlanie wyniku
    document.getElementById('wynik').innerText = `Koszt cegieł: ${koszt.toFixed(2)} zł, Waga: ${waga.toFixed(2)} kg, Koszt transportu: ${kosztTransportu.toFixed(2)} zł`;
}