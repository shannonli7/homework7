function gettingJSON(){
    //Display the forecast
    // Your code here.
    const appid = "c8f5d2484d67510fbd2a720a57f1e04a";
    const weather_app_url = "https://api.openweathermap.org/data/2.5/weather?";
    const api_end = '&appid='+ appid;

    //Set default location if one isn't provided
    let location;
    let url = weather_app_url + 'q=Ann+Arbor'+ api_end;
    location = document.getElementById("location").value;
    //format of the location
    //London,us
    //48104,us

    if(location !== ""){
      // replace all spaces in the location with a + (google this) <- if needed
      if(location[0] >= '0' && location[0] <= '9'){
        url = weather_app_url + "zip=" + location + api_end;
      } else{
        url = weather_app_url + "q=" + location + api_end;
      }
      console.log(url);
    }

    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    format = "Fahrenheit";
    if(document.getElementById("celcius").checked = true){
      format = "Celcius";
    } else{
      format = "Fahrenheit";
    }
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

    $.getJSON(query,function(json){
        // document.write(JSON.stringify(json))
        // document.getElementById("forecast").style.display = 'block';
        $("#forecast").css("display", "inline-block");
        console.log(json["name"])
        console.log(json["main"]["temp"])
        console.log(json["weather"][0]["icon"])

        loc = json["name"];
        temp = json["main"]["temp"];
        tempImg = json["weather"][0]["icon"];

        document.getElementById("loc").innerHTML = loc;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("tempImg").innerHTML = tempImg;
        document.getElementById("tempImg").alt = tempImg;
        //Use returned json to update the values of the three
        //elements in HTML.
        //I would print the JSON to the console
    });
}
