function calculateDistance (pointA, pointB)
{
    // Calculate distance
    return (pointB[0] - pointA[0]) + [pointB[1] - pointA[1]];
}

function optimalTruck(trucks, customers)
{
    // Calculate Total Distance for Each Possible Truck Location
    var closestTruck = 0;
    var minTotalDistance = 0;

    // Loop through truck array
    for(i = 0; i < trucks.length; i++) 
    {
        var currentTruck = trucks[i];
        var totalDistance = 0;

        for(var j = 0; j < customers.length; j++)
        {
            var currentCustomer = customers[j]
            var fromCustomer = calculateDistance(currentTruck, currentCustomer)
            totalDistance += fromCustomer;
        }

        if(totalDistance < minTotalDistance)
        {
            minTotalDistance = totalDistance;
            closestTruck = i
        }
        // console.log(totalDistance);
    }

    console.log(currentCustomer);
    console.log(currentTruck);
    return closestTruck;

}

var trucks = [[2,5], [5,-3],[-11,-4]];
var customers = [[0,0],[8,-3],[5,10]];

var trucksIndex = optimalTruck(trucks, customers);
var closestTruck = trucks[trucksIndex];

console.log("Joe's closest truck to you is: ", closestTruck);

