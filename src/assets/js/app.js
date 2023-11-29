window.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
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
    if (window.innerWidth > 1200) {
        cutLength(cardTitles, 24);
        cutLength(cardGenres, 37);
    }
    if (window.innerWidth <= 1200) {
        cutLength(cardTitles, 33);
        cutLength(cardGenres, 45);
    }

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

    try {
        $('.owl-carousel.row1').owlCarousel({
            items: 3,
            margin: 20,
            loop: true,
            center: true,
            lazyLoad: true,
            stagePadding: 0,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 6000,
            autoWidth: true,
            dots: false,
            responsive: {
                0: {
                    margin: 10,
                    items: 1,
                },
                767: {
                    margin: 20,
                    items: 3,
                },
            },
        });
        $('.owl-carousel.row2').owlCarousel({
            items: 2,
            margin: 20,
            loop: true,
            lazyLoad: true,
            stagePadding: 170,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 7000,
            rtl: true,
            dots: false,
            autoWidth: true,
            responsive: {
                0: {
                    margin: 10,
                },
                767: {
                    margin: 20,
                },
            },
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
            dots: false,
            autoWidth: true,
            responsive: {
                0: {
                    margin: 10,
                },
                767: {
                    margin: 20,
                },
            },
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
            dots: false,
            autoWidth: true,
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
            dots: false,
            autoWidth: true,
        });
    } catch {}

    // Пагинация

    try {
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
            const paginationDiv =
                document.body.appendChild(paginationContainer);
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
            const pageButtons = document.querySelectorAll(
                '.bookspage__pagination button'
            );
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
    } catch (error) {}

    // Modals

    const modalBtn = document.querySelectorAll('[data-modal]');
    const body = document.body;
    const modalClose = document.querySelectorAll('.modal__close');
    const modal = document.querySelectorAll('.modal');

    modalBtn.forEach((item) => {
        item.addEventListener('click', (event) => {
            let target = event.currentTarget;
            let modalId = target.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            let modalContent = modal.querySelector('.modal__content');
            let comment = document.querySelector('#comment');

            modalContent.addEventListener('click', (event) => {
                event.stopPropagation();
            });

            if (comment) {
                if (comment.value.length > 1) {
                    modal.classList.add('show');
                    body.classList.add('no-scroll');
                }
            } else {
                modal.classList.add('show');
                body.classList.add('no-scroll');
            }
            
            setTimeout(() => {
                modalContent.style.transform = 'none';
                modalContent.style.opacity = '1';
            }, 1);
        });
    });

    // Закрываем модальное окно, убирая классы
    function closeModal(modal) {
        let modalContent = modal.querySelector('.modal__content');
        modalContent.removeAttribute('style');
        setTimeout(() => {
            modal.classList.remove('show');
            body.classList.remove('no-scroll');
        }, 200);
    }

    // Добавляем слушатель на крестики в модальных окнах
    modalClose.forEach((item) => {
        item.addEventListener('click', (event) => {
            let currentModal = event.currentTarget.closest('.modal');
            closeModal(currentModal);
        });
    });

    modal.forEach((item) => {
        item.addEventListener('click', (event) => {
            let currentModal = event.currentTarget;
            closeModal(currentModal);
        });
    });

    // Forms

    const forms = () => {
        const clearInputs = () => {
            // Очищаем инпуты
            const inputs = document.querySelectorAll('input');
            const textarea = document.querySelector('textarea');
            const checkbox = document.querySelectorAll(
                'input[name="checkbox"]'
            );
            inputs.forEach((item) => {
                item.value = '';
            });
            checkbox.forEach((item) => {
                item.checked = false;
            });
            textarea.value = '';
        };

        const form = document.querySelectorAll('form'); // Все формы

        const postData = async (url, data) => {
            // Отправка запроса
            let res = await fetch(url, {
                method: 'POST',
                body: data,
            });
            if (!res.ok) {
                throw new Error(res.statusText);
            } else {
                return await res.text();
            }
        };

        form.forEach((item) => {
            // Перебираем формы и навешиваем обработчик события
            item.addEventListener('submit', (event) => {
                event.preventDefault();

                const formData = new FormData(item); // Собираем данные из формы

                // Отправляем запрос на сервер с данными из formData
                postData('smart.php', formData)
                    .then(() => {
                        console.log('Отправлено');
                    })
                    .catch((err) => {
                        console.error(err);
                    })
                    .finally(() => {
                        clearInputs();
                    });
            });
        });
    };

    forms();
});
