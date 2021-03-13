import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(carName, monthlyPayment, downPayment, milesPerYear, numberOfMonths) {
  return { carName, monthlyPayment, downPayment, milesPerYear, numberOfMonths };
}

const rows = [
  createData('Mercedes', 850, 0, 15000, 36),
  createData('Honda', 223, 1000, 15000, 36),
  createData('BMW', 740, 4000, 12000, 48),
  createData('Ford', 480, 1250, 10000, 42),
  createData('Subaru', 420, 1500, 15000, 36),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Car</TableCell>
            <TableCell align="center">Monthly Payment</TableCell>
            <TableCell align="center">Down Payment</TableCell>
            <TableCell align="center">Miles Per Year</TableCell>
            <TableCell align="center">Lease Length</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.carName}>
              <TableCell align="center" component="th" scope="row">
                {row.carName}
              </TableCell>
              <TableCell align="center">{row.monthlyPayment}</TableCell>
              <TableCell align="center">{row.downPayment}</TableCell>
              <TableCell align="center">{row.milesPerYear}</TableCell>
              <TableCell align="center">{row.numberOfMonths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}