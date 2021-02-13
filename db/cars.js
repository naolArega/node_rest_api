const knex = require("./knex.js");
const tableName = "cars";

function createCar(car) {
    knex(tableName).insert(car)
        .then((car) => {
            return car;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
}

function getAllCars() {
    return knex(tableName).select("*")
        .then((cars) => {
            console.log(cars);
            return cars;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
}

function deleteCar(id) {
    return knex(tableName).where("id", id).del()
        .then((car) => {
            console.log(car);
            return car;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
}

function updateCar(id, car) {
    return knex(tableName).where("id", id).update(car)
        .then((car) => {
            console.log(car);
            return car;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
}

module.exports = {
    createCar,
    getAllCars,
    deleteCar,
    updateCar
};