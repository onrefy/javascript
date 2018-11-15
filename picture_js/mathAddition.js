function getRandomFrom(start,end){
    return Math.random()*(end-start)+start;
}

function randomPrimitive(number){
    if (Math.random()>0.5) return number;
    else return -1*number;
}