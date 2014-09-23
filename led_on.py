import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
# set up GPIO output channel
pin = 23
GPIO.setup(pin, GPIO.OUT)
GPIO.output(pin,GPIO.HIGH)
time.sleep(8)
GPIO.output(pin,GPIO.LOW)
GPIO.cleanup()
