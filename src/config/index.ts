import {config as dotenv} from 'dotenv';
import {join} from 'path';

dotenv();

export default {
    dev: process.env.NODE_ENV !== 'production',
    port: Number(process.env.PORT),
    host: String(process.env.HOST),
    cors: String(process.env.CORS),
    publicPath: String(process.env.PUBLIC_ROUTE_PATH),
    publicRoute: join(__dirname, '..', String(process.env.PUBLIC_ROUTE)),
    jwtPass: String(process.env.JWT_PASS),
    dbUser: String(process.env.DB_USER),
    dbPassword: process.env.DB_PASSWORD,
    dbPort: Number(process.env.DB_PORT),
    dbName: String(process.env.DB_NAME),
};
