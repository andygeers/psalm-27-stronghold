// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level":
            case "level1":return tiles.createTilemap(hex`10001000021011021011021011021011021203080210110210110210110210110212020a021011031011021011021011011203090210110210110210110210110212020d0210110210110210110210110212020b0210110110110210110210110212020c021011021011031011021011021202080210110210110210110110110212020a0210110210110210110210110212030904050505050505050505050505050f0e060606060606060606060606060607060607060606060606060606060606060606060606060606070606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606070606060606`, img`
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tile1":return tile1;
            case "transparency16":return transparency16;
            case "myTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
