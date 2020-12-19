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

function createPieChart() {
    var ctx = document.getElementById('myPieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data:dataSource
    });
}

function createBarChart() {

    var btx = document.getElementById('myBarChart').getContext('2d');
    var myBarChart = new Chart(btx, {
        type: 'horizontalBar',
        data: dataSource,
        options : {
            legend: { display: false },
            
      
        }

    });
}
function createPolarChart() {
    var ptx = document.getElementById('myPolarChart').getContext('2d');
    var myPolarChart = new Chart(ptx, {
        data: dataSource,
        type: 'polarArea'

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
    createBarChart();
    createPieChart();
    createPolarChart();

});
}


function HomePage() {
    getBudget();

  return (
    <main className="container center" id="main">
    <title>Personal Budget App | Dashboard </title>
    <div className="page-area">

        { <div className="text-box">
            <h1>Stay on track</h1>
            <p>
                This section is meant to help you visualize your personal budget
            </p>
        </div> }


        <div className="text-box">
            <h1>Pie Chart</h1>
            <p>
                <canvas id="myPieChart" width="400" height="400"></canvas>
            </p>
        </div>
        
        <div className="text-box">
            <h1>Bar Chart</h1>
            <p>
                <canvas id="myBarChart" width="400" height="400"></canvas>
            </p>
        </div>

        <div className="text-box">
            <h1>Polar Area Chart</h1>
            <p>
                <canvas id="myPolarChart" width="400" height="400"></canvas>
            </p>
        </div>
    </div>


</main>

  );
}

export default HomePage;
