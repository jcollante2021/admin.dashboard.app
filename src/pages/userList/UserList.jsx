import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {userRows} from "../../activityData.js"

export default function UserList() {
    const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
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
                        <button className="userListEdit">Editar</button>
                        <DeleteOutline className="userListDelete"/>
                    </>
                )
            }},
        ];
        
        
    return (
        <div className="userList">
            <DataGrid rows={userRows} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection disableSelectionOnClick />
        </div>
    )
}