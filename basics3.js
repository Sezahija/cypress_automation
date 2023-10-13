var marks = Array (6)
var marks = new Array(20,40,35,12,37,100)

var marks = [20,40,35,12,37,100]
submarks = marks.slice(2,5)
console.log(submarks)

console.log(marks[2])
marks[3] = 14
console.log(marks)
console.log(marks.length)
marks.push(64)
console.log(marks)
marks.pop()
marks.unshift(12)
console.log(marks)
console.log(marks.indexOf(100))
console.log(marks.includes(120))
var sum = 0
for(let i = 0; i<marks.length; i++)
{
    //console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)

let total = marks.reduce((sum,mark)=>sum + mark, 0)
console.log(total)

var scores = [12,13,14,16]
// crete new array with only even numbers show
var evenscores = []
for(let i =0; i<scores.length; i++)
{
    if(scores [i] %2 ==0)
    {
        evenscores.push(scores [i])
    }
}
console.log(evenscores)
let newFilterEveneScores = scores.filter(score=>score%2 ==0)
console.log(newFilterEveneScores)