const swaggerAutogen = require('swagger-autogen').default;

const doc = {
    info: {
        title: 'Felipe Belisario Website',
        description: 'API for my personal website',
    },
    host: `localhost:${process.env.PORT || undefined}`,
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.routes.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);
