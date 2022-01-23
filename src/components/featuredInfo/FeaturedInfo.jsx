import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Ingresos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$310.340,00</span>
                    <span className="featuredMoneyRate">
                        -11.4<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Comparativa con el mes pasado</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Ventas</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$492.565,00</span>
                    <span className="featuredMoneyRate">
                        +19.6<ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Comparativa con el mes pasado</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$182.225,00</span>
                    <span className="featuredMoneyRate">
                        -5.1<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Comparativa con el mes pasado</span>
            </div>
        </div>
    )
}
