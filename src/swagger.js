var swaggerAutogen = require('swagger-autogen').default;
var doc = {
    info: {
        title: 'Felipe Belisario Website',
        description: 'API for my personal website',
    },
    host: "localhost:".concat(process.env.PORT || undefined),
    schemes: ['https']
};
var outputFile = './swagger.json';
var endpointsFiles = ['./routes/index.routes.ts'];
swaggerAutogen(outputFile, endpointsFiles, doc);
