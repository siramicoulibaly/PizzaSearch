$( document ).ready(
    $.get("https://api.foursquare.com/v2/venues/search?" +
        "client_id=RRTEPALM5TOOSR3KMR4VIINY3J5R1UEO1KNDR0L4GQLVFM3M" +
        "&client_secret=ONWFLV1CZD5I4XSCII202VQKEFWQPGFGYFRDVZ2NYBED4QL4" +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
            console.log(data)
        }));
        

$( "#submit" ).click(function() {

});

