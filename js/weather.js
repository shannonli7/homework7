function gettingJSON(){
    //Display the forecast
    // Your code here.
    const appid = "c8f5d2484d67510fbd2a720a57f1e04a";
    const weather_app_url = "https://api.openweathermap.org/data/2.5/weather?";
    const api_end = '&appid='+ appid;

    let dict = {
      zip: "zip code",
    }

    let url = weather_app_url + 'q=Ann+Arbor'+ api_end;
    let place = document.getElementById("location").value;
    if(place !== ""){
      // replace all spaces in the location with a + (google this)
      // for a city, the prefix is a q=
      // for a zipcode the prefix is a zip=
      url = weather_app_url + place + api_end;
      console.log(url);
    }
    //Set default location if one isn't provided
    let location;


    fetch(url, {
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
