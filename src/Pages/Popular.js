import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../state/reducers/usersReducer';
import { Pagination } from '@mui/material';
import { Container } from '@mui/system';

const Users = () => {

  //============== Pagination =============
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  //=======================================

  const data = useSelector((state) => state.usersReducer);
  const { userData, loading, error } = data;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData(page))
  }, [dispatch, page])

  return (
    <>
      <Container>
        <h3 style={{ padding : '1rem' , textAlign:'center' }} > Our Popular Users </h3>
        <div>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ maxWidth: '170' }} >Id</TableCell>
                  <TableCell style={{ maxWidth: '170' }} >Email</TableCell>
                  <TableCell style={{ maxWidth: '170' }} >First Name</TableCell>
                  <TableCell style={{ maxWidth: '170' }} >Last Name</TableCell>
                  <TableCell style={{ maxWidth: '170' }} >Avatar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((e) => (
                  <TableRow
                    key={e.id}
                  >
                    <TableCell style={{ minWidth: '170' }} component="th" scope="row">
                      {e.id}
                    </TableCell>
                    <TableCell style={{ maxWidth: '170' }} >{e.email}</TableCell>
                    <TableCell style={{ maxWidth: '170' }} >{e.first_name}</TableCell>
                    <TableCell style={{ maxWidth: '170' }} >{e.last_name}</TableCell>
                    <TableCell style={{ maxWidth: '170' }} >
                      <img src={e.avatar} alt="" srcset="" />
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow style={{ display: 'flex', justifyContent: 'right', padding: '1rem' }}>
                  <Pagination count={10} page={page} onChange={handleChange} />
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </>
  )
}

export default Users;
