require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;
const blogRoutes = require('./routes');
const mongoose = require('mongoose');
const uri = `mongodb://localhost:27017/mini-blog`;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(uri, function(err) {
    if(err){
        console.log(err)
    }

    console.log(`${uri} successfully conected`)
});
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/api', blogRoutes);
app.listen(port, function () {
    console.log(`listening on port ${port}`);
    
})