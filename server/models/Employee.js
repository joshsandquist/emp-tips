const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  hoursWorked: {
    type: Number,
    default: 0,
  },
  position: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true
  },

});

module.exports = mongoose.model('Employee', EmployeeSchema);