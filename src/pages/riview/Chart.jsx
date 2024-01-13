import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ReviewGraph = () => {

    var options = {
        series: [{
        data: [1700, 800, 500, 40, 1]
      }],
        chart: {
        type: 'bar',
        height: 180,
        toolbar:{
            show:false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'
        ],
    },
      };
   
      
  return (
    <div id='chart'>
       <ReactApexChart options={options} series={options.series} type='bar' width={'250px'} height={160}/>
    </div>
  )
}


 

export default ReviewGraph;