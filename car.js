class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return "The vehicle is a " + make + " " + model + " from " + year + "."; 
    }

    isVehicle() {
        return true;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        this.numWheels = 4;
        super(make, model, year);
    }


}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        this.numWheels = 2;
        super(make, model, year);
    }

    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor (capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if (vehicle.isVehicle()) {

            if (this.vehicles.length < capacity) {
                this.vehicles.push(vehicle);
                return "Vehicle Added!";
            }
            else {
                return "Sorry, we're full."
            }
            
        }
        else {
            return "Only vehicles are allowed in here!"
        }
    }

}