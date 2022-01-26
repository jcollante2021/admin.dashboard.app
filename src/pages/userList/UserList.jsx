import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../activityData.js"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item)=> item.id !== id));
    }

    const columns = [
            { field: 'id', headerName: 'ID', width: 100 },
            { field: 'user', headerName: 'Usuario', width: 250, renderCell: (params) =>{
                return(
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="Imagen de Perfil" className="userListImg" />
                        {params.row.user}
                    </div>
                )
            }  },
            { field: 'email', headerName: 'Correo electronico', width: 250 },
            { field: 'status', headerName: 'Estado', width: 220 },
            { field: 'transaction', headerName: 'Transacciones totales', width: 160 },
            { field: 'actions', headerName: 'Acciones', width: 160, renderCell: (params) =>{
                return(
                    <>
                        <Link to={"/users/"+params.row.id}>
                            <button className="userListEdit">Editar</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }},
        ];
        
        
    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection disableSelectionOnClick />
        </div>
    )
}