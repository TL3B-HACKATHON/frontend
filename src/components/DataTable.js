import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import getPatients from '../services/patients.service';
import { Navigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstname', headerName: 'First name', width: 150 },
  { field: 'lastname', headerName: 'Last name', width: 150 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // Prevents row selection on click
        const url="medical-profile/:"+params.id
        Navigate(url);
      };
      return <button onClick={onClick}>Click</button>;
    },
  },
];

export default function DataTable() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients()
      .then((response) => {
        const patients = response.map((p) => ({ ...p.patient, action: p.patient.id }));
        setPatients(patients);
      })
      .catch((error) => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={patients} columns={columns} />
    </div>
  );
}
