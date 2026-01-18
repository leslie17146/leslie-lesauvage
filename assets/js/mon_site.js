// Gestion des catégories (mobile)
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
        
        // Scroller vers le haut sur mobile
        if (window.innerWidth < 992) {
            window.scrollTo(0, 0);
        }
    });
});

// Gestion de la navigation desktop
document.querySelectorAll('.desktop-nav .nav-item').forEach(navItem => {
    navItem.addEventListener('click', function() {
        // Retirer la classe active de tous les items
        document.querySelectorAll('.desktop-nav .nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Ajouter la classe active à l'item cliqué
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

// Gestion des modals pour toutes les cartes
document.querySelectorAll('.card[data-modal]').forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal') + 'Modal';
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Gestion du bouton projets
document.getElementById('projects-link')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('projectsModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

document.getElementById('projects-link-mobile')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('projectsModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

// Fermeture des modals
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Fermer le modal en cliquant en dehors
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animation au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Fade in de la page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialiser la première section
    const activeCategory = document.querySelector('.category.active') || document.querySelector('.desktop-nav .nav-item.active');
    if (activeCategory) {
        const targetId = activeCategory.getAttribute('data-target');
        document.getElementById(targetId)?.classList.add('active');
    }
});

// Gestion responsive pour les modals
function adjustModalForMobile() {
    const modals = document.querySelectorAll('.modal-content');
    if (window.innerWidth < 768) {
        modals.forEach(modal => {
            modal.style.width = '95%';
            modal.style.padding = '20px';
        });
    } else {
        modals.forEach(modal => {
            modal.style.width = '';
            modal.style.padding = '';
        });
    }
}

// Initialiser et écouter les changements de taille
adjustModalForMobile();
window.addEventListener('resize', adjustModalForMobile);

// Fermer avec la touche Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});
