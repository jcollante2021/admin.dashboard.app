import Chart from "../../components/chart/Chart.jsx"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo.jsx"
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
        </div>
    )
}

