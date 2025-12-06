// Loops

// For Loop


let student = ["Gideon","Godfred","Mr","Mrs","Another"]

console.log(student.length)
// console.log(student[2])
// console.log(student[3])
// console.log(student[0])
// console.log(student[1])
if (student.length) {

    for(let i =0;i < student.length; i = i + 1 ){

 
    console.log(student[i]);
   

}

}else{
    console.log("No Record Found")
}



//While Loop

let i = 0;
while(i < student.length){

    console.log(student[i]);

    i = i +1;
}



// Do...While Loop
var input;
do{

     input= prompt("Hey!! Whats your Name?")

     alert("Yeah, Your Name is  " + input);
     

}while(input != ('x'));

