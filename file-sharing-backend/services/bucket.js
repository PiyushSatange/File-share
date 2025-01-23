require('dotenv').config();
const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner")

const client = new S3Client(
    {
        region: 'us-east-1',
        credentials: {
            accessKeyId: process.env.ACCESS_KEY,
            secretAccessKey: process.env.SECRET_KEY,
        }
    }
)

async function uploadFile(){
    const command = new PutObjectCommand(
        {
            Bucket: "file-sharing-bucket-ps",
            Key: "folder/demo-name.png",
        }
    )
    const url = await getSignedUrl(client, command);
    return url;
}

async function getObjectUrl(key){
    const command = new GetObjectCommand(
        {
            Bucket: "file-sharing-bucket-ps",
            Key: key
        }
    )
    const url = await getSignedUrl(client, command);
    return url;
}

module.exports = {
    getObjectUrl,
    uploadFile
}