import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, reviews, rates) {
  return { name, reviews, rates };
}

const rows = [
  createData("Lasania", "Amazing work", "5/5"),
  createData("Baza Bang ", "Very professional", "3/5"),
  createData("CDC", "Very knowledgeable and finished the work with a timely manner", "4/5"),
  createData("Cupcake", "This is the second time I have used Ann's services", "5/5"),
];

    
 

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Customer Reviews</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.reviews}</TableCell>
                  <TableCell align="left">{}</TableCell>
                  <TableCell align="left">{row.rates}</TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
