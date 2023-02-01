// code your solution here

function saturdayFun(activity){
    if (activity === undefined) {
    return (`This Saturday, I want to roller-skate!`)
    }
    if (activity !== undefined) {
    return (`This Saturday, I want to ${activity}!`)
    }
} 

function mondayWork(job){
    if (job === undefined) {
    return (`This Monday, I will go to the office.`)
    }
    if (job !== undefined) {
    return (`This Monday, I will ${job}.`)
    }
}

function wrapAdjective (symbol = "*") {
    return function (adjective = "special"){
        return (`You are ${symbol}${adjective}${symbol}!`)
        }
    }



