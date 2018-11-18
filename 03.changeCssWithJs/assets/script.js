const inputs = document.querySelectorAll('.inputs');

function handler(){
   const suffix = this.dataset.sizing || ''; 
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input=> input.addEventListener('change', handler))
inputs.forEach(input=> input.addEventListener('mousemove', handler))