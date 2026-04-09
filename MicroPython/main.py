"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *

from microbit import *
import neopixel

# Initialize NeoPixels on Pin 16 with 4 LEDs
neopixel_strip = neopixel.NeoPixel(pin16, 4)

# Setup: Clear screen and LEDs
display.clear()
neopixel_strip.clear()
neopixel_strip.show()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        # Get light level (0-255)
        light_amount = display.read_light_level()
        display.scroll(str(light_amount))
        
        # Clear previous strip state
        neopixel_strip.clear()

        # LED 0 (First LED)
        if light_amount > 0:
            neopixel_strip[0] = (255, 0, 0) # Red
            
        # LED 1
        if light_amount > 51:
            neopixel_strip[1] = (255, 0, 0)
            
        # LED 2
        if light_amount > 102:
            neopixel_strip[2] = (255, 0, 0)
            
        # LED 3
        if light_amount > 153:
            neopixel_strip[3] = (255, 0, 0)

        neopixel_strip.show()
        
        # Small debounce delay
        sleep(200)
