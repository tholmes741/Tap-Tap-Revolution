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

    this.lastTime = 0;
    var that = this;
    //start the animation
    requestAnimationFrame(this.animate.bind(this));
    setInterval(that.game.sendDot.bind(this.game), 300);

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

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    //every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  };
})();
