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



//const car1 = new Car("BMW", 10000 , "V8");
//const car2 = new Car("Volvo", 5000, "V2");
//const car3 = new Car("Ford", 2000, "V4")

// console.log(car3.getManufacturer());

//console.log(car1.getManufacturer())


module.exports = Car