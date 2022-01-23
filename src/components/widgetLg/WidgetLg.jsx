import "./widgetLg.css"
import { FiberManualRecord } from '@material-ui/icons';

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}> <FiberManualRecord className="widgetLgStatusIcon"/>{type} </button>;
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Ultimos movimientos</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Usuario</th>
                    <th className="widgetLgTh">Fecha</th>
                    <th className="widgetLgTh">Monto</th>
                    <th className="widgetLgTh">Estado</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://placekitten.com/212/200" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susana Carol</span>
                    </td>
                    <td className="widgetLgDate">15 Dic 2021</td>
                    <td className="widgetLgMount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="aprobado"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://placekitten.com/400/400" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Pablo Jimenez</span>
                    </td>
                    <td className="widgetLgDate">14 Dic 2021</td>
                    <td className="widgetLgMount">$532.00</td>
                    <td className="widgetLgStatus">
                        <Button type="aprobado"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://placekitten.com/500/500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Agustin del Valle</span>
                    </td>
                    <td className="widgetLgDate">14 Dic 2021</td>
                    <td className="widgetLgMount">$1,093.00</td>
                    <td className="widgetLgStatus">
                        <Button type="pendiente"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://placekitten.com/345/201" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Nadia Espinosa</span>
                    </td>
                    <td className="widgetLgDate">12 Dic 2021</td>
                    <td className="widgetLgMount">$2,354.00</td>
                    <td className="widgetLgStatus">
                        <Button type="aprobado"/>
                    </td>
                </tr><tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://placekitten.com/96/96" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Wanda Coria</span>
                    </td>
                    <td className="widgetLgDate">10 Dic 2021</td>
                    <td className="widgetLgMount">$960.00</td>
                    <td className="widgetLgStatus">
                        <Button type="aprobado"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://placekitten.com/96/96" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Wanda Coria</span>
                    </td>
                    <td className="widgetLgDate">10 Dic 2021</td>
                    <td className="widgetLgMount">$1,500.00</td>
                    <td className="widgetLgStatus">
                        <Button type="rechazado"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
