const fs = require("fs")
const bcrypt = require("bcryptjs")
const express = require("express")
const { json } = require("stream/consumers")
const app = express()
const studentDataFile = "./Model/studentModel.json"

app.use(express.json())
const readFileData = () => {
    try {
        const data = fs.readFileSync(studentDataFile, "utf-8")
        return data ? JSON.parse(data) : []
    } catch (error) {
        return []
    }
}

const writeFileData = (data) => {
    return fs.writeFileSync(studentDataFile, JSON.stringify(data))
}
exports.studentGet = (req, res) => {
    res.json(readFileData())
}

exports.createStudent = async (req, res) => {
    // const newStudent = req.body
    const { email, password, username } = req.body
    const data = readFileData()
    req.body.id = data.length ? data[data.length - 1].id + 1 : 1
    const hashedPassword = await bcrypt.hash(password, 10)
    const obj = ({ ...req.body, password: hashedPassword })
    data.push(obj)
    writeFileData(data)
    res.json({
        message: "data student created successfully",
        data: req.body
    })
}

