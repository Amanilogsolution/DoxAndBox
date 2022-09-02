import React, { useState, useEffect } from 'react'
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { rmsReports } from '../../../api/index';
import Navbar from '../../Navbar/Navbar';
import '../response.css';

const columns = [
  {
    name: "Referance No",
    selector: row => row.ActivityReferenceNo,
    sortable: true
  },
  {
    name: "Box No",
    selector: row => row.Boxno,
    sortable: true
  },
  {
    name: "Date of Activity",
    selector: row => row.Dateofactivity,
    sortable: true
  },
  {
    name: "Department",
    selector: row => row.Department,
    sortable: true
  },
  {
    name: "File Name",
    selector: row => row.Filename,
    sortable: true
  },
  {
    name: "File UI DNO",
    selector: row => row.FileUIDno,
    sortable: true
  },
  {
    name: "Invoice",
    selector: row => row.Invoice_no,
    sortable: true
  },
  {
    name: "Location",
    selector: row => row.ItemLocation,
    sortable: true
  },
  {
    name: "Warehouse",
    selector: row => row.Location,
    sortable: true
  },
  {
    name: "Mode",
    selector: row => row.Mode,
    sortable: true
  }

];


function InwardReports() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function fetchData() {
      // You can await here
      const response = await rmsReports('Inward', localStorage.getItem('CUST_ID'))
      setData(response)
      if(response){
        setLoading(false);
      }

    }
    fetchData();
  }, [])

  const tableData = {
    columns, data
  };

  return (
    <div className="InvoicesinProgress">
      <Navbar />
      {loading?(
                  <h1 style={{display:"flex",justifyContent:"center",alignItems:"center" }}>Loading...</h1>

      ):(
      <div className=" reportdata"  >
        <h4 className="text-dark">Inward Report</h4>
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

export default InwardReports
