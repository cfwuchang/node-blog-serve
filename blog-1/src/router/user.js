const {pogin}=require('../controller/user')
const {SuccessModel,ErrorModel}=require('../model/resModel')
const handleUserRouter=(req,res)=>{
    const method =req.method
    
    //登入
    if(method==="GET" && req.path ==='/api/user/login'){
        // const{username,password}=req.body
        const {username,password}=req.query
        const result =pogin(username,password)
        return result.then(data=>{
            if(data.username){
                //设置 session 
                req.session.username=data.username
                req.session.realname=data.realname


                return new SuccessModel()
            }
            return new ErrorModel('登入失败')
        })
    //     if(result){
    //         return new SuccessModel()
    //     }
    //     return new ErrorModel('登入失败')
    }

    //登入验证
    if(method==="GET" && req.path==='/api/user/login-test'){
        if(req.session.username){
            return Promise.resolve(
                new SuccessModel({
                    session:req.session
                })
            )
        }
        return Promise.resolve(
            new ErrorModel('尚未登陆')
        )
    }
}

module.exports=handleUserRouter