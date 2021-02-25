const mysql=require('mysql')
const con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    part:'3306',
    database:'myblog'

})

con.connect()

//执行sql 语句
const sql='select * from users;'
con.query(sql,(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
})
con.end()