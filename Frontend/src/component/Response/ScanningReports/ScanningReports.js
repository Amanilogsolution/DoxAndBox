import React,{useState,useEffect} from 'react'
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {rmsReports} from '../../../api/index';
import Navbar from '../../Navbar/Navbar';
import '../response.css';

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
            const response = await rmsReports('Scanning',localStorage.getItem('CUST_ID'))
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
    <div className="container reportdata" >
      <h4 className="text-dark mn-3">Scanning Report</h4>
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
