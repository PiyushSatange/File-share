const {getObjectUrl, uploadFile} = require("../services/bucket")
async function getFile(req, res){
    const key = req.body.key;
    await getObjectUrl(key).then((data)=>{
        url = data;
    }).catch((err)=>{
        url = err;
    })
    console.log(url)
    return res.status(200).json({msg: url});
}

async function sendFile(req, res){
    await uploadFile().then((data)=>{
        url = data;
    }).catch((err)=>{
        url = err;
    })
    return res.status(200).json({msg: url});
}
module.exports = {getFile, sendFile};