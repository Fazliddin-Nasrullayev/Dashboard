import './datatable.scss';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../data-source";
import { Link } from "react-router-dom";
import { useState } from "react";

export const TableData=()=>{
    const [data,setData]=useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="datatable__action">
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="datatable__view-btn">View</div>
                </Link>
                <div
                  className="datatable__delete-btn"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
    ];

    return(
        <div className="datatable">
            <div className="datatable__title">
                Add New User
                <Link to="/users/new" className="datatable__link">
                    Add New
                </Link>
            </div>   
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />

        </div>
    )
}