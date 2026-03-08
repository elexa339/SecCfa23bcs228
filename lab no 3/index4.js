const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/labDB')
.then(() => console.log("Connected"));

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  grade: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

const newStudent = new Student({
  name: 'Ali',
  age: 20,
  grade: 'A'
});

newStudent.save()
.then(() => console.log('Student saved!'))
.catch(err => console.log('Validation Error:', err.message));
