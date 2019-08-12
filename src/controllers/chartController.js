const { CanvasRenderService } = require('chartjs-node-canvas');
const chartjs = require('chart.js');
var data = [];
var labels = [];

const width = 400;
const height = 400;
const configuration = {
    type: 'bar',
    data: {
        labels: undefined,
        datasets: [{
            label: 'Faturamento visão anual',
            data: undefined,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: (value) => 'R$' + value,
                }
            }]
        }
    }
};

const chartCallback = async  (ChartJS) => {
    try {
    configuration.data.datasets[0].data = await ChartJS.data;
    configuration.data.labels =  await ChartJS.labels;
    const canvasRenderService = new CanvasRenderService(400, 400);   
    return await canvasRenderService.renderToDataURL(configuration);
    } catch (error) {
		next(error);
	}
};

exports.drawChart = async (req, res, next) => {
    try {
    var image = await chartCallback(req.body)
    res.type("image/png");
    res.send(image);
    } catch (error) {
        next(error);
    }
};