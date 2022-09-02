import React,{useState,useEffect} from 'react'
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {rmsReports} from '../../../api/index';
import Navbar from '../../Navbar/Navbar';
import '../response.css';

const columns = [
    {
      name: "Box Number",
      selector: row=>row.boxno,
      sortable: true
    },
    {
        name: "Department",
        selector: row=>row.department,
        sortable: true
      },
      {
        name: "DESCN No",
        selector: row=>row.DESCN,
        sortable: true
      },
      {
        name: "File no.",
        selector: row=>row.fileno,
        sortable: true
      },
      {
        name: "Invoice",
        selector: row=>row.INVOICENO,
        sortable: true
      },
      {
        name: "Item Location",
        selector: row=>row.ItemLocation,
        sortable: true
      },
      {
        name: "Pickup Number",
        selector: row=>row.PICKUPNO,
        sortable: true
      },
      {
        name: "Remarks",
        selector: row=>row.Remark1,
        sortable: true
      },
      {
        name: "Warehouse",
        selector: row=>row.WHname,
        sortable: true
      }
    
   
  ];
    

function StockReports() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        async function fetchData() {
            const response = await rmsReports('Stock',localStorage.getItem('CUST_ID'))
            setData(response)
            if(response){
              setLoading(false);
            }

          }
          fetchData();
    }, [])

    const tableData= {
        columns, data
      };

  return (
    <div className="InvoicesinProgress">
     <Navbar/>
     {loading?(
                  <h1 style={{display:"flex",justifyContent:"center",alignItems:"center" }}>Loading...</h1>

      ):(
    <div className=" reportdata" >
      <h4 className="text-dark mn-3">Stock Report</h4>
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
      )}
    </div>
  )
}

export default StockReports
