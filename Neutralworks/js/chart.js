// JavaScript Document
//Load the AJAX API

google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.load('current', {
    'packages': ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawStuff);
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart4);

/* ------------ 円グラフ 男女比 -------------- */

function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['sex', 'number'],
        ['男性', 　1342],
        ['女性', 　1295],
        ['不明・その他', 　483]
    ]);

    var options = {
        legend: {
            textStyle: {
                fontSize: 15
            }
        },
        pieSliceTextStyle: {
            fontName: 'Meiryo UI',
            fontSize: 10
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

/* ------------  有給休暇取得率 -------------- */

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['donutchart', 'Percentage'],
        ['取得率', 85],
        ['No', 15]
    ]);

    var options = {
        legend: 'none',
        pieSliceTextStyle: {
            fontName: 'Meiryo UI',
            fontSize: 15,
            italic: true,
            bold: true
        },
        pieStartAngle: 60,
        tooltip: {
            trigger: 'none'
        },
        slices: {
            0: {
                color: 'green'
            },
            1: {
                color: 'transparent'
            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('pacman'));
    chart.draw(data, options);
}

/* ------------  売り上げ推移 -------------- */

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Density", {
            role: "style"
        }],
        ["2015", 8.94, "silver"],
        ["2016", 132.49, "silver"],
        ["2017", 203.30, "silver"],
        ["2018", 258.45, "color: gold"],
        ["2019", 468.93, "color: gold"],
        ["2020", -12.21, "silver"],
        ["2021", 128.2, "silver"],
        ["2022", 336.32, "color: gold"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        bar: {
            groupWidth: "95%"
        },
        legend: {
            position: "none"
        },
        annotations: {
            textStyle: {
                fontName: 'Times-Roman',
                fontSize: 10,
                bold: true,
                italic: true,
                color: '#871b47',
            }
        }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}

/* ------------  平均月間残業時間 -------------- */

function drawStuff() {
    var chartDiv = document.getElementById('chart_div');

    var data = google.visualization.arrayToDataTable([
        ['Year', '営業', 'エンジニア', '総務'],
        ['2013', 30, 70, 20],
        ['2014', 60, 40, 16],
        ['2015', 80, 50, 30],
        ['2016', 50, 70, 22],
        ['2017', 74, 50, 34],
        ['2018', 50, 52, 32],
        ['2019', 60, 63, 34],
        ['2020', 80, 70, 83],
        ['2022', 20, 40, 20]
    ]);

    var classicOptions = {
        legend: {
            position: 'top',
            textStyle: {
                fontSize: 15
            }
        },
    };

    function drawClassicChart() {
        var classicChart = new google.visualization.ColumnChart(chartDiv);
        classicChart.draw(data, classicOptions);
    }

    drawClassicChart();
};

/* ------------  年間採用数推移 -------------- */

function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Year', '営業', 'エンジニア', '総務'],
        ['2014', 70, 60, 30],
        ['2015', 80, 50, 10],
        ['2016', 60, 60, 20],
        ['2017', 70, 40, 10],
        ['2018', 70, 40, 10],
        ['2019', 70, 40, 10],
        ['2020', -12, -3, -2],
        ['2021', 70, 40, 10],
        ['2022', 170, 240, 12]
    ]);

    var options = {
        legend: {
            position: 'top',
            textStyle: {
                fontSize: 15
            }
        },
        hAxis: {
            title: ''
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_adopt'));
    chart.draw(data, options);
}