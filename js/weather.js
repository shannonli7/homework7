function gettingJSON(){
    //Display the forecast
    // Your code here.
    const appid = "c8f5d2484d67510fbd2a720a57f1e04a";
    const weather_app_url = "https://api.openweathermap.org/data/2.5/weather?";
    const api_end = '&appid='+ appid;

    //Set default location if one isn't provided
    let location = "Ann Arbor";
    let unit_val = document.getElementById("fahrenheit").value;
    let unit = "units=" + unit_val;
    let url = weather_app_url + 'q=Ann+Arbor'+ "&" + unit + api_end;
    location = document.getElementById("location").value;
    //format of the location
    //London,us
    //48104,us

    //set default temperature format if one isn't provided
    let url_temp;
    let format;
    format = "Fahrenheit";
    console.log("Format is " + format);

    if(location !== ""){
      if(location[0] >= '0' && location[0] <= '9'){
        if(document.getElementById("celcius").checked == true){
          format = "Celcius";
          // temp_val = json["main"]["temp"] - 273.15;
          unit_val = document.getElementById("celcius").value;
          unit = "units=" + unit_val;
          url = weather_app_url + "zip=" + location + ",us" + "&" + unit + api_end;
        } else{
          format = "Fahrenheit";
          url = weather_app_url + "zip=" + location + ",us" + "&" + unit + api_end;
          // temp_val = 1.8 * (json["main"]["temp"] - 273) + 32;
        }
      } else{
        if(document.getElementById("celcius").checked == true){
          format = "Celcius";
          // temp_val = json["main"]["temp"] - 273.15;
          unit_val = document.getElementById("celcius").value;
          unit = "units=" + unit_val;
          url = weather_app_url + "q=" + location + ",us" + "&" + unit + api_end;
        } else{
          format = "Fahrenheit";
          url = weather_app_url + "q=" + location + ",us" + "&" + unit + api_end;
          // temp_val = 1.8 * (json["main"]["temp"] - 273) + 32;
        }
      }
    }

    console.log(url);
    console.log(unit);

    console.log("Location is : " + location);

    console.log("Format is " + format);


    //set the query
    let query;
    query = url;
    console.log("Query is :" + query);
    //Create and set variables for each of the elements you
    //need to update, location, highs and lows,
    //the image, etc.

    let loc;
    let temp;
    let tempImg;
    let temp_val;

    $.getJSON(query,function(json){
        // document.write(JSON.stringify(json))
        // document.getElementById("forecast").style.display = 'block';
        console.log(json["name"])
        console.log(json["main"]["temp"])
        console.log(json["weather"][0]["icon"])

        console.log(json["weather"][0]["description"])

        loc = json["name"];

        temp = json["main"]["temp"] + " with " + json["weather"][0]["description"];
        tempImg = json["weather"][0]["icon"];

        link = "http://openweathermap.org/img/wn/" + tempImg + "@2x.png";

        console.log(link)
        document.getElementById("loc").innerHTML = loc;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("tempImg").src = link;
        document.getElementById("tempImg").alt = tempImg;

        $("#forecast").css("display", "inline-block");
        //Use returned json to update the values of the three
        //elements in HTML.
        //I would print the JSON to the console
    });
}
