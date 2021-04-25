require('dotenv').config()
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./user");
const jwt = require("jsonwebtoken")


const url = 'mongodb://localhost/mydb2'
mongoose.connect(url);
const con = mongoose.connection;
con.on('open', () => {
    console.log("DB CONNECTED");
})

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json())

let users = []

app.get('/users', authenticateToken, (req, res) => {
  res.json(req.emailid)
})

app.post('/users/register', async (req, res) => {
  if(req.body.emailid == null || req.body.username == null || req.body.password == null){
    res.json({MSG : "FILL IN ALL VALUES"})
  }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const values = await User.find({ emailid: req.body.emailid }).sort({ _id: -1 }).limit(1)
    console.log(values)
    console.log(req.body)
    if (values.length != 0) {
        res.status(404).json({ MSG: "ALREADY PRESENT" })
    }else{
    try {
    const UserSchema = new User({
      emailid: req.body.emailid,
      username: req.body.emailid,
      password: hashedPassword,
    })
    
      const result = await UserSchema.save()
      res.json(result)
  } catch (err) {
      res.send("ERROR" + err)
  }
  }
   
})

app.post('/users/login', async (req, res) => {
  try{
    let output;
    User.findOne({ emailid: req.body.emailid }, async (err, doc) => {
      if (doc == null){
        res.send({MSG : "NO USERNAME"})
      }
      console.log(doc)
      if(await bcrypt.compare(req.body.password, doc.password)) {
        const emailid = req.body.emailid
        const accessToken = jwt.sign(emailid, process.env.ACCESS_TOKEN_SECRET)
        res.send({acessToken : accessToken})
      } else {
        res.send('Not Allowed')

        }
    });
     
  }catch (e){
    res.send(e)
  }
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, emailid) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.emailid = emailid
    next()
  })
}
app.listen(8000)