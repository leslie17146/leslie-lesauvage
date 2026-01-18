// Gestion des catégories
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        // Retirer la classe active de toutes les catégories
        document.querySelectorAll('.category').forEach(c => {
            c.classList.remove('active');
        });
        
        // Ajouter la classe active à la catégorie cliquée
        this.classList.add('active');
        
        // Masquer toutes les sections de contenu
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Afficher la section correspondante
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Animation pour la navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        if (!this.querySelector('.nav-center')) {
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Gestion du bouton projets
document.getElementById('projectsButton').addEventListener('click', function() {
    // Redirection vers votre page de projets
    window.location.href = 'projets.html'; // Remplacez par l'URL de votre page projets
});

// Gestion des modals pour les formations
document.querySelectorAll('.card[data-modal]').forEach(card => {
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