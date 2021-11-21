input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    let A = 0
    let revievedstring = 0
    if (revievedstring == A) {
        basic.showIcon(IconNames.Heart)
    } else {
        let B = 0
        if (revievedstring == B) {
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
