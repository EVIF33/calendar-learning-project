

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
    currentMonth = month.getMonth();
    currentDay = day.getDate();

    function renderCalendar(year, month, day) {

        const daysInMonth = getFullDaysInMonth(year, month);
        console.log(daysInMonth);

        const firstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7;
        console.log(firstDayOfWeek);

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
            day.className = `day`;
            day.setAttribute('data-day-number', `${i}`);
            daysContainer.appendChild(day);
        }

        for(let i = 0; i < 42; i++) {
            if(i >= firstDayOfWeek && i < daysInMonth + firstDayOfWeek) {
                let day = document.querySelector(`[data-day-number="${i}"]`);
                day.textContent = i - firstDayOfWeek + 1;
            }
        }

    }
    
    renderCalendar(currentYear, 3, currentDay);
});