interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, extraFeatures: [string, any][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    }
    extraFeatures.forEach(feature => {
        const [key, value] = feature;
        car[key] = value
    })
    return car
}

const myCar = createCar("Toyota", "Corolla", [["color", "red"], ["year", 2022]]);
console.log(myCar);