const i2c = require('i2c-bus-promise')
const VL530X = require('../')

i2c.open(1).then(async (bus) => {
  const vl530x = VL530X(bus, 0x29)

  // HIGH_ACCURACY
  await vl53l0x.setMeasurementTimingBudget(400000)

  while(true) {
    console.log(await vl530x.measure())
  }
})
.catch(console.error)



  // LONG_RANGE
  // await vl53l0xsetSignalRateLimit(0.1)
  // await vl53l0x.getVcselPulsePeriod('pre', 18)
  // await vl53l0x.getVcselPulsePeriod('final', 14)

  // HIGH_SPEED
  // await vl53l0x.setMeasurementTimingBudget(20000)

