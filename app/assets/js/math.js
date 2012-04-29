
function calculateDegree(lat1, lon1, lat2, lon2){

    var delta_x = lat1 - lat2;
    var delta_y = lon1 - lon2;
    var radians = Math.atan2(delta_x, delta_y);

    return radians * (180/3.1415) 
}

console.log(calculateDegree(43.564472,-89.945068, 43.586359,-90.072784));
