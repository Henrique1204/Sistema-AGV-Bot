import Requests from './Requests';

Requests.enviarRequest();

setInterval(() => {
    Requests.enviarRequest();
}, 5 * 1000);
