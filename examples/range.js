const i2c = require('i2c-bus-promise')
const VL530X = require('../')

i2c.open(1).then(async (bus) => {
  const vl530x = VL530X(bus, 0x29)

  // LONG_RANGE
  await vl53l0x.setSignalRateLimit(0.1)
  await vl53l0x.getVcselPulsePeriod('pre', 18)
  await vl53l0x.getVcselPulsePeriod('final', 14)

  while(true) {
    console.log(await vl530x.measure())
  }
})
.catch(console.error)

