//req receive and send response
exports.HelloGet=(req,res)=>{
    res.status(200).json({
        status: "Success",
        data: "Hello Get"
    })
}

exports.HelloPost=(req,res)=>{
    res.status(200).json({
        status: "Success",
        data: "Hello Post"
    })
}