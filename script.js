document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Анимация карточек при загрузке
    const countryCards = document.querySelectorAll('.country-card');
    
    countryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Поиск (заглушка)
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-box input');
    
    searchBtn.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert('Поиск по запросу: ' + searchInput.value);
            searchInput.value = '';
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert('Поиск по запросу: ' + searchInput.value);
            searchInput.value = '';
        }
    });
    
    // Кнопка "На карте" (заглушка)
    const mapBtns = document.querySelectorAll('.map-btn');
    
    mapBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const countryName = this.closest('.country-card').querySelector('.country-name').textContent;
            alert('Открываем карту для: ' + countryName);
        });
    });
    
    // Кнопка "Добавить страну" (заглушка)
    const addNewCard = document.querySelector('.add-new');
    
    if (addNewCard) {
        addNewCard.addEventListener('click', function() {
            alert('Функция добавления новой страны будет реализована позже');
        });
    }
    
    // Адаптация навигации при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});