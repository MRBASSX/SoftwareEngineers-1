
// String

let Number = 10;

let IsEven = Number%2 === 0

console.log(IsEven)


IsEven ? console.log("Yeah,Is Even") : console.log("Nope, Is Odd")



let time = 30000;
let Motion_sensor = false;


let TurnOfTheLight = !Motion_sensor &&  time == 30000

TurnOfTheLight  ? console.log("Light Out") : console.log("Light On")


let count = 0;let InSensor = false;
let OutSensor = false;

let CountUp = OutSensor  && InSensor ;
let CountDown = InSensor  && OutSensor; 


CountUp ? count++ : '';
CountDown ? count-- : '';


count <= 0 ? console.log("Light Out") : console.log("Light On");








