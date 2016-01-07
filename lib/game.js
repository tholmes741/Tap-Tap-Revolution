/*global Tap*/
(function(){
  if (typeof Tap === "undefined") {
    window.Tap = {};
  }

  var Game = Tap.Game = function() {
    this.dots = [];
    this.score = 0;
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 650;
  Game.BG_COLOR = '#DDDDDD';

  Game.prototype.add = function (object) {
    this.dots.push(object);
  };

  Game.prototype.remove = function (object) {
    this.dots.splice(this.dots.indexOf(object), 1);
  };

  Game.prototype.addDot = function (color) {
    var dot = new Tap.MovingObject(color);
    this.add(dot);
  };

  Game.prototype.sendDot = function () {
    var num = Math.floor(Math.random() * 3);
    this.addDot(COLORS[num]);
  };

  var COLORS = {
    0: {
      color: window.BALLS[0],
      pos: [238, -18],
      vel: [-1.55,5],
      radius: 4,
      game: this
    },
    1: {
      color: window.BALLS[1],
      pos: [245, -18],
      vel: [-0.1,5],
      radius: 4,
      game: this
    },
    2: {
      color: window.BALLS[2],
      pos: [250, -18],
      vel: [1.3,5],
      radius: 4,
      game: this
    }
  };


  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    if (this.score > 0 ) {
      ctx.fillStyle = 'white';
      ctx.font = '24pt Arial';
      ctx.textAlign = 'left';
      ctx.fillText(this.score, 25, 50);
    }
    this.score += 1;
    this.dots.forEach(function (object) {
      object.draw(ctx);
    });
  };


  Game.prototype.step = function (delta) {
    this.moveObjects(delta);
  };

  Game.prototype.moveObjects = function (delta) {
  this.dots.forEach(function (object) {
    object.move(delta);
  });
};

Game.prototype.keyPressed = function (e) {
  if (e.keyCode === 37){
    console.log('left');
  } else if (e.keyCode === 40) {
    console.log('down');
  } else if (e.keyCode === 39) {
    console.log('right');
  }
};

})();
