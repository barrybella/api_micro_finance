"use strict";

module.exports = function (orangeApiOptions) {
  return new Promise(function (resolve) {
    var request = require('request');

    var getToken = require('./TokenOM.js')(orangeApiOptions.authorization_header);

    getToken.then(function (response) {
      var headers = {
        'Authorization': "Bearer ".concat(response),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
      var body = {
        merchant_key: "".concat(orangeApiOptions.merchant_key),
        currency: "".concat(orangeApiOptions.currency),
        order_id: "".concat(orangeApiOptions.order_id),
        amount: "".concat(orangeApiOptions.amount),
        return_url: "".concat(orangeApiOptions.return_url),
        cancel_url: "".concat(orangeApiOptions.cancel_url),
        notif_url: "".concat(orangeApiOptions.notif_url),
        lang: "".concat(orangeApiOptions.lang),
        reference: "".concat(orangeApiOptions.reference)
      };
      var options = {
        //   uri: `https://api.orange.com/orange-money-webpay/cm/v1/webpayment/${orangeApiOptions.marchant_key}&${orangeApiOptions.currency}&${orangeApiOptions.order_id}&${orangeApiOptions.amount}&${orangeApiOptions.currency}&${orangeApiOptions.return_url}&${orangeApiOptions.cancel_url}&${orangeApiOptions.notif_url}&${orangeApiOptions.lang}&${orangeApiOptions.reference}`,
        uri: 'https://api.orange.com/orange-money-webpay/gn/v1/webpayment',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      };
      var sendSmsRequest = request(options, function (error, response, body) {
        if (!error && response.statusCode == 201) {
          //resolve({payement:'payement effectuer '});
          resolve(body); //return response.JSON.stringify(body);
        } else {
          resolve({
            payement: response.statusCode
          });
          console.log(body);
        }
      });
    })["catch"](function (error) {
      console.log(error.body);
    });
  });
};