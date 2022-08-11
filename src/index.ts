import App from './App';
import {logInfo} from './App/utils/logger';
import config from './config';

App.listen(config.port, () => {
    logInfo(`Escuchando en ${config.host}:${config.port}`);
});
