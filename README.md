# Bible Transformers 4: Psalm 27

## Introduction @showdialog

Welcome to Bible Transformers! Psalm 27 is a wonderful song of hope by King David
in the face of many enemies on every side.

> The Lord is my light and my salvation—
>    whom shall I fear?
> The Lord is the stronghold of my life—
>    of whom shall I be afraid?

He doesn't need to be afraid because the Lord God is his 'stronghold'.

Together we're going to make a game all about reaching the 'stronghold' and finding
safety.

> When the wicked advance against me
>    to devour me...
> Though an army besiege me,
>    my heart will not fear;
> though war break out against me,
>    even then I will be confident.

You will face many enemies in this game, but if you can reach safety in the Lord
then you don't need to be afraid!

## Step 1: Adding the player character

We're going to begin by populating our ``||loops:on start||`` block:

  * Create a sprite for your player character with the ``||variables(sprites):set sprite to||`` block. Set it to be of type "Player".

  * Set the player's initial position using ``||sprites:set sprite position||``.
The 'x' value means how far left - try 0 to start with. The 'y' value means how far from the top - try something like 65.

  * Now we want to be able to move the player around using the joystick controls. Open up the "Controller" menu and add:
``||controller:move sprite with buttons||``

  * Finally, let's make the camera move with the player:
``||scene:camera follow sprite||``

Try running the game and seeing what happens!

```blocks
let player = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c c c . . . . . . . 
. . . . . . 5 3 5 . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . 2 2 2 2 2 2 2 3 . . . 
. . . . 2 2 2 2 2 . . . . . . . 
. . . . 2 . 2 2 2 . . . . . . . 
. . . . 3 . 2 2 2 . . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . b b b . . . . . . . 
. . . . . . b . b . . . . . . . 
. . . . . b b . b b . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)

player.setPosition(0, 63)
controller.moveSprite(player, 100, 100)
scene.cameraFollowSprite(player)
```

## Step 2: Creating a map

Now we're going to create a world for your character to explore!

Start by adding a ``||scene:set tilemap to||`` block to the workspace.

Now we're going to create a tilemap. Make a large grass area in the top left, perhaps
with some paths running top to bottom, and a castle wall down the right hand side
(our "stronghold").

Activate the "Draw walls" function:

Fill in your "stronghold" as a solid wall, and also the area at the bottom, below your grass area:

```blocks
tiles.setCurrentTilemap(tilemap``)
```

## Step 3: Adding some enemies

Time to add a bit of tension: let's create some enemies! Just as David was surrounded
by armies, we're going to add some soldiers marching back and forth.

* Start with a sprite for the first two soldiers, with the ``||variables(sprites):set sprite to||`` block.
You'll need to create a new variable for each one, and make sure you set them to be of type "Enemy".
* For each one, ``||sprites:set bounce on wall||`` to ON.
* Set the initial position: ``||sprites:set position||``. Try 25, 20 for the first one, and 71, 78 for the second one.
* Set an initial velocity (speed): ``||sprites:set velocity||``. Try 0, -42 for the first and 0, -72 for the second. That means that the second one will move faster than the second.
* Finally, for a bit of juice, add a sparking trail effect to each one: ``||sprites:start spray effect||``.

```blocks
let enemy1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f d f d f . . . . . . 
. . . . . . d d d . . . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . . a a a f . . . . . . 
. . . . . . a a a f . . . . . . 
. . . . . . a a a f . . . . . . 
. . . . . . 2 2 2 f . . . . . . 
. . . . . . 2 . 2 f . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Enemy)
let enemy2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f d f d f . . . . . . 
. . . . . . d d d . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . f 8 8 8 . . . . . . . 
. . . . f f f 8 8 . . . . . . . 
. . . . . f 8 8 8 . . . . . . . 
. . . . . f 4 4 4 . . . . . . . 
. . . . . f 4 . 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Enemy)
enemy1.setFlag(SpriteFlag.BounceOnWall, true)
enemy2.setFlag(SpriteFlag.BounceOnWall, true)
enemy1.setPosition(25, 20)
enemy2.setPosition(71, 78)
enemy1.setVelocity(0, -42)
enemy2.setVelocity(0, -76)
enemy1.startEffect(effects.trail)
enemy2.startEffect(effects.trail)
```

## Step 4: Win and lose states

## Step 5: More enemies

## Step 6: Scoring

## Step 7: A big boss
    
