import Chart from "../../components/chart/Chart.jsx"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo.jsx"
import "./home.css"
import { userData } from "../../activityData.js"
import WidgetSm from "../../components/widgetSm/WidgetSm.jsx"
import WidgetLg from "../../components/widgetLg/WidgetLg.jsx"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="Actividad de Usuarios 2021" grid user="activity" transaction="transaction"  />
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

