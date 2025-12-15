

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

document.addEventListener('DOMContentLoaded', () => {
    const weekDaysContainer = document.getElementById('week-days');
    WEEK_DAYS.forEach((weekDay) => {
        let day = document.createElement('div');
        day.textContent = weekDay;
        console.log(day);
        weekDaysContainer.appendChild(day);
    });
});