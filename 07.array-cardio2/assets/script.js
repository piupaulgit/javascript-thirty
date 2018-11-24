const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

//   find is anyone is adult
const anyAdult = people.find(people => ((new Date()).getFullYear()) - people.year >= 18)
console.log({anyAdult});

// if all adult
const everyOneAdult = people.every(people => ((new Date()).getFullYear()) - people.year >= 18)
console.log(everyOneAdult)

// find the comment id of 2039842
const comment = comments.find(comment => comment.id === 2039842)
console.log(comment)

// find index
const findIndex = comments.findIndex(comment => comment.id === 2039842)
console.log(findIndex)

// slice index array item
const newComments = [
    ...comments.slice(0, findIndex),
    ...comments.slice(findIndex+1)
]

console.log(comments)
console.log(newComments)


