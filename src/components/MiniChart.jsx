// src/components/MiniChart.jsx
import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const MiniChart = ({ data }) => {
  if (!data || data.length === 0) return <div>No chart</div>;

  return (
    <div className="w-[100px] h-[50px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="price" stroke="#3b82f6" dot={false} strokeWidth={2} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;
