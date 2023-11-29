/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('DOMContentLoaded', () => {\r\n    // Мобильное меню\r\n\r\n    let menuBtn = document.querySelector('.menu-btn');\r\n    let menu = document.querySelector('.menu');\r\n    menuBtn.addEventListener('click', function () {\r\n        menuBtn.classList.toggle('active');\r\n        menu.classList.toggle('active');\r\n        document.body.classList.toggle('no-scroll');\r\n        window.scrollBy(0, -85);\r\n    });\r\n\r\n    // Находим заголовки карточек и обрезаем если слишком длинное название\r\n\r\n    const cardTitles = document.querySelectorAll('.card__title');\r\n    const cardGenres = document.querySelectorAll('.card__genres');\r\n\r\n    function cutLength(strings, maxLength) {\r\n        strings.forEach((item) => {\r\n            if (item.textContent.length > maxLength) {\r\n                let titleValue = item.textContent.slice(0, maxLength - 2);\r\n                item.textContent = titleValue + '...';\r\n            }\r\n        });\r\n    }\r\n    if (window.innerWidth > 1200) {\r\n        cutLength(cardTitles, 24);\r\n        cutLength(cardGenres, 37);\r\n    }\r\n    if (window.innerWidth <= 1200) {\r\n        cutLength(cardTitles, 33);\r\n        cutLength(cardGenres, 45);\r\n    }\r\n\r\n    // Горизонтальный аккордеон\r\n\r\n    $(function () {\r\n        //обрабатываем клик по блоку с классом trigger\r\n        $('.trigger').on('click', function (e) {\r\n            e.preventDefault();\r\n            //получаем нужные нам данные\r\n            var $this = $(this),\r\n                //получаем всё блоки menu\r\n                container = $this.closest('.menu'),\r\n                //получаем li по которому кликнули\r\n                item = $this.closest('.item'),\r\n                //получаем все другие li\r\n                items = container.find('.item'),\r\n                //выбираем из li активный\r\n                activeItem = items.filter('.active'),\r\n                //выбираем из li по которому кликнули блок контен\r\n                content = item.find('.content'),\r\n                //выбираем у li с классом active блок контент\r\n                activeContent = activeItem.find('.content');\r\n\r\n            //если нет li с классом active по которому кликнули\r\n            if (!item.hasClass('active')) {\r\n                //убираем класс active\r\n                items.removeClass('active');\r\n                //добавляем active кликнутому\r\n                item.addClass('active');\r\n                //у того у кого был active задаём ширину 0\r\n                activeContent.animate({\r\n                    width: '0',\r\n                });\r\n                //кликнутому 294\r\n                content.animate({\r\n                    width: '29.4rem',\r\n                });\r\n                //иначе\r\n            } else {\r\n                item.removeClass('active');\r\n                content.animate({\r\n                    width: '0',\r\n                });\r\n            }\r\n        });\r\n        $('.item-4').click();\r\n    });\r\n\r\n    // Слайдеры\r\n\r\n    try {\r\n        $('.owl-carousel.row1').owlCarousel({\r\n            items: 3,\r\n            margin: 20,\r\n            loop: true,\r\n            center: true,\r\n            lazyLoad: true,\r\n            stagePadding: 0,\r\n            // autoplay: true,\r\n            autoplayHoverPause: true,\r\n            autoplayTimeout: 6000,\r\n            autoWidth: true,\r\n            dots: false,\r\n            responsive: {\r\n                0: {\r\n                    margin: 10,\r\n                    items: 1,\r\n                },\r\n                767: {\r\n                    margin: 20,\r\n                    items: 3,\r\n                },\r\n            },\r\n        });\r\n        $('.owl-carousel.row2').owlCarousel({\r\n            items: 2,\r\n            margin: 20,\r\n            loop: true,\r\n            lazyLoad: true,\r\n            stagePadding: 170,\r\n            autoplay: true,\r\n            autoplayHoverPause: true,\r\n            autoplayTimeout: 7000,\r\n            rtl: true,\r\n            dots: false,\r\n            autoWidth: true,\r\n            responsive: {\r\n                0: {\r\n                    margin: 10,\r\n                },\r\n                767: {\r\n                    margin: 20,\r\n                },\r\n            },\r\n        });\r\n        $('.owl-carousel.row3').owlCarousel({\r\n            items: 2,\r\n            margin: 20,\r\n            loop: true,\r\n            center: true,\r\n            lazyLoad: true,\r\n            stagePadding: 160,\r\n            autoplay: true,\r\n            autoplayHoverPause: true,\r\n            dots: false,\r\n            autoWidth: true,\r\n            responsive: {\r\n                0: {\r\n                    margin: 10,\r\n                },\r\n                767: {\r\n                    margin: 20,\r\n                },\r\n            },\r\n        });\r\n        $('.owl-carousel.book-reviews').owlCarousel({\r\n            items: 2,\r\n            margin: 20,\r\n            loop: true,\r\n            lazyLoad: true,\r\n            stagePadding: 160,\r\n            autoplay: true,\r\n            autoplayHoverPause: true,\r\n            autoplayTimeout: 7000,\r\n            dots: false,\r\n            autoWidth: true,\r\n        });\r\n        $('.owl-carousel.book-reviews2').owlCarousel({\r\n            items: 2,\r\n            margin: 20,\r\n            loop: true,\r\n            center: true,\r\n            lazyLoad: true,\r\n            stagePadding: 160,\r\n            autoplay: true,\r\n            autoplayHoverPause: true,\r\n            dots: false,\r\n            autoWidth: true,\r\n        });\r\n    } catch {}\r\n\r\n    // Пагинация\r\n\r\n    try {\r\n        const content = document.querySelector('.content');\r\n        const itemsPerPage = 14; // set number of items per page\r\n        let currentPage = 0;\r\n        const items = Array.from(content.querySelectorAll('.card')).slice(0);\r\n\r\n        function showPage(page) {\r\n            const startIndex = page * itemsPerPage;\r\n            const endIndex = startIndex + itemsPerPage;\r\n            items.forEach((item, index) => {\r\n                item.classList.toggle(\r\n                    'hidden',\r\n                    index < startIndex || index >= endIndex\r\n                );\r\n            });\r\n            updateActiveButtonStates();\r\n        }\r\n\r\n        function createPageButtons() {\r\n            const totalPages = Math.ceil(items.length / itemsPerPage);\r\n            const paginationContainer = document.createElement('div');\r\n            const paginationDiv =\r\n                document.body.appendChild(paginationContainer);\r\n            paginationContainer.classList.add('bookspage__pagination');\r\n\r\n            // Add page buttons\r\n            for (let i = 0; i < totalPages; i++) {\r\n                const pageButton = document.createElement('button');\r\n                pageButton.textContent = i + 1;\r\n                pageButton.addEventListener('click', () => {\r\n                    currentPage = i;\r\n                    showPage(currentPage);\r\n                    updateActiveButtonStates();\r\n                });\r\n\r\n                content.parentNode.appendChild(paginationContainer);\r\n                paginationDiv.appendChild(pageButton);\r\n            }\r\n        }\r\n\r\n        function updateActiveButtonStates() {\r\n            const pageButtons = document.querySelectorAll(\r\n                '.bookspage__pagination button'\r\n            );\r\n            pageButtons.forEach((button, index) => {\r\n                if (index === currentPage) {\r\n                    button.classList.add('active');\r\n                } else {\r\n                    button.classList.remove('active');\r\n                }\r\n            });\r\n        }\r\n\r\n        createPageButtons(); // Call this function to create the page buttons initially\r\n        showPage(currentPage);\r\n    } catch (error) {}\r\n\r\n    // Modals\r\n\r\n    const modalBtn = document.querySelectorAll('[data-modal]');\r\n    const body = document.body;\r\n    const modalClose = document.querySelectorAll('.modal__close');\r\n    const modal = document.querySelectorAll('.modal');\r\n\r\n    modalBtn.forEach((item) => {\r\n        item.addEventListener('click', (event) => {\r\n            let target = event.currentTarget;\r\n            let modalId = target.getAttribute('data-modal');\r\n            let modal = document.getElementById(modalId);\r\n            let modalContent = modal.querySelector('.modal__content');\r\n            let comment = document.querySelector('#comment');\r\n\r\n            modalContent.addEventListener('click', (event) => {\r\n                event.stopPropagation();\r\n            });\r\n\r\n            if (comment) {\r\n                if (comment.value.length > 1) {\r\n                    modal.classList.add('show');\r\n                    body.classList.add('no-scroll');\r\n                }\r\n            } else {\r\n                modal.classList.add('show');\r\n                body.classList.add('no-scroll');\r\n            }\r\n            \r\n            setTimeout(() => {\r\n                modalContent.style.transform = 'none';\r\n                modalContent.style.opacity = '1';\r\n            }, 1);\r\n        });\r\n    });\r\n\r\n    // Закрываем модальное окно, убирая классы\r\n    function closeModal(modal) {\r\n        let modalContent = modal.querySelector('.modal__content');\r\n        modalContent.removeAttribute('style');\r\n        setTimeout(() => {\r\n            modal.classList.remove('show');\r\n            body.classList.remove('no-scroll');\r\n        }, 200);\r\n    }\r\n\r\n    // Добавляем слушатель на крестики в модальных окнах\r\n    modalClose.forEach((item) => {\r\n        item.addEventListener('click', (event) => {\r\n            let currentModal = event.currentTarget.closest('.modal');\r\n            closeModal(currentModal);\r\n        });\r\n    });\r\n\r\n    modal.forEach((item) => {\r\n        item.addEventListener('click', (event) => {\r\n            let currentModal = event.currentTarget;\r\n            closeModal(currentModal);\r\n        });\r\n    });\r\n\r\n    // Forms\r\n\r\n    const forms = () => {\r\n        const clearInputs = () => {\r\n            // Очищаем инпуты\r\n            const inputs = document.querySelectorAll('input');\r\n            const textarea = document.querySelector('textarea');\r\n            const checkbox = document.querySelectorAll(\r\n                'input[name=\"checkbox\"]'\r\n            );\r\n            inputs.forEach((item) => {\r\n                item.value = '';\r\n            });\r\n            checkbox.forEach((item) => {\r\n                item.checked = false;\r\n            });\r\n            textarea.value = '';\r\n        };\r\n\r\n        const form = document.querySelectorAll('form'); // Все формы\r\n\r\n        const postData = async (url, data) => {\r\n            // Отправка запроса\r\n            let res = await fetch(url, {\r\n                method: 'POST',\r\n                body: data,\r\n            });\r\n            if (!res.ok) {\r\n                throw new Error(res.statusText);\r\n            } else {\r\n                return await res.text();\r\n            }\r\n        };\r\n\r\n        form.forEach((item) => {\r\n            // Перебираем формы и навешиваем обработчик события\r\n            item.addEventListener('submit', (event) => {\r\n                event.preventDefault();\r\n\r\n                const formData = new FormData(item); // Собираем данные из формы\r\n\r\n                // Отправляем запрос на сервер с данными из formData\r\n                postData('smart.php', formData)\r\n                    .then(() => {\r\n                        console.log('Отправлено');\r\n                    })\r\n                    .catch((err) => {\r\n                        console.error(err);\r\n                    })\r\n                    .finally(() => {\r\n                        clearInputs();\r\n                    });\r\n            });\r\n        });\r\n    };\r\n\r\n    forms();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });