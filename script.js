// ===== DONNÉES DES OFFRES =====
const offres = [
    // Offres AVION
    {
        type: 'avion',
        compagnie: 'Air France',
        icone: '✈️',
        trajet: 'Toulouse → Marseille',
        prix: '89€',
        ancienPrix: '120€',
        codePromo: 'PLANB25',
        reduction: '-25%',
        lien: 'https://www.airfrance.fr'
    },
    {
        type: 'avion',
        compagnie: 'Ryanair',
        icone: '✈️',
        trajet: 'Toulouse → Barcelone',
        prix: '45€',
        ancienPrix: '65€',
        codePromo: 'PLANB30',
        reduction: '-30%',
        lien: 'https://www.ryanair.com'
    },
    // Offres TRAIN
    {
        type: 'train',
        compagnie: 'SNCF',
        icone: '🚄',
        trajet: 'Toulouse → Paris',
        prix: '35€',
        ancienPrix: '50€',
        codePromo: 'PLANB15',
        reduction: '-15%',
        lien: 'https://www.sncf.com'
    },
    {
        type: 'train',
        compagnie: 'SNCF TGV',
        icone: '🚄',
        trajet: 'Lyon → Nice',
        prix: '55€',
        ancienPrix: '75€',
        codePromo: 'PLANB20',
        reduction: '-20%',
        lien: 'https://www.sncf.com'
    },
    // Offres BUS
    {
        type: 'bus',
        compagnie: 'FlixBus',
        icone: '🚌',
        trajet: 'Toulouse → Amsterdam',
        prix: '25€',
        ancienPrix: '35€',
        codePromo: 'PLANB10',
        reduction: '-10%',
        lien: 'https://www.flixbus.fr'
    },
    {
        type: 'bus',
        compagnie: 'BlaBlaBus',
        icone: '🚌',
        trajet: 'Paris → Bruxelles',
        prix: '15€',
        ancienPrix: '22€',
        codePromo: 'PLANB7',
        reduction: '-7€',
        lien: 'https://www.blablabus.com'
    },
    // Offres COVOITURAGE
    {
        type: 'covoiturage',
        compagnie: 'BlaBlaCar',
        icone: '🚗',
        trajet: 'Paris → Bordeaux',
        prix: '18€',
        ancienPrix: '25€',
        codePromo: 'PLANB7',
        reduction: '-7€',
        lien: 'https://www.blablacar.fr'
    },
    {
        type: 'covoiturage',
        compagnie: 'BlaBlaCar',
        icone: '🚗',
        trajet: 'Lyon → Marseille',
        prix: '12€',
        ancienPrix: '18€',
        codePromo: 'PLANB6',
        reduction: '-6€',
        lien: 'https://www.blablacar.fr'
    }
];

// Variable pour mémoriser le type de transport sélectionné
let transportActuel = 'avion';

// ===== Fonction pour changer le type de transport =====
function changerTransport(type) {
    const tousLesOnglets = document.querySelectorAll('.choix');
    tousLesOnglets.forEach(onglet => { onglet.classList.remove('active'); });
    event.target.classList.add('active');
    transportActuel = type;
    afficherOffres(type);
}

// ===== Fonction pour afficher les offres =====
function afficherOffres(type) {
    const conteneur = document.getElementById('ContOffres');
    const offresFiltrees = offres.filter(offre => offre.type === type);
    let html = '';
    offresFiltrees.forEach(offre => {
        html += `
                    <div class="col-md-4">
                        <div class="carte">
                            <div class="headerOffre">
                                <div class="icone">${offre.icone}</div>
                                <h3 class="titre">${offre.compagnie}</h3>
                            </div>
                            <div class="bodyOffre">
                                <h4 class="mb-3">${offre.trajet}</h4>
                                <div class="promoBadge">${offre.reduction}</div>
                                <div class="prix">${offre.prix}
                                    <span class="ancienPrix">${offre.ancienPrix}</span>
                                </div>
                                <div class="mb-3">
                                    <strong>Code promo:</strong>
                                    <span class="promoCode">${offre.codePromo}</span>
                                </div>
                                <a href="${offre.lien}" target="_blank" class="btn btn-reserve">Réserver maintenant →</a>
                            </div>
                        </div>
                    </div>
                `;
    });

    // Insérer le HTML dans le conteneur
    conteneur.innerHTML = html;
}

// ===== Fonction pour chercher un voyage =====
function rechercherVoyage(event) {
    // Empêcher le rechargement de la page et recuperer les valeurs
    event.preventDefault();
    const depart = document.getElementById('depart').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const passagers = document.getElementById('passagers').value;
    alert(`Recherche de ${transportActuel} de ${depart} à ${destination} pour ${passagers} passager(s) le ${date}`);

    // Faire défiler la page vers les offres
    document.getElementById('offres').scrollIntoView({ behavior: 'smooth' });
}

// Définir la date minimum à aujourd'hui
const aujourdHui = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', aujourdHui);

// Afficher les offres d'avion par défaut
afficherOffres('avion');