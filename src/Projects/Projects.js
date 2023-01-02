import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData( projectId, projectName, company, deadline, progress, status) {
  return { projectId, projectName, company, deadline, progress, status };
}

const rows = [
  createData( R18908430, "Smart LMS", "SL e-Edu", "2 March 2022", "Done", "Approved"),
  createData( R18908431, "Riders App ", "Miracle", "12 March 2022", "Done", "Rejected"),
  createData( R18908432, "IoT project", "Tesserops", "20 April 2022", "Done", "Approved"),
  createData( R18908433, "ideas Platform", "CDC","2 May 2022", "Done", "Approved"),
  createData( R18908434, "property Ads Platform", "Auzie Digital", "25 May 2022", "Ongoing", ""),
  createData( R18908435, "Solution Web App", "CDC","12 July 2022", "Ongoing", ""),
];


const makeStyle=(progress)=>{
  if(progress === 'Done')
  {
    return {
      background: 'rgb(145 254 159 / 50%)',
      color: 'green',
    }
  }
  else (progress === 'Ongoing')
  {
    return{
        background: 'rgb(145 254 159 / 50%)',
        color: 'yellow',
    }
  }
  
}

const makeStyle1=(status)=>{
    if(status === 'Approved')
    {
      return {
        background: '#59bfff',
        color: 'white',
      }
    }
    else (status === 'Rejected')
    {
      return{
        background: '#D21F3C',
        color: 'White',
      }
    }
    
  }

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Projects</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project Id</TableCell>
                <TableCell align="left">Project Name</TableCell>
                <TableCell align="left">Company</TableCell>
                <TableCell align="left">Deadline</TableCell>
                <TableCell align="left">Progress</TableCell>
                <TableCell align="left">Status</TableCell>
                
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
                  <TableCell align="left">{row.projectId}</TableCell>
                  <TableCell align="left">{row.projectName}</TableCell>
                  <TableCell align="left">{row.country}</TableCell>
                  <TableCell align="left">{row.deadline}</TableCell>
                  <TableCell align="left">{row.progress}</TableCell>
                  <TableCell align="left">
                    <span className="progress" style={makeStyle(row.progress)}>{row.progress}</span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle1(row.status)}>{row.status}</span>
                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
