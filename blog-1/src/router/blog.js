const {getList,getDetail,newBlog,upDataBlog,delBlog} =require('../controller/blog')
const {SuccessModel,ErrorModel}=require('../model/resModel')
const handleBlogRouter =(req,res)=>{
    const method =req.method 
    const id=req.query.id


    //获取博客列表
    if(method ==='GET' && req.path === '/api/blog/list'){
        const author =req.query.author ||''
        const keyword =req.query.keyword ||''
        // const listData=getList(author,keyword)
        // return new SuccessModel(listData)
        const result =getList(author,keyword)
        return result.then(listData=>{
            return new SuccessModel(listData)
        })
    }

    //获取博客详情
    if(method==="GET" && req.path==="/api/blog/detail"){

        const result =getDetail(id)
        return result.then(data=>{
            return new SuccessModel(data)
        })
        
        // const data =getDetail(id)
        // return new SuccessModel(data)
    }

    //新建博客
    if(method==="POST" && req.path==="/api/blog/new"){
        req.body.author='吴昌'
        const result=newBlog(req.body)
        return result.then(data=>{
            return new SuccessModel(data)
        })
        // console.log(req.body);
        // const data=newBlog(req.body)
        // return new SuccessModel(data) 

    }

    //更新博客
    if(method==="POST" && req.path==="/api/blog/update"){
       const result =upDataBlog(id,req.body)
       return result.then(val=>{
           if(val){
            return new SuccessModel()
           }else{
            return new ErrorModel('更新失败')
           }
       })
    }

    //删除博客
    if(method==="POST" && req.path==="/api/blog/del"){
        const author='吴昌'
        const result =delBlog(id,author)
        return result.then(val={
            
        })
        
    }
}

module.exports=handleBlogRouter