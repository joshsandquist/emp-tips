const {Employee, Report } = require('../models')

// Tip rate function to calculate hourly rate for the week
// Will take in the total tips for a week, and an array of values of employee hours
const calculateHourlyRate = (totalTips, hoursWorkedArray) => {
// Calculating the total hours worked by employees by using the reduce method on the array
  const totalHoursWorked = hoursWorkedArray.reduce((acc, curr) => acc + curr, 0);
  // Returning an hourly rate as total money / total hours
  return totalTips / totalHoursWorked;
};


const resolvers = {
// Query methods for all employees and reports, as well as individual employees and reports by id
  Query: {
    getEmployee: async (_, { id }) => {
      return await Employee.findById(id);
    },
    getEmployees: async () => {
      return await Employee.find({});
    },
    //Populating reports with employee data
    getReport: async (_, { id }) => {
      return await Report.findById(id).populate('employeeTips.employee');
    },
    getReports: async () => {
      return await Report.find({}).populate('employeeTips.employee');
    },
  },

  Mutation: {
    // Mutation to add employee
    // takes in EmployeeInput which is just a first and last name
    addEmployee: async (_, { input }) => {
      const newEmployee = new Employee(input);
      return await newEmployee.save();
    },
    // deleting employee from db by id
    deleteEmployee: async (_, { id }) => {
      const employeeToDelete = await Employee.findById(id);
      if (employeeToDelete) {
        await Employee.deleteOne({ _id: id });
      }
      return employeeToDelete;
    },

    // mutation to update employee's hours worked
    // takes in updateHours input which is an employee Id and hour amount
    updateEmployeeHours: async (_, { input }) => {
      const { id, hoursWorked } = input;
      // using mongoose method to find employee by id and update hours worked value
      return await Employee.findByIdAndUpdate(id, { hoursWorked }, { new: true });
    },
    // mutation to create a report for the week and generate tip calculation
    createReport: async (_, { input }) => {
        // only needs totalTips for the week as an input as employees will have their weekly hours attatched to them
        const { totalTips } = input;
        // Retrieve all employees from the database to get hours worked
        const employees = await Employee.find({});
        // Iterating through the employees and added each hoursWorked value to a new array
        const hoursWorkedArray = employees.map((employee) => employee.hoursWorked);
        // Calling rate calculator function with this new array and totalTips to recieve an hourly rate
        const hourlyRate = calculateHourlyRate(totalTips, hoursWorkedArray);
        // mapping over the employees to gather their hoursWorked, and then multiplying that by hourly rate
        const employeeTips = employees.map((employee) => ({
          employee,
          tipAmount: hourlyRate * employee.hoursWorked,
        }));
    
        // Use current date for tipDate
        const tipDate = new Date().toISOString();
        
        // Creating a new report with all of the data we want to generate
        const newReport = new Report({
          totalTips,
          hourlyRate,
          tipDate,
          employeeTips,
        });
    
        return await newReport.save();
      },
  },
};

module.exports = resolvers;