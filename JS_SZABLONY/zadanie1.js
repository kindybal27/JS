function obliczanie() {
    const ilosc = parseInt(document.getElementById('ilość_gości').value || 0)
    const poprawiny = document.getElementById('poprawiny').checked
    const koszt = ilosc * 100 * (poprawiny ? 1.3 : 1)
    
    document.getElementById('wynik').textContent = "Całkowity koszt wesela: " + koszt + 'PLN'
}

document.getElementById('ilość_gości').addEventListener('input', obliczanie)
document.getElementById('poprawiny').addEventListener('change', obliczanie)



