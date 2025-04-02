const express = require("express")
const app = express()

const staffRouter = express.Router()

const staffData = require("../Controllers/staffController")
staffRouter.get("/staff", staffData.staffGet)
staffRouter.post("/staff", staffData.createStaff)

module.exports = staffRouter