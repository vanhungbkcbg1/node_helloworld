const AWS = require('aws-sdk');
function init() {
    return new AWS.SQS({apiVersion: '2012-11-05'});
}
module.exports.send = async (message, attributes = "") => {

    const sqs = init();

    const params = {
        MessageBody: JSON.stringify(message),
        QueueUrl: process.env.AWS_SQS_URL
    }

    if (attributes) {
        params["MessageAttributes"] = attributes;
    }

    return await sqs.sendMessage(params).promise();
}