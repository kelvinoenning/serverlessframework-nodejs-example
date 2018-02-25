'use strict';

module.exports.hello = (event, context, callback) => {
  let body = {
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body)
  });
};
