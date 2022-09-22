const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;


}

Car.prototype.getManufacturer = function() { return this.manufacturer};
Car.prototype.setManufacturer = function(manufacturer) { this.manufacturer = manufacturer };
Car.prototype.getPrice = function() { return this.price };
Car.prototype.setPrice = function(price) { this.price = price };
Car.prototype.getEngineType = function() { return this.engineType };
Car.prototype.setEngineType = function(engineType) { this.engineType = engineType };



const car1 = new Car("BMW", 10000 , "V8");
const car2 = new Car("Volvo", 5000, "V2");
const car3 = new Car("Ford", 2000, "V4")

console.log(car3);

module.exports = {

}