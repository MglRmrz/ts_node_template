import 'reflect-metadata';
import {DataSource} from 'typeorm';
import config from '../../config';
import {logInfo} from '../utils/logger';
import {User} from './entity/User';

class Database {
    /**
     * @description Se inicializa la base de datos
     */
    public init(): void {
        const AppDataSource = new DataSource({
            type: 'mysql',
            host: config.host,
            port: config.dbPort,
            username: config.dbUser,
            password: config.dbPassword,
            database: config.dbName,
            synchronize: true,
            logging: false,
            entities: [User],
            migrations: [],
            subscribers: [],
        });

        AppDataSource.initialize()
            .then(() => {
                logInfo('Data Source has been initialized!');
            })
            .catch((err) => {
                logInfo('Error during Data Source initialization', err);
            });
    }
}

export default new Database();
