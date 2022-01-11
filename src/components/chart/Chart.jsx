import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, user, transaction, grid}) {


    return (
        <div className="chart">
            <h3 className="chartTitle"> {title} </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart  data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={user} stroke="#5550bd"/>
                    <Line dataKey={transaction} stroke="red"/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
