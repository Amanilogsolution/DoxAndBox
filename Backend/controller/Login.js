const sql =require('mssql')
const sqlConfig = require('../config')

const UserLogin = async (req, res) => {
    const uid_id = req.body.uid_id;
    const uid_pass = req.body.uid_pass;
    
 
    try{
        await sql.connect(sqlConfig)
        const result = await sql.query(`select UID,uPWD,uName,CUST_ID,cust_name from NEWRMSDB.dbo.User_Rights 
        with(nolock) WHERE uID='${uid_id}  ' AND uPWD='${uid_pass}' AND ISNULL(CUST_NAME,'')<>'' 
        AND ISNULL(CUST_ID,'')<>'' and ISNULL(uActive,'')='1'`)

        console.log(result)
        res.send(result.recordset[0])
    }
    catch(err){
        res.send(err)
        console.log(err)
        }
}
module.exports ={UserLogin}