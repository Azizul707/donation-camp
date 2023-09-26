/* eslint-disable react/prop-types */

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Pichart = ( { totalDonationAmount } ) => {
  
    const data = [
        { name: 'Donated', value: {totalDonationAmount} },
        { name: 'Remaining', value: 100 - 12 },
      ];
    
      const colors = ['#FF5733', 'lightgray'];
    
    return (
        <div>
             <h2>Donation Percentage</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
 
export default Pichart;