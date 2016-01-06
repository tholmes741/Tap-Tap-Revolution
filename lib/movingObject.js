/*global Tap*/
(function() {
  if (typeof Tap === "undefined") {
    window.Tap = {};
  }

  var MovingObject = Tap.MovingObject = function(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function (timeDelta) {
    var velScale = (timeDelta * 60) / 1000;
    var offsetX = this.vel[0] * velScale;
    var offsetY = this.vel[1] * velScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];



  };

  MovingObject.RED = '#FF0000';
  MovingObject.GREEN = '#00FF00';
  MovingObject.BLUE = '#0000FF';
})();
