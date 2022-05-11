let calif_parcial = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("que hace un perro con un taladro")
    basic.showLeds(`
        . . . # #
        . . . # #
        # # # # .
        # # # # .
        # . . # .
        `)
    basic.pause(1000)
    basic.showString("taladrando")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("calculando calificacion del parcial")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    calif_parcial = randint(0, 10)
    basic.showString("" + (calif_parcial))
    if (calif_parcial > 6) {
        basic.showString(":D")
    }
    if (calif_parcial < 6) {
        basic.showString(":(")
    }
})
