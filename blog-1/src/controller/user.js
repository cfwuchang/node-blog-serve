const {exec} =require('../db/mysql')
const pogin=(username,passWord)=>{
    const sql=`select username,realname from users where username='${username}' and password='${passWord}' `
    return exec(sql).then(rows=>{
        return rows[0] ||{}
    })
    
}

module.exports={
    pogin
}