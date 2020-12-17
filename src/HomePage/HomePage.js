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

        

    </div>


</main>

  );
}

export default HomePage;
