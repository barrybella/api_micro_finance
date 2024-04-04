"use strict";

module.exports = function (orangeApiOptions) {
  return new Promise(function (resolve) {
    var request = require('request');

    var getToken = require('./getTokenSMS.js')(orangeApiOptions.authorization_header);

    getToken.then(function (response) {
      var headers = {
        'Authorization': "Bearer ".concat(response),
        'Content-Type': 'application/json'
      };
      var body = {
        outboundSMSMessageRequest: {
          address: "tel:".concat(orangeApiOptions.area_code).concat(orangeApiOptions.sender_number),
          senderAddress: "tel:".concat(orangeApiOptions.area_code).concat(orangeApiOptions.sender_phone),
          outboundSMSTextMessage: {
            message: orangeApiOptions.sms_body
          }
        }
      };
      var options = {
        uri: "https://api.orange.com/smsmessaging/v1/outbound/tel:".concat(orangeApiOptions.area_code).concat(orangeApiOptions.sender_phone, "/requests"),
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      };
      var sendSmsRequest = request(options, function (error, response, body) {
        if (!error && response.statusCode == 201) {
          resolve({
            message: 'sms sent'
          });
          console.log(options);
        } else {
          resolve({
            message: response.statusCode
          });
        }
      });
    })["catch"](function (error) {
      console.log(error.body);
    });
  });
};