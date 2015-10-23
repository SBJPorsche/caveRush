
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {
		this.background = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
		this.background.anchor.set(0.5,0.5)
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.set(0.5,0.5)
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('titlepage', 'images/loadingImage.png');
		this.load.image('gamebg', 'images/bg03a.png');
		// this.load.atlas('playButton', 'images/play_button.png', 'images/play_button.json');
		this.load.audio('titleMusic', 'sounds/bg1FightLoop.mp3');
		// this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
		this.load.image('startNormal', 'images/kp-qianghua.png');
		this.load.image('walls', 'images/walls.png');
		this.load.image('fence', 'images/kp-qianghuaan.png');
		this.load.image('ropeNode', 'images/ropeNode.png');
		this.load.image('player', 'images/com.tencent.plus.logo.png');
	},

	create: function () {
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('Game');
		}

	}

};
