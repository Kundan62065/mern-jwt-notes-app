 import express from "express"
  import 'dotenv/config' 
/*   const dotenv = require(dotenv);
  dotenv.config();*/
import connectDB from "./database/db.js"
 import userRoute from "./routes/userRoute.js"
 import authRoute from "./routes/authRoute.js"
//---------------------------------------------------------connet forntend with backend by cors policy----------------------
 import cors from 'cors'
import "./config/passport.js"

 const app = express()

app.use(express.json())
//connect frontend with backend--------------
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
//----------------connected backend with frontend---------------

 app.use('/auth',authRoute)

app.use('/user', userRoute)

// Test
app.get('/', (req, res) => res.send('hey from server'));
app.get('/user',(req,res)=>res.send('hey from user'));
// // http://localhost:8000/user/register

const port = process.env.PORT ||3000 ;
app.listen(port, () => {
    connectDB();
    console.log(`server at http://localhost:${port}`);
}
);
