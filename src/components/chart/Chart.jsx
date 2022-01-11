import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
        {
            name: 'Ene',
            "Active User": 150,
            transaction: 55,
        },
        {
            name: 'Feb',
            "Active User": 220,
            transaction: 115,
        },
        {
            name: 'Mar',
            "Active User": 530,
            transaction: 389,
        },
        {
            name: 'Abr',
            "Active User": 345,
            transaction: 371,
        },
        {
            name: 'May',
            "Active User": 410,
            transaction: 310,
        },
        {
            name: 'Jun',
            "Active User": 730,
            transaction: 520,
        },
        {
            name: 'Jul',
            "Active User": 1050,
            transaction: 802,
        },
        {
            name: 'Ago',
            "Active User": 620,
            transaction: 692,
        },
        {
            name: 'Sep',
            "Active User": 750,
            transaction: 471,
        },
        {
            name: 'Oct',
            "Active User": 820,
            transaction: 632,
        },
        {
            name: 'Nov',
            "Active User": 825,
            transaction: 587,
        },
        {
            name: 'Dic',
            "Active User": 978,
            transaction: 651,
        },
    ];

    return (
        <div className="chart">
            <h3 className="chartTitle">Activity Analytics 2021</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart  data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                    <Line dataKey="transaction" stroke="red"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
