

const WEEK_DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 
                'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function getFullDaysInMonth(year, month){
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
}

document.addEventListener('DOMContentLoaded', () => {
    let year = new Date;
    let month = new Date;
    let day = new Date;
    currentYear = year.getFullYear();
    console.log(currentYear);
    currentMonth = month.getMonth();
    console.log(currentMonth);
    currentDay = day.getDate();
    console.log(currentDay);

    function renderCalendar(year, month, day) {

        const daysInMonth = getFullDaysInMonth(year, month);

        console.log(daysInMonth);

        const firstDayInMonth = new Date(year, month, 1 - ((new Date(year, month, 1).getDay() + 6) % 7));

        console.log(firstDayInMonth.getDate());

        const weekDaysContainer = document.getElementById('week-days');
        WEEK_DAYS.forEach((weekDay) => {
            let day = document.createElement('div');
            day.textContent = weekDay;
            weekDaysContainer.appendChild(day);
        });

        const daysContainer = document.getElementById('days-grid');
        console.log(daysContainer);
        for(let i = 0; i < 42; i++) {
            let day = document.createElement('div');
            day.textContent = 0;
            daysContainer.appendChild(day);
        }

    }
    
    renderCalendar(currentYear, currentMonth, currentDay);
});