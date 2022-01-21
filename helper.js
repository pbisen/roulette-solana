
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // return 4;    //used for testing
}

function totalAmtToBePaid(investment){
    //If we want to keep 5% as the participation fee, then the following will be the totalAmtToBePaid 
    //return investment + 0.05*investment;
    return investment;
}

function getReturnAmount(investment, stakeFactor){
    return investment*stakeFactor;
}
  
module.exports={randomNumber, totalAmtToBePaid, getReturnAmount};