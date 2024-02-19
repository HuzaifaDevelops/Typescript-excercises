function createCar(manufacturer, model, extraFeatures) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    extraFeatures.forEach(function (feature) {
        var key = feature[0], value = feature[1];
        car[key] = value;
    });
    return car;
}
var myCar = createCar("Toyota", "Corolla", [["color", "red"], ["year", 2022]]);
console.log(myCar);
