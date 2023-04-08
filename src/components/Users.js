import React, {useState, useEffect} from 'react';
import { Box, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 190 }
];
  
const rows = [
    { id: 1, firstName: '-', lastName: '-', email: '-' }
];

const selectUsers = state => state.users;

const Users = () => {

    const [data, setData] = useState(rows);
    const users = useSelector(selectUsers);

    useEffect(() => {
        if(users.length) {
            const constructedRows = users.map((user, index) => {
                user.id = index + 1;
                return user;
            });
            setData(constructedRows);
        }
    }, [users])

    return (
        <Container maxWidth="sm">
            <h1>List of users</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
            <Box mt={2}>
                <Link to="/">Back</Link>
            </Box>
        </Container>
    )
};

export default Users;