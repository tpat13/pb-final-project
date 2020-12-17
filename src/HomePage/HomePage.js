import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';


var dataSource = {
    datasets: [
        {
        data: [],
        backgroundColor: [
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#20C8A6',
            '#CBE474',
            '#F398F6'


        ],
        }
    ],
    labels: []
};

function createChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data:dataSource
    });
}

function getBudget() {
    axios.get('http://localhost:2000/budget')
    .then(function (res) {
        console.log(res.data);
        for(var i = 0; i < res.data.myBudget.length; i++){
            dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
            dataSource.labels[i] = res.data.myBudget[i].title;
            
    }
    createChart();
});
}


function HomePage() {
    getBudget();

  return (
    <main className="container center" id="main">

    <div className="page-area">

        {/* <div className="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div> */}


        <div className="text-box">
            <h1>My Budget</h1>
            <p>
                <canvas id="myChart" width="400" height="400"></canvas>
            </p>
        </div>
      

    </div>


</main>

  );
}

export default HomePage;
