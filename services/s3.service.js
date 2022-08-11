const AWS = require('aws-sdk');
const fs = require('fs');
function init() {
    return new AWS.S3();
}

module.exports.upload = async (uploadName, fileName, bucketName) => {
    const fileContent = fs.readFileSync(fileName);
    const s3 = init();

    const params = {
        Bucket: bucketName,
        Key: uploadName, // File name you want to save as in S3
        Body: fileContent
    };

    await s3.upload(params).promise();
}