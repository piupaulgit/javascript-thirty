const wrapper = document.querySelector('.wrapper')
const shadow = document.querySelector('h1')
const Move = 100;

// function
function moveShadow(e){
    const width = wrapper.offsetWidth;
    const height = wrapper.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;

    if(this !==e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xMove = Math.round((x / width * Move) - (Move / 5));
    const yMove = Math.round((y / height * Move) - (Move / 5));

    shadow.style.textShadow = `
    ${xMove}px ${yMove}px 0 rgba(255,0,255,0.7),
    ${xMove * -1}px ${yMove}px 0 rgba(0,255,255,0.7),
    ${yMove}px ${xMove * -1}px 0 rgba(0,255,0,0.7),
    ${yMove * -1}px ${xMove}px 0 rgba(0,0,255,0.7)
  `;
}

wrapper.addEventListener('mousemove', moveShadow)