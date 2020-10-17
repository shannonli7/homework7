function gettingJSON(){
    //Display the forecast
    // Your code here.
    let weather_app_url = "http://api.openweathermap.org/data/2.5/weather";

    // "country code" -> sys.country
    // "city code" -> id
    const dict = {
      zip: "zip code",
      appid: "c8f5d2484d67510fbd2a720a57f1e04a"
    }
    weather_app_url += '?q=London&appid='+ dict.appid;
    //Set default location if one isn't provided
    let location;
    // location = "Ann Arbor";
    // Your code here.

    fetch(weather_app_url, {
      mode: 'cors',
      credentials: "same-origin"
    })
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });

    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    // format = "F";
    // Your code here.
    console.log("Format is " + format);

    //set the query
    let query;
    // Your code here.

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, highs and lows,
    //the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three
        //elements in HTML.
        //I would print the JSON to the console
        // Your code here.
        // zip: json.zipcode,
        // id: json.cityname,
        // sys.country:  json.countryname;
        // console.log(json)
    });
}
