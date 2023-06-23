info.onCountdownEnd(function () {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    fly = sprites.create(assets.image`boss`, SpriteKind.Enemy)
    fly.setPosition(0, 50)
    fly.setFlag(SpriteFlag.BounceOnWall, true)
    fly.follow(player, 40)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let fast1: Sprite = null
let fast2: Sprite = null
let slow1: Sprite = null
let fly: Sprite = null
let player: Sprite = null
info.setScore(10)
tiles.setCurrentTilemap(tilemap`level`)
player = sprites.create(assets.image`player`, SpriteKind.Player)
player.setPosition(0, 63)
controller.moveSprite(player, 100, 100)
scene.cameraFollowSprite(player)
let enemy2 = sprites.create(assets.image`enemy3`, SpriteKind.Enemy)
let enemy1 = sprites.create(assets.image`enemy2`, SpriteKind.Enemy)
enemy1.setFlag(SpriteFlag.BounceOnWall, true)
enemy2.setFlag(SpriteFlag.BounceOnWall, true)
enemy1.startEffect(effects.trail)
enemy2.setPosition(71, 78)
enemy2.setVelocity(0, -76)
enemy2.startEffect(effects.trail)
enemy1.setPosition(25, 20)
enemy1.setVelocity(0, -42)
info.startCountdown(10)
game.onUpdate(function () {
    if (player.isHittingTile(CollisionDirection.Right)) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        game.showLongText("\"The Lord is the stronghold of my life- of whom shall I be afraid?\"", DialogLayout.Bottom)
        game.over(true, effects.smiles)
    }
})
game.onUpdateInterval(1000, function () {
    info.setScore(info.countdown())
})
game.onUpdateInterval(1000, function () {
    slow1 = sprites.create(assets.image`enemy4`, SpriteKind.Enemy)
    slow1.setFlag(SpriteFlag.DestroyOnWall, true)
    slow1.setPosition(168, 120)
    slow1.setVelocity(0, -79)
    slow1.startEffect(effects.trail)
})
game.onUpdateInterval(800, function () {
    fast2 = sprites.create(assets.image`enemy5`, SpriteKind.Enemy)
    fast2.setFlag(SpriteFlag.DestroyOnWall, true)
    fast2.setPosition(119, 10)
    fast2.setVelocity(0, 100)
    fast2.startEffect(effects.trail)
})
game.onUpdateInterval(800, function () {
    fast1 = sprites.create(assets.image`enemy1`, SpriteKind.Enemy)
    fast1.setFlag(SpriteFlag.DestroyOnWall, true)
    fast1.setPosition(215, 10)
    fast1.setVelocity(0, 100)
    fast1.startEffect(effects.trail)
})
