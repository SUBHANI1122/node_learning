const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const accommodationRoutes = require('./routes/accommodationRoutes');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(process.env.MONGO_URI).then(()=> console.log("database connected !!"));
mongoose.connection.on("error", err =>{
    console.log(`DB Connection error : ${err.message}`);
});

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/accommodations', accommodationRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
