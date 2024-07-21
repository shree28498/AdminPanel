import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const Categories = () => {

    const data = [
      { x: 45, y: 30, z: 200 },
      { x: 80, y: 100, z: 260 },
      { x: 150, y: 170, z: 400 },
      { x: 160, y: 130, z: 280 },
      { x: 100, y: 350, z: 500 },
      { x: 60, y: 140, z: 200 },
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 120, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  return (
    <div className="charts">
      <ScatterChart
        width={400}
        height={350}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
    </div>
  );
}

export default Categories
