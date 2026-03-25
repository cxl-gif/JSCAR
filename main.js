const applyFiltersBtn = document.getElementById('apply-filters');
const resetFiltersBtn = document.getElementById('reset-filters');
const priceRange = document.getElementById('filter-price');
const priceDisplay = document.getElementById('price-display');

if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', (e) => {
        priceDisplay.textContent = `$${e.target.value}`; //Récupère la valeur actuelle du curseur + le rand chaine
    });
}

if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', () => {
        const searchInput = document.getElementById('filter-search');
        const brandSelect = document.getElementById('filter-brand');
        const categorySelect = document.getElementById('filter-category');
        const priceInput = document.getElementById('filter-price');

        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const brandFilter = brandSelect ? brandSelect.value : 'all';
        const categoryFilter = categorySelect ? categorySelect.value : 'all';
        const maxPrice = priceInput ? parseInt(priceInput.value) : Infinity;

        const carCards = document.querySelectorAll('.car-grid .car-card');

        carCards.forEach(card => {
            const nameElem = card.querySelector('.car-name');
            const typeElem = card.querySelector('.car-type');
            const priceElem = card.querySelector('.car-price');

            const name = nameElem ? nameElem.textContent.toLowerCase() : '';
            const type = typeElem ? typeElem.textContent : '';
            const priceText = priceElem ? priceElem.textContent : '0';

            const numericPrice = parseInt(priceText.replace(/[^0-9]/g, ''));

            let matchesSearch = searchTerm === '' || name.includes(searchTerm);
            let matchesBrand = brandFilter === 'all' || name.includes(brandFilter.toLowerCase()); // brand name is in the car name
            let matchesCategory = categoryFilter === 'all' || type === categoryFilter;
            let matchesPrice = numericPrice <= maxPrice;

            if (matchesSearch && matchesBrand && matchesCategory && matchesPrice) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
        const searchInput = document.getElementById('filter-search');
        const brandSelect = document.getElementById('filter-brand');
        const categorySelect = document.getElementById('filter-category');
        const priceInput = document.getElementById('filter-price');

        if (searchInput) searchInput.value = '';
        if (brandSelect) brandSelect.value = 'all';
        if (categorySelect) categorySelect.value = 'all';

        if (priceInput && priceDisplay) {
            priceInput.value = 500;
            priceDisplay.textContent = '$500';
        }
        if (applyFiltersBtn) applyFiltersBtn.click();
    });
}
