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

Dealership.prototype.getNam
const dealership1 = new Dealership("Dealership", 8)

dealership1.addCar(car1)
dealership1.addCar(car2)
dealership1.addCar(car3)
dealership1.removeCar(car3)

console.log(dealership1.allCarsManufacturers())

const priceArray =_carStock.map((car)=>car.getPrice())

