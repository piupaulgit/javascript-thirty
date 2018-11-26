const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
    return bandName.replace(/^(a | an | the )/, '').trim();
}

const sortedBandName = bands.sort((a,b) => strip(a) > strip(b) ? 1:-1)

console.log(sortedBandName);

const list = document.getElementById('bands')

const html = sortedBandName.map(band => {
    return `
        <li>${band}</li>
    `
}).join('')

list.innerHTML = html;
