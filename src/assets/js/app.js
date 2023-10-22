'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // Бургер-меню
    const toggleMenu = (event) => {
        let target = event.target;
        let menuBtn = document.querySelector('.menu-btn');
        let menu = document.querySelector('.header__mobile-menu');

        const showMenu = () => {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('active');
        };

        if (target.closest('.menu-btn')) {
            showMenu();
        } else if (
            !target.classList.contains('active') &&
            menuBtn.classList.contains('active')
        ) {
            showMenu();
        } else if (target.classList.contains('menu__link')) {
            showMenu();
        } else if (
            target.classList.contains('body') &&
            menuBtn.classList.contains('active')
        ) {
            showMenu();
        }
    };

    document.addEventListener('click', toggleMenu);

    const modalBtn = document.querySelectorAll('[data-modal]');
    const body = document.body;
    const modalClose = document.querySelectorAll('.modal__close');
    const modal = document.querySelectorAll('.modal');

    // Добавляем слушатель на кнопки с модальными окнами и добавляем классы при клике
    modalBtn.forEach((item) => {
        item.addEventListener('click', (event) => {
            let target = event.currentTarget;
            let modalId = target.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            let modalContent = modal.querySelector('.modal__content');

            modalContent.addEventListener('click', (event) => {
                event.stopPropagation();
            });

            modal.classList.add('show');
            body.classList.add('no-scroll');

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

    try {
        // Переключение навигации на странице account
        const accountMenuList = document.querySelector('.account-menu ul');
        const accountMenuItems = accountMenuList.querySelectorAll('li');
        const sections = document.querySelectorAll('.account__inner section');

        accountMenuList.addEventListener('click', (event) => {
            let target = event.target;
            if (target.nodeName === 'LI') {
                let index = Array.prototype.indexOf.call(
                    target.parentNode.children,
                    target
                );
                accountMenuItems.forEach((item) => {
                    item.classList.remove('active');
                });
                target.classList.add('active');
                sections.forEach((item) => {
                    item.classList.add('d-none');
                });
                sections[index].classList.remove('d-none');
            }
        });
    } catch {
        // console.log('Что-то не так');
    }

    try {
        // News

        const newsItems = document.querySelectorAll('.news__item');
        const newsMore = document.querySelector('#news-more');

        newsMore.addEventListener('click', () => {
            newsItems.forEach((item) => {
                item.classList.remove('hidden');
            });
            newsMore.style.display = 'none';
        });

        // Objects

        const objectsItems = document.querySelectorAll('.objects__item');
        const objectsMore = document.querySelector('#objects-more');

        objectsMore.addEventListener('click', () => {
            objectsItems.forEach((item) => {
                item.classList.remove('hidden');
            });
            objectsMore.style.display = 'none';
        });
    } catch {}

    // Brochure pagination

    // let thisPage = 1;
    // let limit = 8;
    // let list = document.querySelectorAll('.brochure__item');

    // function loadItem() {
    //     let beginGet = limit * (thisPage - 1);
    //     let endGet = limit * thisPage - 1;
    //     list.forEach((item, key) => {
    //         if (key >= beginGet && key <= endGet) {
    //             item.style.display = 'block';
    //         } else {
    //             item.style.display = 'none';
    //         }
    //     });
    //     listPage();
    // }
    // loadItem();
    // function listPage() {
    //     let count = Math.ceil(list.length / limit);
    //     document.querySelector('.pagination').innerHTML = '';

    //     if (thisPage != 1) {
    //         let prev = document.createElement('li');
    //         prev.innerText = 'PREV';
    //         prev.setAttribute('onclick', 'changePage(' + (thisPage - 1) + ')');
    //         document.querySelector('.pagination').appendChild(prev);
    //     }

    //     for (let i = 1; i <= count; i++) {
    //         let newPage = document.createElement('li');
    //         newPage.innerText = i;
    //         if (i == thisPage) {
    //             newPage.classList.add('active');
    //         }
    //         newPage.setAttribute('onclick', 'changePage(' + i + ')');
    //         document.querySelector('.pagination').appendChild(newPage);
    //     }

    //     if (thisPage != count) {
    //         let next = document.createElement('li');
    //         next.innerText = 'NEXT';
    //         next.setAttribute('onclick', 'changePage(' + (thisPage + 1) + ')');
    //         document.querySelector('.pagination').appendChild(next);
    //     }
    // }
    // function changePage(i) {
    //     thisPage = i;
    //     loadItem();
    // }

    // main page carousel

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
        });
    });

    // Techdescription accardeon

    const titles = document.querySelectorAll('.techdescription__item-title');

    titles.forEach(function (item) {
        item.addEventListener('click', function () {
            if (this.nextElementSibling) {
                this.nextElementSibling.classList.toggle('active');
            }
        });
    });

    const pricelist = document.querySelectorAll('.pricelist__item-title');

    pricelist.forEach(function (item) {
        item.addEventListener('click', function () {
            if (this.nextElementSibling) {
                this.nextElementSibling.classList.toggle('active');
            }
        });
    });

    // Catalog
    // Принцип работы: У категории в списке должен быть data-filter с названием категории по которой будет фильтроваться каталог. У продукта должен быть класс с таким же названием как категория фильтра!
    const catalogHeaders = document.querySelectorAll('.catalog__headers li');
    const products = document.querySelectorAll('.product');

    function filter (category, items) {
        items.forEach((item) => {
          const isItemFiltered = !item.classList.contains(category);
          if (isItemFiltered) {
              item.classList.add('d-none');
          } else {
              item.classList.remove('d-none');
          }
        })
      }

      catalogHeaders.forEach((button) => {
        button.addEventListener("click", () => {
          const currentCategory = button.dataset.filter;
          catalogHeaders.forEach(item => {
            item.classList.remove('active');
          });
          button.classList.add('active');
          filter(currentCategory, products);
        });
      });
      
      if (catalogHeaders[0]) {
        catalogHeaders[0].click();
      }
      


    //toFavourites-icon

    const icons = document.querySelectorAll('.product__toFavourites');

    icons.forEach(item => {
        item.addEventListener('click', function() {
            let startSrc;
            let endSrc;
            let newSrc;
            let hasSrc = this.src.indexOf('-fill');
            if (hasSrc < 0) {
                startSrc = this.src.slice(0, -4);
                endSrc = this.src.slice(-4);
                newSrc = `${startSrc}-fill${endSrc}`;
                this.src = newSrc;
            } else {
                startSrc = this.src.slice(0, -9);
                endSrc = this.src.slice(-4);
                newSrc = `${startSrc}${endSrc}`;
                this.src = newSrc;
            }
            item.style.width = '20px';

        });
    });

    // Смена класса active 

    const profileButtons = document.querySelectorAll('.profile__subject button');
    const checkoutSubtitles = document.querySelectorAll('.checkout__subtitles .profile__subtitle');
    

    const changeActive = function(items) {
        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(item => {
                    item.classList.remove('active');
                });
                item.classList.add('active');
            });
        });
    }

    changeActive(profileButtons);
    changeActive(checkoutSubtitles);


    // Order tabs

    const tabHeaders = document.querySelectorAll('[data-tab]');
    const contentBoxes = document.querySelectorAll('[data-tab-content]');

    tabHeaders.forEach(function (item) {
        item.addEventListener('click', function () {
            const contentBox = document.querySelector('#' + this.dataset.tab);
            contentBoxes.forEach(function (item) {
                item.classList.add('d-none');
            });
            contentBox.classList.remove('d-none');
            tabHeaders.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
        });
    });

    // Checkout Form

    const forms = () => {

        const checkNumInputs = (selector) => {
            const numInputs = document.querySelectorAll(selector);
        
        // Всем инпутам с вводом телефона разрешаем только цифры
            numInputs.forEach(item => {
                item.addEventListener('input', () => {
                    item.value = item.value.replace(/[^0-9+]/g, '');
                });
            });
        };
    
        const clearInputs = () => { // Очищаем инпуты
            const inputs = document.querySelectorAll('input');
            const checkbox = document.querySelectorAll('input[name="checkbox"]');
            inputs.forEach(item => {
                item.value = '';
            });
            checkbox.forEach(item => {
                item.checked = false;
            });
        };
    
        // const form = document.querySelectorAll('form'); // Все формы
        const form = document.querySelectorAll('#checkout-form'); // Только чекаут форма
        checkNumInputs('input[name="phone"]');
    
        const postData = async (url, data) => { // Отправка запроса
            let res = await fetch(url, {
                method: "POST",
                body: data,
            });
            if (!res.ok) {
                throw new Error(res.statusText);
            } else {
                return await res.text();
            }
        };
    
        form.forEach(item => { // Перебираем формы и навешиваем обработчик события
            item.addEventListener('submit', (event) => {
                event.preventDefault();
    
                const formData = new FormData(item); // Собираем данные из формы
    
                // Отправляем запрос на сервер с данными из formData
                postData('smart.php', formData)
                    .then(() => {
                        console.log('Отправлено');
                    })
                    .catch(err => {
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
