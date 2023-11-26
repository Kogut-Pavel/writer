window.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('mobile-menu-active');
        window.scrollBy(0, -85);
    });

    // Находим заголовки карточек и обрезаем если слишком длинное название
    const cardTitles = document.querySelectorAll('.card__title');
    const cardGenres = document.querySelectorAll('.card__genres');

    function cutLength(strings, maxLength) {
        strings.forEach((item) => {
            if (item.textContent.length > maxLength) {
                let titleValue = item.textContent.slice(0, maxLength - 2);
                item.textContent = titleValue + '...';
            }
        });
    }

    cutLength(cardTitles, 24);
    cutLength(cardGenres, 37);

    // Горизонтальный аккордеон

    $(function () {
        //обрабатываем клик по блоку с классом trigger
        $('.trigger').on('click', function (e) {
            e.preventDefault();
            //получаем нужные нам данные
            var $this = $(this),
                //получаем всё блоки menu
                container = $this.closest('.menu'),
                //получаем li по которому кликнули
                item = $this.closest('.item'),
                //получаем все другие li
                items = container.find('.item'),
                //выбираем из li активный
                activeItem = items.filter('.active'),
                //выбираем из li по которому кликнули блок контен
                content = item.find('.content'),
                //выбираем у li с классом active блок контент
                activeContent = activeItem.find('.content');

            //если нет li с классом active по которому кликнули
            if (!item.hasClass('active')) {
                //убираем класс active
                items.removeClass('active');
                //добавляем active кликнутому
                item.addClass('active');
                //у того у кого был active задаём ширину 0
                activeContent.animate({
                    width: '0',
                });
                //кликнутому 294
                content.animate({
                    width: '29.4rem',
                });
                //иначе
            } else {
                item.removeClass('active');
                content.animate({
                    width: '0',
                });
            }
        });
        $('.item-4').click();
    });

    // Слайдеры

    $('.owl-carousel.row1').owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        center: true,
        lazyLoad: true,
        stagePadding: 50,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 6000,
    });
    $('.owl-carousel.row2').owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        lazyLoad: true,
        stagePadding: 160,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 7000,
        rtl: true,
    });
    $('.owl-carousel.row3').owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        center: true,
        lazyLoad: true,
        stagePadding: 160,
        autoplay: true,
        autoplayHoverPause: true,
    });
    $('.owl-carousel.book-reviews').owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        lazyLoad: true,
        stagePadding: 160,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 7000,
    });
    $('.owl-carousel.book-reviews2').owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        center: true,
        lazyLoad: true,
        stagePadding: 160,
        autoplay: true,
        autoplayHoverPause: true,
    });

    // Пагинация

    const content = document.querySelector('.content');
    const itemsPerPage = 14; // set number of items per page
    let currentPage = 0;
    const items = Array.from(content.querySelectorAll('.card')).slice(0);

    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        items.forEach((item, index) => {
            item.classList.toggle(
                'hidden',
                index < startIndex || index >= endIndex
            );
        });
        updateActiveButtonStates();
    }

    function createPageButtons() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const paginationContainer = document.createElement('div');
        const paginationDiv = document.body.appendChild(paginationContainer);
        paginationContainer.classList.add('bookspage__pagination');

        // Add page buttons
        for (let i = 0; i < totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
                updateActiveButtonStates();
            });

            content.parentNode.appendChild(paginationContainer);
            paginationDiv.appendChild(pageButton);
        }
    }

    function updateActiveButtonStates() {
        const pageButtons = document.querySelectorAll('.bookspage__pagination button');
        pageButtons.forEach((button, index) => {
            if (index === currentPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    createPageButtons(); // Call this function to create the page buttons initially
    showPage(currentPage);
});
