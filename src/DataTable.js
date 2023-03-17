import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import  getPatients  from './patients.service';

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

];


/**
 import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 */





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
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>);
}
