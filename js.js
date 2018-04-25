function drawChartCelcius() {
    setInterval(function () {
        var jsonData = $.getJSON("http://localhost:3000/result", function (result) {
        }).done(function (results) {
            var data = new google.visualization.DataTable();
            console.log(results)
            data.addColumn('datetime', 'Time');
            data.addColumn('number', 'Temperature');
            $.each(results, function (index, pos) {
                console.log(new Date(pos.x));
                data.addRow([
                    (new Date(pos.x)),
                    parseFloat(pos.y)
                ]);
            });
            var chart = new google.visualization.AreaChart($('#chart').get(0));

            var options = {
                height: 330,
                width: 550,
                chartArea: { 'height': '75%' , 'width':'75%'},
                hAxis: { title: 'Tiempo', titleTextStyle: { color: 'black' } },
                vAxis: {
                    viewWindowMode: 'explicit',
                    viewWindow: {
                        max: 40,
                        min: 10
                    }
                },
                titleTextStyle: {
                    fontSize: 0 // 12, 18 whatever you want (don't specify px)
                },
                colors: ['red'],
                legend: { position: "none" }
            };
            chart.draw(data, options);
        });
    }, 500);
}
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChartCelcius);
function insertarljson() {
    document.getElementById().innerHTML;

}
