const { gql } = require('apollo-server-express')

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
  }
  
  type Report {
    id: ID!
    totalTips: Float!
    hourlyRate: Float!
    weekStartDate: String!
    employeeTips: [EmployeeTip]!
  }
  
  input EmployeeInput {
    firstName: String!
    lastName: String!
  }

  input UpdateHoursInput {
    id: ID!
    hoursWorked: Float!
  }
  
  
  
  input ReportInput {
    totalTips: Float!
    weekStartDate: String!
    employees: [EmployeeInput]!
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