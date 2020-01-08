var gpio = require('rpi-gpio');
var gpiop = gpio.promise;
gpiop.setup(7, gpio.DIR_OUT)
  .then(() => {
    var ledOn = false;
    setInterval(function() {
      ledOn = !ledOn;
      gpiop.write(7, ledOn);
    }, 100);
  })
.catch((err) => {
  console.log('Error: ', err.toString());
})
