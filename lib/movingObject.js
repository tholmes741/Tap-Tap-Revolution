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
    ctx.drawImage(this.color, this.pos[0], this.pos[1], this.radius * 2, this.radius * 2);
  };

  MovingObject.prototype.move = function (timeDelta) {
    var velScale = (timeDelta * 60) / 1000;
    var offsetX = this.vel[0] * velScale;
    var offsetY = this.vel[1] * velScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    this.radius = this.radius + .15;
  };

  MovingObject.prototype.redSaved = function () {
    var x = this.pos[0] < 115 && this.pos[0] > 35;
    var y = this.pos[1] > 545 && this.pos[1] < 620;
    return (x && y);
  };

  MovingObject.prototype.greenSaved = function () {
    var x = this.pos[0] < 290 && this.pos[0] > 210;
    var y = this.pos[1] > 545 && this.pos[1] < 620;
    return (x && y);
  };

  MovingObject.prototype.blueSaved = function () {
    var x = this.pos[0] < 470 && this.pos[0] > 390;
    var y = this.pos[1] > 545 && this.pos[1] < 620;
    return (x && y);
  };

  MovingObject.prototype.out = function () {
    return (this.pos[1] > 700);
  };
})();
