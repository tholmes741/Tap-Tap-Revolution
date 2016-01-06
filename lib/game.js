/*global Tap*/
(function(){
  if (typeof Tap === "undefined") {
    window.Tap = {};
  }

  var Game = Tap.Game = function() {
    this.dots = [];

    this.addDot();
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 600;
  Game.BG_COLOR = '#DDDDDD';

  Game.prototype.add = function (object) {
    this.dots.push(object);
  };

  Game.prototype.remove = function (object) {
    this.dots.splice(this.dots.indexOf(object), 1);
  };

  Game.prototype.addDot = function () {
    var dot = new Tap.MovingObject(blue);
    this.add(dot);
  };

  var red = {
    pos: [200, 0],
    vel: [-1,3],
    radius: 30,
    color: '#FF0000',
    game: this
  };

  var green = {
    pos: [250, 0],
    vel: [0,5],
    radius: 30,
    color: '#00FF00',
    game: this
  };

  var blue = {
    pos: [300, 0],
    vel: [1,3],
    radius: 30,
    color: '#0000FF',
    game: this
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.drawBoard(ctx);
    this.dots.forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.drawBoard = function (ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 510);
    ctx.lineTo(500, 510);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(200,0);
    ctx.lineTo(500/8, 510);
    ctx.lineTo(500/8, 600);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(250,0);
    ctx.lineTo(250, 600);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(300,0);
    ctx.lineTo((500/8) * 7, 510);
    ctx.lineTo((500/8) * 7, 600);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.closePath();

  };

  Game.prototype.step = function (delta) {
    this.moveObjects(delta);
  };

  Game.prototype.moveObjects = function (delta) {
  this.dots.forEach(function (object) {
    object.move(delta);
  });
};

})();
