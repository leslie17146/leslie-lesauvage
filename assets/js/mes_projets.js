// Bouton retour
document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});

// Gestion des modals pour les projets
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal') + 'Modal';
        document.getElementById(modalId).style.display = 'flex';
    });
});

// Fermeture des modals
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Fermer le modal en cliquant en dehors
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        if (!this.querySelector('.nav-center')) {
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            this.classList.add('active');
            
            // Redirection selon l'onglet sélectionné
            const tabText = this.querySelector('span').textContent;
            if (tabText === 'Accueil') {
                window.location.href = 'index.html';
            }
            // Les autres redirections peuvent être ajoutées ici
        }
    });
});