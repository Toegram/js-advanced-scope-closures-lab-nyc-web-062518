function produceDrivingRange(blockRange){
  return function(blockOne, blockTwo){
    const start = parseInt(blockOne);
    const end = parseInt(blockTwo);
    const distanceTravelled = Math.abs(start - end)
    const difference = (blockRange - distanceTravelled)

    if (difference > 0) {
      return `within range by ${difference}`
    } else if (difference < 0)
      return `${Math.abs(difference)} blocks out of range`
  }
}

function produceTipCalculator(tipPercent){
  return function(fare){
    return fare * tipPercent
  }
}
