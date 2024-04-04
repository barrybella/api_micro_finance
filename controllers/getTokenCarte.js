module.exports = (orangeAuthorizationHeader)=>{
    return new Promise((resolve)=>{
      const https = require('https');
      let credentials= orangeAuthorizationHeader;
      let postData = "";
      postData += "grant_type=client_credentials";
        let options = {
            host: 'https://api-gateway.sandbox.ngenius-payments.com/identity/auth/access-token',
            
        };
        options['method'] = 'POST';
        options['headers'] = {
            'Authorization': 'YzEwYWQ1YWItYjVjYS00YzFkLTk4MGItMzdkYWI3NjhkMDgxOjNiYWZiMjcwLTU4ZTAtNDQ5OC1hZGQ4LWM4MDA0OTVjMWUzYQ==',
            //'Accept':'application/json',
            'Content-Type': 'application/vnd.ni-identity.v1+json',
            //'Content-Length': Buffer.byteLength(postData)
        };
        let req = https.request (options, (response)=> {
            response.setEncoding('utf8');
            let responseData = '';
            response.on ('data', (data)=> { responseData += data; });
            response.on ('end', ()=> {
              responseData = JSON.parse(responseData);
              resolve(responseData.access_token);
            });
       })
       .on('error', (e)=> { console.log(e); });
       req.write(postData);
       req.end();
    });
};