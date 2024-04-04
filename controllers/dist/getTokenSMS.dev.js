"use strict";

module.exports = function (orangeAuthorizationHeader) {
  return new Promise(function (resolve) {
    var https = require('https');

    var credentials = orangeAuthorizationHeader;
    var postData = "";
    postData += "grant_type=client_credentials";
    var options = {
      host: 'api.orange.com',
      path: '/oauth/v3/token'
    };
    options['method'] = 'POST';
    options['headers'] = {
      'Authorization': credentials,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    };
    var req = https.request(options, function (response) {
      response.setEncoding('utf8');
      var responseData = '';
      response.on('data', function (data) {
        responseData += data;
      });
      response.on('end', function () {
        responseData = JSON.parse(responseData);
        resolve(responseData.access_token);
      });
    }).on('error', function (e) {
      console.log(e);
    });
    req.write(postData);
    req.end();
  });
};