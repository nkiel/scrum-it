import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import indexRouter from './indexController';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const api = express.Router();

api.use('/', indexRouter);

app.use('/api', api);

// eslint-disable-next-line import/prefer-default-export
export const handler = app;
