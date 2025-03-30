function calculateCost() {
    const normalTicketPricePerHour = 10;
    const discountedTicketPricePerHour = 5;
    const normalAllDayPrice = 50;
    const discountedAllDayPrice = 25;
    const familyDiscount = 0.1;
    const freeNormalTicketForDiscounted = 15;

    let normalTickets = parseInt(document.getElementById('normalTickets').value) || 0;
    let discountedTickets = parseInt(document.getElementById('discountedTickets').value) || 0;
    let hours = parseInt(document.getElementById('hours').value) || 1;
    let hasFamilyCard = document.getElementById('familyCard').checked;

    let totalCost = 0;

    // Obliczanie kosztów biletów normalnych
    if (hours > 4) {
        totalCost += normalTickets * normalAllDayPrice;
    } else {
        totalCost += normalTickets * normalTicketPricePerHour * hours;
    }

    // Obliczanie kosztów biletów ulgowych
    if (hours > 4) {
        totalCost += discountedTickets * discountedAllDayPrice;
    } else {
        totalCost += discountedTickets * discountedTicketPricePerHour * hours;
    }

    // Bonusowe bilety normalne za ulgowe
    let freeNormalTickets = Math.floor(discountedTickets / freeNormalTicketForDiscounted);
    totalCost -= freeNormalTickets * (hours > 4 ? normalAllDayPrice : normalTicketPricePerHour * hours);

    // Rabat dla posiadaczy Karty Dużej Rodziny
    if (hasFamilyCard) {
        totalCost *= (1 - familyDiscount);
    }

    document.getElementById('result').innerText = `Całkowity koszt wstępu do aquaparku: ${totalCost.toFixed(2)} zł`;
}