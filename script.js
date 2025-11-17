// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim().toLowerCase();
            
            if (searchTerm) {
                // Get all movie cards
                const movieCards = document.querySelectorAll('.movie-card-link');
                let found = false;

                movieCards.forEach(card => {
                    const movieTitle = card.querySelector('.movie-title').textContent.toLowerCase();
                    if (movieTitle.includes(searchTerm)) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.style.border = '2px solid #ffff00';
                        setTimeout(() => {
                            card.style.border = 'none';
                        }, 2000);
                        found = true;
                    }
                });

                if (!found) {
                    alert('Movie not found. Please try another search term.');
                }
            }
        });
    }

    // Check if redirected from search icon
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('search') === 'true') {
        searchInput.focus();
    }
});

