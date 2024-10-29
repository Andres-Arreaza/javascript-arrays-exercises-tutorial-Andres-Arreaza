let coordinatesArray = [[33.747252, -112.633853], [-33.867886, -63.987], [41.303921, -81.901693], [-33.350534, -71.653268]];

// Your code here
const getLongitude = (arr) => {
    arr.forEach(function(element){
        let longitude = element[1];
        console.log(longitude);

    });
}

getLongitude(coordinatesArray);

/*
HECHO CON FOREACH
coordinatesArray.forEach(function(element){
    let longitude = element[1];
    console.log(longitude);
});
*/