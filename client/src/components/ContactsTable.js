
import React from "react";
import { getContacts, deleteContact } from "../services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  TableSortLabel
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("firstname");

  const handleSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedContacts = [...contacts].sort((a, b) => {
    if (order === "asc") {
      return a[orderBy]?.localeCompare(b[orderBy]);
    } else {
      return b[orderBy]?.localeCompare(a[orderBy]);
    }
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {["firstname", "lastname", "email", "phone", "company", "jobtitle"].map((col) => (
                <TableCell key={col}>
                  <TableSortLabel
                    active={orderBy === col}
                    direction={orderBy === col ? order : "asc"}
                    onClick={() => handleSort(col)}
                  >
                    {col.replace(/^\w/, (c) => c.toUpperCase())}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedContacts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((contact, index) => (
                <TableRow key={index}>
                  {["firstname", "lastname", "email", "phone", "company", "jobtitle"].map((field) => (
                    <TableCell key={field}>{contact[field]}</TableCell>
                  ))}
                  <TableCell>
                    <IconButton onClick={() => onEdit(contact)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => onDelete(contact)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ContactsTable;
