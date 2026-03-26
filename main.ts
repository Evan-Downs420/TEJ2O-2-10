                                       /* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Evan
* Created on: Feb 2026
* This program shows the brightness level of light
*/

// variables
let neopixelStrip: neopixel.Strip = null
let lightAmount: number = 0

// clean
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {

  lightAmount = input.lightLevel()

  if (lightAmount <= 51) {
      neopixelStrip.clear()
  }

  if (lightAmount > 52) {
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
  }

  if (lightAmount > 104) {
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  }

  if (lightAmount > 156) {
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
  }

  if (lightAmount > 208) {
      neopixelStrip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
  }
})
