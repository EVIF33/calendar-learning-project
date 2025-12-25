

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 
                'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

document.addEventListener('DOMContentLoaded', () => {
    let year = new Date;
    let month = new Date;
    let day = new Date;
    year = year.getFullYear();
    month = month.getMonth();
    day = day.getDate();
    console.log(MONTHS[month], year, day);

    function renderCalendar(year, month, day) {
        const weekDaysContainer = document.getElementById('week-days');
        WEEK_DAYS.forEach((weekDay) => {
            let day = document.createElement('div');
            day.textContent = weekDay;
            console.log(day);
            weekDaysContainer.appendChild(day);
        });
    }
    
    renderCalendar(year, month, day);
});