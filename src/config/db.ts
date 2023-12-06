import mongoose, { ConnectOptions } from 'mongoose';
import constants from '../utils/constants';
import fs from 'fs';

const { MONGODB_URI } = constants;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  tls: true,
  tlsCAFile: fs.readFileSync('/path/to/ca.pem').toString(),
  tlsCertificateKeyFile: fs.readFileSync('/path/to/client.pem').toString(),
} as ConnectOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

export default db;
