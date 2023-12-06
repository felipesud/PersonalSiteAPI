import dotenv from 'dotenv';
dotenv.config();

import constants from './utils/constants';
const { DEFAULT_PORT } = constants;

import app from './app';

const PORT: number = parseInt(`${process.env.PORT || DEFAULT_PORT}`);

app.listen(PORT, () => console.log(`Server is running `));
