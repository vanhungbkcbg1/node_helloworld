const sqs = require("../services/sqs.service");
module.exports.index = async (req,res) => {
    try {
        const message = {
            name: "hungnv",
            age: 32
        }
        await sqs.send(message);
        // send message with attribute
        // await sqs.send(message,{context: { DataType: "String", StringValue: "Demo"}});
        res.send("message sent successfully");
    } catch (ex) {
        res.send(ex);
    }
}