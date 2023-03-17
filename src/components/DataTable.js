import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import  getPatients  from '../services/patients.service';

/**
     "id": "341877fb-084c-430e-8b64-0de2ec41cf99",
      "firstname": "Kian",
      "lastname": "Suzanne",
      "phone": "628.614.5487",
      "email": "Kian@mail.com",
      "picture": "test-profile.picture.jpeg",
      "password": "$2b$10$s6K2MOCotqhXoD8Nb6gkY.OZwkTnbd6bQaXKLM8zAFZdM5Qbosx6u",
 */
const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'firstname', headerName: 'First name', width: 150 },
  { field: 'lastname', headerName: 'Last name', width: 150 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'records', headerName: 'Records', width: 150 },
   {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <button onClick={onClick}>Click</button>;
    },
  },

];







export default function DataTable() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // call API from patients service
    getPatients().then((response) => {
      console.log(response);
      setPatients(response.map((p) => p.patient));
    });
  }, [])
  
  return ( <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={patients}
        columns={columns}
      
      />
    </div>);
}
