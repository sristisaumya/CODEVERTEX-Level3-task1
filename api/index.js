const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongooes = require("mongoose")

const authRoute = require("./routes/auth.js")
const authUser = require("./routes/user.js")
const authPost = require("./routes/posts.js")
const authCat = require("./routes/categories.js")

const multer = require("multer")
const path = require("path")
dotenv.config()
app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "/images")))


mongooes
.connect(process.env.CONNECTION_URL,{
    // useNewUrlParser: true,
    // useUnifiedTopology:true,
})
.then(console.log("Conntected to MongoDB"))
 .catch((err) => console.log(err))
 const storage = multer.diskStorage({
    destination: (req, file, callb) => {
      callb(null, "images")
    },
    filename: (req, file, callb) => {
      //callb(null, "file.png")
      callb(null, req.body.name)
    },
  })
  const upload = multer({ storage: storage })
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
  })
  



app.use("/auth", authRoute)
app.use("/users", authUser)
app.use("/posts", authPost)
app.use("/category", authCat)


app.listen("5000",()=>{
    console.log("backend running")
})