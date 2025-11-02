const sqlite3 = require("sqlite3").verbose();

// Open a database connection
let db = new sqlite3.Database('./Report.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to database');
    }
});

// Create Table
let table = `CREATE TABLE student_report(id INTEGER PRIMARY KEY, roll_no,score,remark)`

// Insert Data
let inserts = `INSERT INTO student_report(roll_no,score,remark)   VALUES(?,?,?) `
db.run(inserts, [101,85,"Good"], (err) => {
    if (err) { return console.error(err.message) } else {
        console.log('Data Inserted Sucessfully');
    }
})

// Update Data
let updates = `UPDATE student_report SET score = ? WHERE id = ? `
db.run(update,[90,1],(err)=>{
    if (err) {
        
        return console.error(err.message)
    }

    return console.log("Updated Data Sucessfully")
});

// Delete Data
let deleteds = `DELETE FROM  student_report  WHERE id = ? `
db.run(deleted,[2],(err)=>{
    if (err) {
        
        return console.error(err.message)
    }

    return console.log("Deleted Data Sucessfully")
})

// Select Data
let selects = `SELECT * FROM student_report `
db.all(select,(err,row)=>{
    if (err) {
       return console.error(err.message)
    }
    return console.log(row);
})


// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Could not close the database', err);
    } else {
        console.log('Database connection closed');
    }
});

const sqlite3s = require("sqlite3").verbose();

// Open a database connection
let dbs = new sqlite3.Database('./Report.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to database');
    }
});

// Create Table



// let table = `CREATE TABLE student_report(id INTEGER PRIMARY KEY, roll_no,score,remark)`
// db.run(table, (err)=>{  if(err){console.error(err.message)} })

let insert = `INSERT INTO student_report(roll_no,score,remark)   VALUES(?,?,?) `


db.run(insert, [200,70,"very Good"], (err) => {
    if (err) { return console.error(err.message) } else {
        console.log('Data Inserted Sucessfully');
    }
})

let update = `UPDATE student_report SET score = ? WHERE id = ? `
db.run(update,[78,3],(err)=>{
    if (err) {
        
        return console.error(err.message)
    }

    return console.log("Updated Data Sucessfully")
});

let deleted = `DELETE FROM  student_report  WHERE id = ? `
db.run(deleted,[1],(err)=>{
    if (err) {
        
        return console.error(err.message)
    }

    return console.log("Updated Data Sucessfully")
})

let select = `SELECT * FROM student_report `
db.all(select,(err,row)=>{
    if (err) {
       return console.error(err.message)
    }
    return console.log(row);
})
