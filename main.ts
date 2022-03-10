input.onButtonPressed(Button.A, function () {
    basic.showString("Short")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(9)
})
basic.showLeds(`
    # . # . #
    . # # # .
    . . # . .
    . # # # .
    # . . . #
    `)
basic.forever(function () {
	
})
