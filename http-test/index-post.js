const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.method==="POST"){
        console.log("req content-type :",req.headers['content-type']);
        let  postDate=''
        req.on('data',chunk=>{
            postDate +=chunk.toString()
        })
        req.on('end',()=>{
            console.log("postDate :",postDate);
            res.end('hollo world !')
        })
    }
})
server.listen(8080,()=>{
    console.log('监听8080端口');
})