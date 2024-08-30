const express = require('express');
const mongoose = require('./src/config/database');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { getauthenticationToken } = require('./src/middleware/authMiddleware'); 

const trainLocationRoute = require('./src/routes/trainLocationRoutes');
const userRoute = require('./src/routes/userRoutes');


const app = express();
const PORT = process.env.PORT || 3001;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Weather API',
            description: 'API for managing district wise weather data ',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3001/api',
            },
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                BearerAuth: [], // Apply to all routes by default
            },
        ],
    },
    apis: ['./src/routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose.connection.on('connected', function () {
    console.log('Connected to MongoDB successfully');
});

mongoose.connection.on('error', function (err) {
    console.errpr('Mongo db connection error:', err);
});

app.use('/api/user', userRoute);
app.use('/api/train-location', trainLocationRoute);


app.use(getauthenticationToken);





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});






