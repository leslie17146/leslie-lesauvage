// Bouton retour mobile
document.getElementById('backButton')?.addEventListener('click', function() {
    window.history.back();
});

document.getElementById('mobileBackButton')?.addEventListener('click', function() {
    window.history.back();
});

// Gestion des modals pour les projets
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal') + 'Modal';
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Scroller vers le haut du modal
            modal.querySelector('.modal-content').scrollTop = 0;
        }
    });
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
    
    // Animation des cartes au chargement
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Gestion responsive pour les modals
function adjustModalForMobile() {
    const modalContents = document.querySelectorAll('.modal-content');
    if (window.innerWidth < 768) {
        modalContents.forEach(modal => {
            modal.style.width = '95%';
        });
    } else {
        modalContents.forEach(modal => {
            modal.style.width = '';
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

// Empêcher le scroll du body quand un modal est ouvert
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('wheel', function(e) {
        if (e.target.closest('.modal-content')) {
            e.stopPropagation();
        }
    }, { passive: false });
});
