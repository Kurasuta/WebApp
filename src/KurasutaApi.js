import * as axios from 'axios';

export default function KurasutaApi() {
  const baseUrl = 'https://arangodb.kurasuta.de/_db/kurasuta/frontend/';

  this.sample = function (hash_sha256) {
    return axios.get(baseUrl + 'sample/' + hash_sha256);
  };

  this.section = function (hash_sha256) {
    return axios.get(baseUrl + 'section/' + hash_sha256);
  };

  this.newestSamples = function (count) {
    return axios.get(baseUrl + 'newest/sample/' + count);
  };

  this.randomSamples = function (count) {
    return axios.get(baseUrl + 'random/sample/' + count);
  };

  this.buildTimeStampsByYear = function () {
    return axios.get(baseUrl + 'stats/build_time_stamps_by_year');
  };

  this.processingsByMonth = function () {
    return axios.get(baseUrl + 'stats/processings_per_month');
  };

  this.randomSampleByYear = function (year) {
    return axios.get(baseUrl + 'random/sample_by_year/' + year);
  };

  this.count = function () {
    return axios.get(baseUrl + 'count');
  };
};
