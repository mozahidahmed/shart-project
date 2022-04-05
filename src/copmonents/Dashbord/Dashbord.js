import React from 'react';
import {  Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Dashbord.css'




const Dashbord = () => {
   const data= [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]




    return (
        <div className='Allchart'>
            <div className='Chart1'>
                <h3>Monthly Earn Chart 1</h3>
           <LineChart width={400} height={500} data={data}>

           <Line type="monotone" dataKey="investment" stroke="#8884d8" />
           <YAxis></YAxis>
            <XAxis dataKey={'month'}></XAxis>

           </LineChart>

            </div>
                
                
            <div className='Chart2'>
            <h3>Monthly Earn Chart 2</h3>
               <BarChart width={600} height={500} data={data}>

             <XAxis dataKey="month" stroke="#8884d8"></XAxis>
              <YAxis dataKey="investment" stroke="black"></YAxis>


              <CartesianGrid stroke="black" strokeDasharray="5 5"></CartesianGrid>
             <Bar dataKey="investment" fill="red" barSize={30}></Bar>
             </BarChart>



            </div>



        </div>
    );
};

export default Dashbord;