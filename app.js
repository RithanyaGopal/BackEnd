/*const express  = require('express');
const app = express();
let data=[];
app.use(express.json());

app.post('/insert',insertdata);
app.get('/getAllStudents',(req,res)=>{
    console.log("[INFO] Fetching all students data");
    res.send(data);
});
app.get('/getStudentByRollNo',getStudentByRollNo);
app.delete('/deleteStudent',deleteStudent);
function getStudentByRollNo(req,res){
    console.log("[INFO] Entered into get student by roll number");
    const rollNo=req.body.rollNo;
    const student=data.find(student=>student.rollNo===rollNo);
    if(student){
        console.log("[SUCCESS] Student found");
        res.status(200).send(student);
    }else{
        console.log("[ERROR] Student not found");
        res.status(404).send('Student not found');
    }
}
function deleteStudent(req,res){
    let rollNo=req.body.rollNo;
    let index=data.findIndex(student=>student.rollNo===rollNo);
    if(index!==-1){
        data.splice(index,1);
        console.log("[SUCCESS] Student deleted successfully");
        res.send('Student deleted');
}
    else{
        console.log("[ERROR] Student not found");
    }
}

function insertdata(req,res){
    console.log("[INFO] Entered into insert data");
    let isDuplicate = checkifDataisPresent(req.body.rollNo);
    if(!isDuplicate){
        console.log("[INFO] No Duplicate Found");
        data.push(req.body);
        console.log("[SUCCESS] Data inserted successfully");
        res.send('Data inserted');
    }
    else {
        console.log("[INFO] Duplicate Found");
        res.send('Record already exists');
    }
}
function checkifDataisPresent(rollNo) {
    for(let i of data) {
        if(i.rollNo ===rollNo){
            return true;
        }
    }
    return false;
}

app.listen(3000);*/

const express = require('express');
const controller = require('./controller')
const app = express();
app.use(express.json());

app.post('/insert', controller.insertdata);
app.get('/getAllStudents', controller.getAllStudents);
app.get('/getStudentByRollNo', controller.getStudentByRollNo);
app.delete('/deleteStudent', controller.deleteStudent);
app.put('/editStudent', controller.editStudent);

app.get('/paramscheck/:id', (req, res)=>{
    console.log(req.params.id);
    res.send("Params Checked");
})

app.get('/querycheck', (req, res) => {
    console.log(req.query);
    res.send("Query Params Checked");
})
//http://localhost:3000/querycheck?name=chandru&dept=ece

app.listen(3000);