var Vehicle = (function () {
    function Vehicle() {
        this.vehicleData = [];
    }
    return Vehicle;
}());
var car = { name: 'BMW', model: 2017 };
var bike = { name: 'Activa' };
var cars = new Vehicle();
var bikes = new Vehicle();
cars.vehicleData.push(car);
bikes.vehicleData.push(bike);
console.log(cars.vehicleData);
console.log(bikes.vehicleData);
