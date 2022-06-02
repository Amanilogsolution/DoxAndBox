const sql =require('mssql')
const sqlConfig = require('../config')

const Data = async (req,res) => {
    const startDate = req.body.startDate;
    const reportType = req.body.reportType;
    const endDate = req.body.endDate;
    const custId = req.body.custId;
    console.log(startDate,reportType,endDate,custId)
   
    try{
        const pool = new sql.ConnectionPool(sqlConfig);
        await pool.connect();
        const result = await pool.request()
        .input('startDate',startDate)
        .input('reportType',reportType)
        .input('endDate',endDate)
        .input('custId',custId)
        .execute('RMSREPORT')
        res.send(result.recordset)
    }
    catch (err){
        res.send(err)
    }
}

const AddRequest = async (req,res) => {
    const Location = req.body.Location;
    const date = req.body.date;
    const time = req.body.time;
    const NoofBoxes = req.body.NoofBoxes;
    const requesttype = req.body.requesttype;
    const status = req.body.status;
    const CUSTID = req.body.CUSTID;
    const Generatedby = req.body.Generatedby;
    const remarks = req.body.remarks;
    const pickupno = req.body.pickupno;
    console.log(Location,date,time,NoofBoxes,requesttype,status,CUSTID,Generatedby,remarks,pickupno)
   
    try{
        const pool = new sql.ConnectionPool(sqlConfig);
        await pool.connect();
        const result = await pool.request()
        .input('Location',Location)
        .input('date',date)
        .input('time',time)
        .input('NoofBoxes',NoofBoxes)
        .input('requesttype',requesttype)
        .input('status',status)
        .input('CUSTID',CUSTID)
        .input('Generatedby',Generatedby)
        .input('remarks',remarks)
        .input('pickupno',pickupno)
        .execute('Addrequest')
        res.send(result.recordset)
    }
    catch (err){
        res.send(err)
    }
}

module.exports ={Data,AddRequest}