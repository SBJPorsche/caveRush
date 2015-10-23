BasicGame.Player = function (game, x, y) {

    Phaser.Sprite.call(this, game, x, y, 'player');

    this.anchor.set(0.5)

    this.physics = game.physics.arcade;
    this.physics.enable(this);

    this.body.gravity.y = 0

    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.body.allowGravity = true;
    this.body.immovable = true;

    return this;

}

BasicGame.Player.prototype = Object.create(Phaser.Sprite.prototype);
BasicGame.Player.prototype.constructor = BasicGame.Player;

BasicGame.Player.prototype.run = function (speed) {
    // this.body.velocity.y+=speed;
}