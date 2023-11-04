window.addEventListener('DOMContentLoaded', () => {
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
1

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
    
    
});
