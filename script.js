// script.js
document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date('2024-11-15T18:24:59'); // Customize this date
    const startDate = new Date(); // Start from now or customize
    const progressBar = document.getElementById('progress-bar');
    const timeLeftDisplay = document.getElementById('time-left');

    function updateCountdown() {
        const now = new Date();
        const totalTime = endDate - now;
        const totalDuration = endDate - startDate;

        if (totalTime <= 0) {
            progressBar.style.width = '0%';
            timeLeftDisplay.textContent = 'Time is up!';
            clearInterval(timerInterval);
            return;
        }

        const percentLeft = (totalTime / totalDuration) * 100;
        progressBar.style.width = `${percentLeft}%`;

        const daysLeft = Math.floor(totalTime / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((totalTime % (1000 * 60)) / 1000);

        timeLeftDisplay.textContent = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    }

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
});
