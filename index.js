const express = require("express")
const app = express()
const port = 4000
const router = express.Router()
const bcrypt = require("bcryptjs")

app.use(express.json())
const studentRouter = require("./Router/studentRouter")
const staffRouter = require("./Router/staffRouter")

router.get("/", (req, res) => {
    res.send("done")
})

app.get("/student", studentRouter)
app.post("/student", studentRouter)

app.get("/staff", staffRouter)
app.post("/staff", staffRouter)

app.listen(port, () => {
    console.log(`server is running on :http://locahost:${port}`);

})