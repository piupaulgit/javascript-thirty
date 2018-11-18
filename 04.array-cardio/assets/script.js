const pararChele = [
    {first: 'lalu', last: 'mal', year: 1990},
    {first: 'kalu', last: 'mal', year: 2000},
    {first: 'volu', last: 'mal', year: 2010},
    {first: 'nimai', last: 'mal', year: 1993},
    {first: 'nitai', last: 'mal', year: 1992}
];

const persons = ['kunal, paul', 'nantu, saha', 'deep, karmakar', 'kishore, patra'];

let currentYear = new Date().getFullYear();

// return new array of age aobve 18
let hubbas = pararChele.filter(hubba => {
    let getAge = currentYear - hubba.year;
    if(getAge >= 18){
        return true;
    }
})
console.table(hubbas);

// return new array with fullname
let fullNameArray = pararChele.map(chhele => {
    return `${chhele.first} ${chhele.last}`
})
console.table(fullNameArray);

// return new array by sort with year
let sortByAge = pararChele.sort((a,b) => {
    return a.year - b.year;
})
console.table(sortByAge);

// add all members live age by Reduce
const totalAge = pararChele.reduce((total, hubba) => {
    return total + ( currentYear -  hubba.year);
},0)
console.log(totalAge);

//who lived longest
const oldest = pararChele.sort((a,b) => {
    currentChhele = currentYear - a.year;
    nextChhele = currentYear - b.year; 
    return currentChhele > nextChhele ? -1 : 1;
})

console.table(oldest);

// sort people alphabtically by last name

const alpha = persons.sort((lastOne, nextOne) =>{
    const [alast, afirst] =  lastOne.split(', ')
    const [blast, bfirst] =  nextOne.split(', ')
    return alast > blast ? 1 : -1;
})

console.log(alpha);

// sum up instances
const data = ['car', 'car','walk', 'cycle', 'truck','truck','truck', 'rikswa', 'bus', 'bus'];

const dataStructure = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 0
    }
    obj[item]++;
    return obj;
},{})

console.table(dataStructure)