const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;

// Code your solution here
function Reducer (accumulator,currentValue) {
    batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, totalBatteries);
}

totalBatteries  = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, totalBatteries);

console.log(totalBatteries);