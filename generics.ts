/**
 * class with generic <T>
 *  
 */
class Vehicle <T> {
    vehicleData: T[];
    constructor() {
        this.vehicleData = [];
    }
}

// Interface of four wheeler.
interface IFourWheeler {
    name: string;
    model: number;
}

// Interface of two wheelers.
interface ITwoWheeler {
    name: string;
}

// Assigning values to interface objects.
let car: IFourWheeler = {name: 'BMW', model: 2017};
let bike: ITwoWheeler = {name: 'Activa'};

// Instantiating object of class vehicle.
let cars: Vehicle<IFourWheeler> = new Vehicle<IFourWheeler>();
let bikes: Vehicle<ITwoWheeler> = new Vehicle<ITwoWheeler>();

// Passing interface object.
cars.vehicleData.push(car);
bikes.vehicleData.push(bike);

console.log(cars.vehicleData); // Print cars object.
console.log(bikes.vehicleData); // Print bikes object.
