import Chart from "../../components/chart/Chart.jsx"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo.jsx"
import "./home.css"
import { userData } from "../../activityData.js"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="Actividad de Usuarios 2021" grid user="activity" transaction="transaction"  />
        </div>
    )
}

