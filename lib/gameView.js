/*global Tap*/
(function(){
  if (typeof Tap === "undefined") {
    window.Tap = {};
  }

  var GameView = Tap.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;

  };

  GameView.prototype.start = function () {
    this.game.draw(this.ctx);
    this.instructions();
    this.boundF =  this.gameStart.bind(this);
    document.addEventListener("keypress", this.boundF);
  };

  GameView.prototype.gameStart = function (e) {
    if (typeof e === 'undefined' || e.keyCode === 32) {
      document.removeEventListener("keypress", this.boundF);
      document.addEventListener("keydown", this.game.keyPressed.bind(this.game));
      document.getElementById('music').play();
      this.lastTime = 0;
      var that = this;
      //start the animation
      setInterval(this.game.sendDot.bind(this.game), 300);
      requestAnimationFrame(this.animate.bind(this));
    }
  };

  GameView.prototype.instructions = function () {
    this.ctx.fillStyle = 'white';
    this.ctx.font = '24pt Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Tap Tap Revolution', 250, 200);
    this.ctx.font = '12pt Arial';
    this.ctx.fillText('Tap each of the colored balls when they get to the bottom of the ', 250, 300);
    this.ctx.fillText('screen. Use the left, down, and right arrow keys.', 250, 320);
    this.ctx.font = '18pt Arial';
    this.ctx.fillText('Press Space to start the game.', 250, 450);

  };

  var red = {

    pos: [200, -18],
    vel: [-10/3,10],
    radius: 5,
    color: '#FF0000',
    game: this
  };

  var green = {
    pos: [200, -18],
    vel: [0,10],
    radius: 5,
    color: '#00FF00',
    game: this
  };

  var blue = {
    pos: [200, -18],
    vel: [10/3,10],
    radius: 5,
    color: '#0000FF',
    game: this
  };

  GameView.prototype.animate = function(time){
    var timeDelta = time - this.lastTime;
    if (!this.game.lost) {
      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      this.lastTime = time;
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.game.lose(this.ctx);
      this.restart =  this.newGame.bind(this);
      document.addEventListener("keypress", this.restart);
    }
  };

  GameView.prototype.newGame = function (e) {
    if (e.keyCode === 32) {
      document.removeEventListener("keypress", this.restart);
      var game = new Tap.Game();
      this.game = game;
      this.gameStart();
    }
  };

})();
