import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Nuevos Miembros</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://placekitten.com/212/200" alt="foto de perfil de usuario" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://placekitten.com/345/201" alt="foto de perfil de usuario" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nadia Espinosa</span>
                        <span className="widgetSmUserTitle">Diseñadora Grafica</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://placekitten.com/202/202" alt="foto de perfil de usuario" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alan Ramirez</span>
                        <span className="widgetSmUserTitle">Soporte Tecnico</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://placekitten.com/203/203" alt="foto de perfil de usuario" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dario Gomez</span>
                        <span className="widgetSmUserTitle">Arquitecto</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://placekitten.com/204/204" alt="foto de perfil de usuario" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Giuliana White</span>
                        <span className="widgetSmUserTitle">QA Automatizador</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://placekitten.com/205/205" alt="foto de perfil de usuario" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Angela Ribera</span>
                        <span className="widgetSmUserTitle">Psicologa</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
