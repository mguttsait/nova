// Random number animation for stats
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize stats animation
document.querySelectorAll('.stat-number').forEach(stat => {
    const finalValue = parseInt(stat.textContent.replace(/,/g, ''));
    animateValue(stat, 0, finalValue, 2000);
});