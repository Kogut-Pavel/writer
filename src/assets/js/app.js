window.addEventListener('DOMContentLoaded', () => {

    // Находим заголовки карточек и обрезаем если слишком длинное название
    const cardTitles = document.querySelectorAll('.card__title');
    const cardGenres = document.querySelectorAll('.card__genres');

    function cutLength(strings, maxLength) {
        strings.forEach(item => {
            if (item.textContent.length > maxLength) {
                let titleValue = item.textContent.slice(0, maxLength - 2);
                item.textContent = titleValue + '...';
            }
        });
    }

    cutLength(cardTitles, 24);
    cutLength(cardGenres, 37);
    
    }
)