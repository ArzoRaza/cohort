// Get html Elements 
const moodButtons = document.querySelectorAll('.mood-btn');
const moodHistory = document.getElementById('mood-history');
const calendar = document.getElementById('calendar');

// Loading from html 4 existing moods
document.addEventListener('DOMContentLoaded', loadMoods);

// chose one moood for today
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedMood = button.getAttribute('data-mood');
        saveMood(selectedMood);
        loadMoods();
    });
});

// each days mood got saved to LocalStorage
function saveMood(mood) {
    const today = new Date().toISOString().split('T')[0]; // Get today's date (YYYY-MM-DD)
    let moods = JSON.parse(localStorage.getItem('moods')) || {};
    moods[today] = mood;
    localStorage.setItem('moods', JSON.stringify(moods));
}

// Load mood history and calendar
function loadMoods() {
    const moods = JSON.parse(localStorage.getItem('moods')) || {};

    // Update mood history
    moodHistory.innerHTML = "";
    Object.keys(moods).forEach(date => {
        const listItem = document.createElement('li');
        listItem.textContent = `${date}: ${moods[date]}`;
        moodHistory.appendChild(listItem);
    });

    // Update Calendar View
    loadCalendar(moods);
}

// here Calendar View code start
function loadCalendar(moods) {
    calendar.innerHTML = "";
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // only empty boxes befor 1st date for better calender visual😊
    for (let i = 0; i < firstDay; i++) {
        let emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day');
        calendar.appendChild(emptyCell);
    }

    // Here is fill days with moods
    for (let day = 1; day <= daysInMonth; day++) {
        let dateKey = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        let cell = document.createElement('div');
        cell.classList.add('calendar-day');
        cell.textContent = moods[dateKey] || day;
        calendar.appendChild(cell);
    }
}
