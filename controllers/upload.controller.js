const s3 = require("../services/s3.service");
module.exports.index = async (req,res) => {
    try {
        await s3.upload("hungnv.txt", __dirname + "/../upload_files/test.txt", process.env.AWS_BUCKET_NAME);
        res.send("upload success");
    } catch (ex) {
        res.send(ex);
    }
}