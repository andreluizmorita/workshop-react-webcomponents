import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import data from './common/data.json';
import './app.css';

const useStyles = makeStyles({
  root: {
    width: 'calc(100% - 100px)',
    overflowX: 'auto',
    margin: 50
  }
});

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <pay-dialog />

      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  <pay-button product-id={row.id} text="Buy" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Fragment>
  );
}

export default App;
