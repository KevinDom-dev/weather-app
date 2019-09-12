// Still have to make sure country code input is two letters and not case sensitive
//moment().local() gebruiken?
// moment().max(moment()?
// for loop over dagen array en dan voor die dag[i] de waarden terughalen?
// Switch loop over de 7 dagen dan?
// return.this?
//dt text
// slice
//Aggregate
// moment().max(moment().add(1, 'd'));
(() => {
    //let key = "&units=metric&APPID=2bb60f67728bd60cff217f4271381946";
    // let url = "https://api.openweathermap.org/data/2.5/forecast?q=";
    let city = document.getElementById("city-name");
    let country = document.getElementById('country-code');

    document.getElementById("run").addEventListener("click", function (){
        const weatherCast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "," + country.value + "&units=metric&APPID=2bb60f67728bd60cff217f4271381946";
        fetch(weatherCast)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log(json);
            let foreCast = "";

            for (let i=0; i < json.list.length; i++) {
                let index = moment().format('YYYY-MM-DD');
                console.log(index);
                var today = [];
                var day2 = [];
                var day3 = [];
                var day4 = [];
                var day5 = [];
                let dtNow = [moment(json.list[i].dt_txt).format('YYYY-MM-DD')];
                //let grr = [json.list[i].main.temp];
                //let fullDT = (json.list[i].dt_txt).slice(0, 10);
                //console.log(fullDT);
                if (index == dtNow){
                    let grr = [json.list[i].main.temp];
                    today.push(json.list[i].main.temp)
                }
                if (dtNow == index + 1){

                    day2.push(json.list[i].main.temp)
                }
                if (dtNow == index + 2){
                    day3.push(json.list[i].main.temp)
                }
                if (dtNow == index + 3){
                    day4.push(json.list[i].main.temp)
                }
                if (dtNow == index + 4){
                    day5.push(json.list[i].main.temp)
                }
                console.log(today);
                console.log(day2);
                console.log(day3);
                console.log(day4);
                console.log(day5);
                //let days= [moment(json.list[i].dt_txt).format('YYYYMMDD')].push(json.list[i]);
                //console.log(days);
                //console.log(dtNow);
               //console.log(tempSum);
                //let dayTemp = json.list[i].main.temp;

              /*  if (fullDT[''] === (json.list[i].dt_txt)){
                    console.log(fullDT);
                }
                /*for(let i=0; i < json.list.length;i++){
                    fullDT[i] = json.list[i].main.temp;
                }
                console.log(fullDT);
                //let date = new Date();
                //let index = date.getFullYear() + date.getMonth() + date.getDate();
               // fullDT.forEach(tempGet);

                /*function tempGet(){
                    json.list[i].main.temp
                    consol
                }

                /*
*
*
*       var days = {
*       '20190912': {},
*       '20190913': {},
*       '20190914': {},
* }
*
*
* */


                foreCast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                foreCast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                foreCast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
            }
            document.getElementById("forecastResults").innerHTML = foreCast;
        });

    });
})();