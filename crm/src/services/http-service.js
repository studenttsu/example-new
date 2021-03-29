import TokenService from './token-service';
import PubSub from './pubsub';

const baseHeaders = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TokenService.getToken()}`
};

export class HttpService {

  constructor(baseApiPath) {
    this.baseApi = baseApiPath;
  }

  async get(path) {
    const response = await fetch(`${this.baseApi}/${path}`, {
      headers: { ...baseHeaders }
    });

    return this._handleResponse(response);
  }

  async post(path, body) {
    const stringifiedData = JSON.stringify(body);

    const response = await fetch(`${this.baseApi}/${path}`, {
      method: 'POST',
      body: stringifiedData,
      headers: baseHeaders
    });

    return this._handleResponse(response);
  }

  async _handleResponse(response) {
    const parsedData = await response.json();

    if (response.ok) {
      return parsedData;
    }

    if (response.status === 401) {
      PubSub.emit('logout');
    }

    throw parsedData;
  }
}