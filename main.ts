controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 0
    vy = -1.5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = -1.5
    vy = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 1.5
    vy = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 0
    vy = 1.5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (atefoodflag == 0) {
        snakebody.unshift(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            `, SpriteKind.Player))
        snakebody[0].setPosition(foodx - updatevx * 10 + 2, foody - updatevy * 10 + 2)
        foodx = randint(0, 15) * 10
        foody = randint(0, 11) * 10
    }
    atefoodflag += 1
})
let updatevy = 0
let updatevx = 0
let vy = 0
let vx = 0
let foody = 0
let foodx = 0
let atefoodflag = 0
let snakebody: Sprite[] = []
snakebody = []
atefoodflag = 0
let snakehead = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 f 7 7 7 7 f 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 f f f f f f 7 7 
    . . . . . . 7 f 3 1 3 3 1 3 f 7 
    . . . . . . 7 f 3 3 2 2 3 3 f 7 
    . . . . . . 7 7 f f 2 2 f f 7 7 
    `, SpriteKind.Player)
let snakefood = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f 7 7 f f f f 
    . . . . . . f f f f 7 f f f f f 
    . . . . . . f f f 2 2 2 2 f f f 
    . . . . . . f f 2 2 2 2 2 2 f f 
    . . . . . . f 2 2 2 2 2 2 2 2 f 
    . . . . . . f 2 2 2 2 2 2 2 2 f 
    . . . . . . f 2 2 2 2 2 2 2 2 f 
    . . . . . . f 2 2 2 2 2 2 2 2 f 
    . . . . . . f f 2 2 2 2 2 2 f f 
    . . . . . . f f f 2 2 2 2 f f f 
    `, SpriteKind.Food)
let snakeheadx = 0
let snakeheady = 0
foodx = 80
foody = 60
vx = 1
vy = 0
game.onUpdate(function () {
    snakehead.setPosition(snakeheadx + 2, snakeheady + 2)
    snakefood.setPosition(foodx + 2, foody + 2)
    if (snakeheadx % 10 == 0 && snakeheady % 10 == 0) {
        snakebody.unshift(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            . . . . . . f f 7 7 7 7 7 7 f f 
            . . . . . . 7 7 f f f f f f 7 7 
            `, SpriteKind.Player))
        snakebody[0].setPosition(snakeheadx + 2, snakeheady + 2)
        snakebody.pop().destroy()
        updatevx = vx
        updatevy = vy
        atefoodflag = 0
    }
    snakeheadx += updatevx
    snakeheady += updatevy
})
