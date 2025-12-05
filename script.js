function compareTickets() {
    const destination = document.getElementById('destination').value;
    const message = document.getElementById('message');
    const results = document.getElementById('results');

    // Réinitialiser les messages et résultats
    message.classList.add('hidden');
    results.innerHTML = '';

    // Validation de l'entrée
    if (!destination) {
        message.innerText = "Veuillez entrer une destination.";
        message.classList.remove('hidden');
        return;
    }

    // Simuler des billets de transport
    const tickets = [
        { company: 'SNCF', price: 30, promoCode: 'SNCF20', type: 'Train' },
        { company: 'Air France', price: 100, promoCode: 'AIRFRANCE10', type: 'Avion' },
        { company: 'Ryanair', price: 50, promoCode: 'RYANAIR15', type: 'Avion' },
        { company: 'FlixBus', price: 15, promoCode: 'FLIX5', type: 'Bus' }
    ];

    // Afficher les résultats
    tickets.forEach(ticket => {
        const ticketDiv = document.createElement('div');
        ticketDiv.className = 'ticket';
        ticketDiv.innerHTML = `
            <strong>${ticket.type} avec ${ticket.company}</strong><br>
            Prix: ${ticket.price}€<br>
            Code Promo: <strong>${ticket.promoCode}</strong><br>
            <a href="##" onclick="redirect('${ticket.company}')">Réserver maintenant</a>
        `;
        results.appendChild(ticketDiv);
    });
}

function redirect(company) {
    const urls = {
        'SNCF': 'https://www.sncf.com',
        'Air France': 'https://www.airfrance.fr',
        'Ryanair': 'https://www.ryanair.com',
        'FlixBus': 'https://www.flixbus.fr',
    };
    window.open(urls[company], '_blank');
}
