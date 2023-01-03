const toggle = document.getElementById('toggledark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = '#1B2430';
        body.style.transition = '2s';
    } else {
        body.style.background = '#1B2430';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})