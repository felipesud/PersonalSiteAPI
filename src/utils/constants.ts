const constants = {
  DEFAULT_PORT: process.env.PORT ? parseInt(process.env.PORT) : undefined,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabaseremote',
};

export default constants;
