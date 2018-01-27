import * as axios from 'axios';

export default function KurasutaApi() {
  const baseUrl = (window.location.hostname === 'localhost' ? 'http://localhost:3001/p/kurasuta.de' : '') + '/api/';

  this.sample = function (hash_sha256) {
    return axios.get(baseUrl + 'sample/' + hash_sha256);
  };

  this.section = function (hash_sha256) {
    return axios.get(baseUrl + 'section/' + hash_sha256);
  };

  this.newestSamples = function () {
    return axios.get(baseUrl + 'newest_samples');
  };

  this.buildTimeStampsByYear = function () {
    return axios.get(baseUrl + 'stats/build_time_stamps_by_year');
  };

  this.randomSampleByYear = function (year) {
    return axios.get(baseUrl + 'random_sample/by_year/' + year);
  };
};
