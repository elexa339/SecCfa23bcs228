const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/labDB')
.then(() => {
  console.log("Connected to MongoDB");

  const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String
  });

  const Student = mongoose.model('Student', studentSchema);

  
  const students = [
    { name: 'Alice', age: 21, grade: 'B' },
    { name: 'Bob', age: 22, grade: 'A' },
    { name: 'Charlie', age: 23, grade: 'C' }
  ];

  return Student.insertMany(students)
    .then(() => {
      console.log('Students inserted!');

      
      return Student.find();
    })
    .then(data => {
      console.log('All Students:', data);

    
      return Student.updateOne({ name: 'Alice' }, { $set: { grade: 'A+' } });
    })
    .then(() => {
      console.log('Student updated!');

      
      return Student.deleteOne({ name: 'Bob' });
    })
    .then(() => {
      console.log('Student deleted!');
      mongoose.connection.close();
    });

})
.catch(err => console.log('Error:', err));