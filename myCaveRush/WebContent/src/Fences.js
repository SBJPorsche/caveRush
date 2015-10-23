BasicGame.Fence = function (game, x, y,callback) {

    Phaser.Sprite.call(this, game, x, y, 'fence');

    this.anchor.set(0.5)
    this.callback = callback

    this.physics = game.physics.arcade;
    this.physics.enable(this);
    this.body.gravity.y = -80;

    this.inputEnabled = true;
    this.input.useHandCursor = true;
    this.events.onInputDown.add(this.destroySprite, this);

    return this;
}

BasicGame.Fence.prototype = Object.create(Phaser.Sprite.prototype);
BasicGame.Fence.prototype.constructor = BasicGame.Fence;

var touchCnt = 1
BasicGame.Fence.prototype.destroySprite = function () {
    touchCnt ++ ;
    this.scale.set(touchCnt+1)
    if (touchCnt == 3) {
        // this.callback()
        this.kill();
    };
}