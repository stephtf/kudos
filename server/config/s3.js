const aws = require('aws-sdk');
const dotenv = require('dotenv');
const crypto = require('crypto'); 
const util = require('util'); 
const randomBytes = util.promisify(crypto.randomBytes)


dotenv.config(); 

const region = "us-east-1"
const bucketName = "kudos2u"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKeyId, 
    secretAccessKey,
    signatureVersion: 'v4'
})

async function generateUploadUrl() {
    const rawBytes = await crypto.randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = ({
        Bucket: bucketName,
        Key: imageName, 
        Expires: 90
    });

    const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
    return uploadUrl 
}

module.exports = { generateUploadUrl }

