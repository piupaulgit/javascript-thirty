const panel = document.querySelectorAll('.panel');

function openPanel(){
    this.classList.toggle('open');
}
panel.forEach(eachPanel => eachPanel.addEventListener('click', openPanel));