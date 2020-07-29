$(document).ready(function(){
    $.getJSON( "https://api.covid19india.org/data.json", function(data){
        var confirmed_total;
        var active_total ;
        var recovered_total; 
        var death_total;
        var confirmed_total = data.statewise[0].confirmed;
        var active_total = data.statewise[0].active;
        var recovered_total = data.statewise[0].recovered;
        var death_total = data.statewise[0].deaths;
        $("#confirmed").append(confirmed_total);
        $("#active").append(active_total);
        $("#recovered").append(recovered_total);
        $("#death").append(death_total);
        var confirmed = []
        var deaths = []
        var recovered = []
        var states = []
        $.each(data.statewise,function(id,obj){
            confirmed.push(obj.confirmed);
            deaths.push(obj.deaths);
            recovered.push(obj.recovered);
            states.push(obj.state);
        });
        states.shift();
        deaths.shift();
        recovered.shift();
        confirmed.shift();
        var myChart = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(myChart, {
            type: 'line',
            data: {
                labels: states,
                datasets: [
                    {
                    label: "Confirmed Cases",
                    data: confirmed,
                    backgroundColor: "#f1c40f",
                    minBarLength : 100,
                    },
                    {
                    label: "Recovered",
                    data: recovered,
                    backgroundColor: "#2ecc71",
                    minBarLength : 100,
                    },
                    {
                    label: "Deceased",
                    data: deaths,
                    backgroundColor: "#e74c3c",
                    minBarLength : 100,
                    },

                ]
            },
            options: {
            }
        });
    });
});