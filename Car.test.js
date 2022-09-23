const Car = require('./Car.js');


describe('Car', () => {

    test("can get car price", ()=> {
        let car1 = new Car("BMW", 1000, "V8");
        // expected = 1000;
        // actual = car.getPrice;
        expect(car1.getPrice()).toEqual(1000);
    });

    test("can get car manufacturer", ()=> {
        let car = new Car("BMW", 1000, "V8");
        expected = "BMW";
        actual = car.getManufacturer;
        expect(car.getManufacturer()).toBe("BMW");
    });

    test("can get car engineType", ()=> {
        let car = new Car("BMW", 1000, "V8");
        expected = "V8";
        actual = car.getEngineType;
        expect(car.getEngineType()).toBe("V8");
    });

});