const Car = function(manufacturer, price, engineType){
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;



    this.getManufacturer = ()=> manufacturer;
    this.setManufacturer = (manufacturer)=> _manufacturer = manufacturer;
    this.getPrice = ()=> price;
    this.setPrice = (price)=> _price = price;
    this.getEngineType = ()=> engineType;
    this.setEngineType = (engineType)=> _engineType = engineType


}

// Car.prototype.getManufacturer = function() { return this.manufacturer};
// Car.prototype.setManufacturer = function(manufacturer) { this.manufacturer = manufacturer };
// Car.prototype.getPrice = function() { return this.price };
// Car.prototype.setPrice = function(price) { this.price = price };
// Car.prototype.getEngineType = function() { return this.engineType };
// Car.prototype.setEngineType = function(engineType) { this.engineType = engineType };



const car1 = new Car("BMW", 10000 , "V8");
const car2 = new Car("Volvo", 5000, "V2");
const car3 = new Car("Ford", 2000, "V4")

// console.log(car3.getManufacturer());

console.log(car1.getManufacturer())

const Dealership = function( nameOfDealership, maxNoOfCars){
    let _nameOfDealership = nameOfDealership;
    let _maxNoOfCars = maxNoOfCars;
    let _carStock = [];

    this.getNameOfDealership = ()=> _nameOfDealership;
    this.setNameOfDealership = (nameOfDealership)=> _nameOfDealership = nameOfDealership;
    this.getMaxNoOfCars = ()=> _maxNoOfCars;
    this.setMaxNoOfCars = (maxNoOfCars)=> _maxNoOfCars = maxNoOfCars;
    this.addCar = (car)=> _carStock.push(car); // works
    this.removeCar = (car)=> _carStock.splice(_carStock.indexOf(car), 1); // works
    this.getCarStock = ()=> _carStock; // works
    this.noOfCarsInStock = ()=> _carStock.length // works
    this.valueOfAllCars = ()=>  _carStock.map((car)=>car.getPrice())
    this.allCarsManufacturers = ()=>  _carStock.map((car)=>car.getManufacturer()) // works
    this.findCarsByManufacturer = ()=> _carStock.map()
}


const dealership1 = new Dealership("Dealership", 8)

dealership1.addCar(car1)
dealership1.addCar(car2)
dealership1.addCar(car3)
dealership1.removeCar(car3)

console.log(dealership1.allCarsManufacturers())

module.exports = {
    getManufacturer() ,  getEngineType() , 

}