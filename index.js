// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(_activity = "go to the office"){
    return `This Monday, I will ${_activity}.`
}
const mondayActivity = mondayWork("work from home");
console.log(mondayActivity)

function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
  const highlight = wrapAdjective(`*`)
console.log(highlight(`a hard worker`))