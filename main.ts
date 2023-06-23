enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
sprites.onOverlap(SpriteKindLegacy.Enemy, SpriteKindLegacy.Player, function (sprite, otherSprite) {
    game.over(false)
})
info.onCountdownEnd(function () {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    fly = sprites.create(assets.image`boss`, SpriteKindLegacy.Enemy)
    fly.setPosition(0, 50)
    fly.setFlag(SpriteFlag.BounceOnWall, true)
    fly.follow(frog, 40)
})
let red_2: Sprite = null
let blue_2: Sprite = null
let pink_car: Sprite = null
let fly: Sprite = null
let frog: Sprite = null
info.setScore(10)
tiles.setCurrentTilemap(tilemap`level`)
frog = sprites.create(assets.image`player`, SpriteKindLegacy.Player)
frog.setPosition(0, 63)
controller.moveSprite(frog, 100, 100)
scene.cameraFollowSprite(frog)
let red_car = sprites.create(assets.image`enemy3`, SpriteKindLegacy.Enemy)
let blue_car = sprites.create(assets.image`enemy2`, SpriteKindLegacy.Enemy)
blue_car.setFlag(SpriteFlag.BounceOnWall, true)
red_car.setFlag(SpriteFlag.BounceOnWall, true)
blue_car.setFlag(SpriteFlag.StayInScreen, false)
red_car.setFlag(SpriteFlag.StayInScreen, false)
blue_car.startEffect(effects.trail)
red_car.setPosition(71, 78)
red_car.setVelocity(0, -76)
red_car.setFlag(SpriteFlag.StayInScreen, false)
red_car.startEffect(effects.trail)
frog.setFlag(SpriteFlag.StayInScreen, true)
blue_car.setPosition(25, 20)
blue_car.setVelocity(0, -42)
info.startCountdown(10)
game.onUpdate(function () {
    if (frog.isHittingTile(CollisionDirection.Right)) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        game.showLongText("\"The Lord is the stronghold of my life- of whom shall I be afraid?\"", DialogLayout.Bottom)
        game.over(true, effects.smiles)
    }
})
game.onUpdateInterval(1000, function () {
    info.setScore(info.countdown())
})
game.onUpdateInterval(1000, function () {
    pink_car = sprites.create(assets.image`enemy4`, SpriteKindLegacy.Enemy)
    pink_car.setFlag(SpriteFlag.DestroyOnWall, true)
    pink_car.setPosition(168, 120)
    pink_car.setVelocity(0, -79)
    pink_car.setFlag(SpriteFlag.StayInScreen, false)
    pink_car.startEffect(effects.trail)
})
game.onUpdateInterval(800, function () {
    blue_2 = sprites.create(assets.image`enemy5`, SpriteKindLegacy.Enemy)
    blue_2.setFlag(SpriteFlag.DestroyOnWall, true)
    blue_2.setPosition(119, 10)
    blue_2.setVelocity(0, 100)
    blue_2.setFlag(SpriteFlag.StayInScreen, false)
    blue_2.startEffect(effects.trail)
})
game.onUpdateInterval(800, function () {
    red_2 = sprites.create(assets.image`enemy1`, SpriteKindLegacy.Enemy)
    red_2.setFlag(SpriteFlag.DestroyOnWall, true)
    red_2.setPosition(215, 10)
    red_2.setVelocity(0, 100)
    red_2.startEffect(effects.trail)
})
