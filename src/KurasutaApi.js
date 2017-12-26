import * as axios from 'axios';

export default function KurasutaApi() {
  const baseUrl = (window.location.hostname === 'localhost' ? 'http://localhost:3001/p/kurasuta.de' : '') + '/api/';

  this.sample = function (hash_sha256) {
    return axios.get(baseUrl + 'sample/' + hash_sha256);
  };

  this.section = function (hash_sha256) {
    return axios.get(baseUrl + 'section/' + hash_sha256);
  };
};
