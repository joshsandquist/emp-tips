const { gql } = require('apollo-server-express')


//defining gql models, inputs, queries and mutations
const typeDefs = gql
`type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    hoursWorked: Float
  }
  
  type EmployeeTip {
    employee: Employee!
    tipAmount: Float!
    hoursWorked: Float
  }
  
  type Report {
    id: ID!
    totalTips: Float!
    hourlyRate: Float!
    tipDate: String!
    employeeTips: [EmployeeTip]!
  }
  
  input EmployeeInput {
    firstName: String!
    lastName: String!
    hoursWorked: Float
  }

  input UpdateHoursInput {
    id: ID!
    hoursWorked: Float!
  }
  
  input ReportInput {
    totalTips: Float!
  }
  
  type Query {
    getEmployee(id: ID!): Employee
    getEmployees: [Employee]!
    getReport(id: ID!): Report
    getReports: [Report]!
  }
  
  type Mutation {
    addEmployee(input: EmployeeInput!): Employee
    deleteEmployee(id: ID!): Employee
    updateEmployeeHours(input: UpdateHoursInput!): Employee
    createReport(input: ReportInput!): Report
  }`

  module.exports = typeDefs