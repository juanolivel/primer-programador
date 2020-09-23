input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        # . . . .
        . # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . # . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(3000)
    basic.showLeds(`
        . # . . .
        . # . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Heart)
})
