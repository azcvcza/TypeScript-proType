var sherlock = {
    name: 'Bendict',
    heightInCentimeters: 183.88
};
var sayHello = function (name) {
    console.log("hello + ", name);
};
sayHello(sherlock.name);
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["pedalCycle"] = 0] = "pedalCycle";
    VehicleType[VehicleType["MotorCycle"] = 1] = "MotorCycle";
    VehicleType[VehicleType["Car"] = 2] = "Car";
    VehicleType[VehicleType["Van"] = 3] = "Van";
    VehicleType[VehicleType["Bus"] = 4] = "Bus";
    VehicleType[VehicleType["Lorry"] = 5] = "Lorry";
})(VehicleType || (VehicleType = {}));
var t_type = VehicleType.Lorry;
var typeName = VehicleType[t_type];
var monuments = [];
monuments.push({
    name: 'statue of liberty',
    heightInMeters: 46
});
sayHello(monuments[0].name);
