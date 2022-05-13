const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

//importing routes
const usersRoutes = require('./routes/user.routes');
const areaRoutes = require('./routes/area.routes');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/sistemUsers', usersRoutes);
app.use('/api/sistemUsers', areaRoutes);

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});