// Code your solution in this file!
function returnFirstTwoDrivers(driversArray){
    let firstTwoDrivers = [driversArray[0], driversArray[1]]
    return firstTwoDrivers
}

function returnLastTwoDrivers(drivers){
    let lastTwoDrivers = [drivers[2], drivers[3]]
    return lastTwoDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return (fare) => 5 * fare
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(array, func){
    if (func == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
    }
    else{
        return returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
    }
}