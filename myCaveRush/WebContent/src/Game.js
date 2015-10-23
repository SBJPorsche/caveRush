
BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game
    this.add;       //  used to add sprites, text, groups, etc
    this.camera;    //  a reference to the game camera
    this.cache;     //  the game cache
    this.input;     //  the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;      //  for preloading assets
    this.math;      //  lots of useful common math operations
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc
    this.stage;     //  the game stage
    this.time;      //  the clock
    this.tweens;    //  the tween manager
    this.world;     //  the game world
    this.particles; //  the particle manager
    this.physics;   //  the physics manager
    this.rnd;       //  the repeatable random number generator

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
};

BasicGame.Game.prototype = {
    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.add.tileSprite(0,0,this.game.width,this.game.height,'gamebg').autoScroll(0,0); //背景图 ropeNode
        this.walls = this.add.tileSprite(0,0,this.game.width,this.game.height,'walls').autoScroll(0,0); //竖墙
        this.ropeNode = this.add.tileSprite(this.game.width/2,0,8,this.game.height,'ropeNode').autoScroll(0,0); //ropeNode
        
        this.player = new BasicGame.Player(this.game, this.game.width/2, this.game.height/2-200)
        this.game.add.existing(this.player);

        var fenceCallback = function (event) {
            this.player.scale.set(5)
            this.walls.autoScroll(0,-1000)
            this.ropeNode.autoScroll(0,-1000)            
        }
        this.fence = new BasicGame.Fence(this.game, this.game.width/2, this.game.height/2,fenceCallback)
        this.game.add.existing(this.fence);
    },

    update: function () {
        this.game.physics.arcade.collide(this.player,this.fence, this.hitFence, null, this); //与fence碰撞
    },

    hitFence: function () {
            // this.walls.autoScroll(0,-1000)
            // this.ropeNode.autoScroll(0,-1000)
    },

    quitGame: function (pointer) {
        this.state.start('MainMenu');
    }

};
