const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const EmployeeTipSchema = new mongoose.Schema({
  employee: {
    type: ObjectId,
    ref: 'Employee',
    required: true,
  },
  tipAmount: {
    type: Number,
    required: true,
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
});

const ReportSchema = new mongoose.Schema({
  totalTips: {
    type: Number,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  tipDate: {
    type: Date,
    required: true,
  },
  employeeTips: [EmployeeTipSchema],
});

module.exports = mongoose.model('Report', ReportSchema);
