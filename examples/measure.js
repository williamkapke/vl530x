const i2c = require('i2c-bus-promise')
const VL530X = require('../')

i2c.open(1).then(async (bus) => {
  const vl530x = VL530X(bus, 0x29)
  while(true) {
    console.log(await vl530x.measure())
  }
})
.catch(console.error)
