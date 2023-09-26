import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const [ donateAmount, setDonateAmount ] = useState( [] );
   

    useEffect( () => {
        const makeDonation = JSON.parse( localStorage.getItem( 'donation' ) );
        setDonateAmount( makeDonation );

    }, [ setDonateAmount ] );
    
    const totalDonationAmount = donateAmount?.reduce( ( total, donateAmount ) => total + donateAmount.price, 0 );
    
    const amountAvarage = totalDonationAmount * 12 / 100;
    const data = [
        { name: 'Your Donation', value: amountAvarage },
        { name: 'Total Donation', value: 100 - amountAvarage },
      ];
    
      const colors = ['#00C49F', '#FF444A'];

    




    return (
        <div className="text-xl font-semibold flex justify-center">
        
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={200}
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

export default Statistics;