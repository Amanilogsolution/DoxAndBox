import React,{useState,useEffect} from 'react'
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {scanningReports} from '../../../api/index';
import Navbar from '../../Navbar/Navbar';

const columns = [
    {
      name: "Date of activity",
      selector: row=>row.Dateofactivity,
      sortable: true
    },
    {
        name: "Department",
        selector: row=>row.Department,
        sortable: true
      },
      {
        name: "No of Customer Scan",
        selector: row=>row.No_ofCustomerScan,
        sortable: true
      },
      {
        name: "No of Pages Scan",
        selector: row=>row.Noof_filescan,
        sortable: true
      },
      {
        name: "No of Files Scan",
        selector: row=>row.Noof_filescan,
        sortable: true
      },
      {
        name: "Warehouse",
        selector: row=>row.WHname,
        sortable: true
      }
   
  ];
    

function ScanningReports() {
    const [data, setData] = useState([]);
    
    useEffect(() => {

        async function fetchData() {
            // You can await here
            const response = await scanningReports('Scanning',localStorage.getItem('CUST_ID'))
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
    <div className="container " style={{marginRight:"100px"}}>
      <h1 className="text-dark mn-3">Scanning Reports</h1>
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

export default ScanningReports
