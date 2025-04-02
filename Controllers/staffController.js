const express = require("express")
const bcrypt = require("bcryptjs")
const fs = require("fs")

const app = express()

app.use(express.json())
const DataFile = ("./Model/staffModel.json")

const readFileData = () => {
    try {
        const data = fs.readFileSync(DataFile, "utf-8")
        return data ? JSON.parse(data) : []
    } catch (error) {
        return []
    }
}

const writeFileData = (data) => {
    return fs.writeFileSync(DataFile, JSON.stringify(data))
}

exports.staffGet = (req, res) => {
    res.json(readFileData())
}

exports.createStaff = async (req, res) => {
    const { email, password, username } = req.body
    const data = readFileData()
    req.body.id = data.length ? data[data.length - 1].id + 1 : 1
    const hashedPassword = await bcrypt.hash(password, 10)
    data.push({ ...req.body, password: hashedPassword })
    writeFileData(data)
    res.json({
        message: "staff data created successfully",
        data: req.body
    })
}