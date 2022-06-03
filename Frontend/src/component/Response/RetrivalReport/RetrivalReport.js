import React,{useState,useEffect} from 'react'
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {rmsReports} from '../../../api/index';
import Navbar from '../../Navbar/Navbar';
import '../response.css';

const columns = [
    {
      name: "Allocate Date",
      selector: row=>row.Allocatedate,
      sortable: true
    },
    {
        name: "File Number",
        selector: row=>row.Fileno,
        sortable: true
      },
      {
        name: "Pickup Number",
        selector: row=>row.pickupno,
        sortable: true
      },
      {
        name: "Request Type",
        selector: row=>row.requesttype,
        sortable: true
      },
      {
        name: "Status",
        selector: row=>row.Status,
        sortable: true
      }
     
   
  ];
    

function RetrivalReport() {
    const [data, setData] = useState([]);
    
    useEffect(() => {

        async function fetchData() {
            // You can await here
            const response = await rmsReports('Retrival',localStorage.getItem('CUST_ID'))
            setData(response)
            console.log(response)

          }
          fetchData();
    }, [])

    const tableData= {
        columns, data
      };

  return (
    <div className="InvoicesinProgress">
     <Navbar/>
    <div className="container reportdata" style={{marginRight:"0px"}}>
      <h4 className="text-dark mn-3">Retrival Report</h4>
    <div className="DataTable">
    <DataTableExtensions {...tableData} >
     <Datatable 
     columns={columns} 
     data={data}
     pagination
     />
     </DataTableExtensions>
     </div>
     </div>
    </div>
  )
}

export default RetrivalReport
