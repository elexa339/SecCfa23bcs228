const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/labDB')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Connection Error:", err));

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String
});

const Student = mongoose.model('Student', studentSchema);

// 1. Grade A students
Student.find({ grade: 'A' })
  .then(students => console.log('Grade A Students:', students))
  .catch(err => console.log('Error:', err));

// 2. Sort by age descending
Student.find()
  .sort({ age: -1 })
  .then(students => console.log('Sorted by Age (Desc):', students))
  .catch(err => console.log('Error:', err));

// 3. Limit to 3 students
Student.find()
  .limit(3)
  .then(students => console.log('Limited to 3 students:', students))
  .catch(err => console.log('Error:', err));