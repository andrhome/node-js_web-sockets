const events = require('events');
const util = require('util');

const Cars = function (model) {
  this.model = model;
};

util.inherits(Cars, events.EventEmitter);

const bmw = new Cars('BMW');
const audi = new Cars('Audi');
const volvo = new Cars('Volvo');

const cars = [bmw, audi, volvo];
cars.forEach(function (car) {
  car.on('speed', function (speed) {
    console.log(`${car.model} speed is ${speed}.`);
  });
});

bmw.emit('speed', '280 km/h');
audi.emit('speed', '265 km/h');
volvo.emit('speed', '250 km/h');