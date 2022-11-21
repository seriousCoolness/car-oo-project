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
        return "The vehicle is a " + this.make + " " + this.model + " from " + this.year + "."; 
    }

    isVehicle() {
        return true;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }


}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
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
        console.log(vehicle instanceof Vehicle);
        if (vehicle instanceof Vehicle) {

            if (this.vehicles.length < this.capacity) {
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