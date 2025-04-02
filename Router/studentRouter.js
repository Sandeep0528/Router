const express = require("express")
// const { studentData } = require("../Data/studentData")
const app = express()
const studentRouter = express.Router()
// const studentData = require("./Controllers/studentController")
const studentData = require("../Controllers/studentController")

studentRouter.get("/student", studentData.studentGet)
studentRouter.post("/student", studentData.createStudent)

module.exports = studentRouter

