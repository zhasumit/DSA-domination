function analyzeCarMileage(cars) {
    const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
    const avgMileage = totalMileage / cars.length;
    const highestMileage = cars.reduce(
        (best, car) => (car.mileage > best.mileage ? car : best),
        cars[0]
    );
    const lowestMileage = cars.reduce(
        (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
        cars[0]
    );
    return {
        averageMileage: parseFloat(avgMileage.toFixed(2)),
        highestMileage,
        lowestMileage,
        totalMileage,
    };
}

let cars = [
    { make: "Toyota", model: "Corolla", year: 2020, mileage: 25000 },
    { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
    { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
];
let result = analyzeCarMileage(cars);
console.log(result);

cars = [
    { make: "Toyota", model: "Camry", year: 2020, mileage: 30800.22 },
    { make: "Honda", model: "Civic", year: 2019, mileage: 32000.12 },
    { make: "Chevrolet", model: "Impala", year: 2021, mileage: 17500 },
    { make: "Audi", model: "R8", year: 2020, mileage: 13000 },
    { make: "Tesla", model: "Model 3", year: 2018, mileage: 50000 },
];
result = analyzeCarMileage(cars);
console.log(result);
